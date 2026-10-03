#!/usr/bin/env python3
"""
Generazione automatica di service-worker.js per Spidey Money Lab.
Elenca tutti gli asset (pagine, script, immagini soldi, audio naturali Diego).
"""

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SW_FILE = os.path.join(BASE_DIR, "service-worker.js")

ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png",
]

money_dir = os.path.join(BASE_DIR, "assets", "money")
if os.path.exists(money_dir):
    for f in sorted(os.listdir(money_dir)):
        if f.endswith((".png", ".jpg", ".jpeg", ".svg")):
            ASSETS.append(f"./assets/money/{f}")

audio_dir = os.path.join(BASE_DIR, "assets", "audio")
if os.path.exists(audio_dir):
    for f in sorted(os.listdir(audio_dir)):
        if f.endswith(".mp3"):
            ASSETS.append(f"./assets/audio/{f}")

CACHE_NAME = "spidey-soldi-v1"

content = f"""const CACHE = '{CACHE_NAME}';

const ASSETS = [
"""

for a in ASSETS:
    content += f"  '{a}',\n"

content += """
];

// Installazione: pre-carica tutti gli asset locali
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Attivazione: elimina eventuali cache obsolete
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: strategie mirate per HTML, audio e asset statici
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Font esterni Google: cache-first
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const network = fetch(e.request).then(res => {
            cache.put(e.request, res.clone());
            return res;
          });
          return cached || network;
        })
      )
    );
    return;
  }

  // File HTML: network-first per aggiornamenti immediati, fallback cache offline
  const isHTML = e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (url.origin === self.location.origin && isHTML) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        fetch(e.request).then(res => {
          cache.put(e.request, res.clone());
          return res;
        }).catch(() => cache.match(e.request))
      )
    );
    return;
  }

  // Audio e immagini locali: cache-first con fallback network (ideale per tablet offline)
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            if (res.status === 200) {
              cache.put(e.request, res.clone());
            }
            return res;
          });
        })
      )
    );
  }
});
"""

with open(SW_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"[OK] Generato service-worker.js con {len(ASSETS)} asset.")
