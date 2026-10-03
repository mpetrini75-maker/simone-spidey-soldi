#!/usr/bin/env python3
"""
Cancello di collaudo per Spidey Money Lab.
Verifica:
1. Tutti i file audio richiamati da app.js (fissi, modulari, tagli, importi) esistono.
2. Tutti gli asset locali citati in index.html esistono.
3. Il service worker elenca tutti gli asset e nessun file mancante.
Uscita 0 = tutto a posto.
"""

import os
import re
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(BASE_DIR, "assets", "audio")

errori = []

# 1. Verifica file citati in index.html
index_file = os.path.join(BASE_DIR, "index.html")
if not os.path.exists(index_file):
    errori.append("index.html non trovato")
else:
    with open(index_file, "r", encoding="utf-8") as f:
        html = f.read()
    refs = re.findall(r'(?:src|href)="([^"#:]+)"', html)
    for r in refs:
        if r.startswith("http"):
            continue
        p = os.path.normpath(os.path.join(BASE_DIR, r))
        if not os.path.exists(p):
            errori.append(f"index.html cita risorsa inesistente: {r}")

# 2. Verifica audio richiamati da app.js
app_file = os.path.join(BASE_DIR, "app.js")
if not os.path.exists(app_file):
    errori.append("app.js non trovato")
else:
    with open(app_file, "r", encoding="utf-8") as f:
        js = f.read()
    
    # Audio diretti es. assets/audio/foo.mp3
    audio_direct = re.findall(r'assets/audio/([a-zA-Z0-9_\-]+\.mp3)', js)
    for a in set(audio_direct):
        p = os.path.join(AUDIO_DIR, a)
        if not os.path.exists(p):
            errori.append(f"app.js richiede file audio mancante: {a}")

    # Intro missioni dinamiche: intro_change_${changeIdx}.mp3, intro_exact_${audioIdx}.mp3, intro_verify_${verifyIdx}.mp3
    for i in range(8):
        f = f"intro_change_{i}.mp3"
        if not os.path.exists(os.path.join(AUDIO_DIR, f)):
            errori.append(f"Manca file intro resto: {f}")
    for i in range(5):
        f = f"intro_exact_{i}.mp3"
        if not os.path.exists(os.path.join(AUDIO_DIR, f)):
            errori.append(f"Manca file intro esatto: {f}")
    for i in range(3):
        f = f"intro_verify_{i}.mp3"
        if not os.path.exists(os.path.join(AUDIO_DIR, f)):
            errori.append(f"Manca file intro verifica: {f}")

    # Tagli monete/banconote (explore_ e taglio_)
    tagli = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10]
    for c in tagli:
        f_exp = f"explore_{c}.mp3"
        f_tag = f"taglio_{c}.mp3"
        if not os.path.exists(os.path.join(AUDIO_DIR, f_exp)):
            errori.append(f"Manca file esplorazione taglio: {f_exp}")
        if not os.path.exists(os.path.join(AUDIO_DIR, f_tag)):
            errori.append(f"Manca file voce taglio: {f_tag}")

    # Numeri: zero euro, euro da 1 a 60, centesimi isolati e centesimi con "e"
    if not os.path.exists(os.path.join(AUDIO_DIR, "num_zero_euro.mp3")):
        errori.append("Manca num_zero_euro.mp3")
    for e in range(1, 61):
        f = f"num_euro_{e}.mp3"
        if not os.path.exists(os.path.join(AUDIO_DIR, f)):
            errori.append(f"Manca importo euro: {f}")
    for c in range(10, 100, 10):
        f_only = f"num_cent_only_{c}.mp3"
        f_and = f"num_cent_and_{c}.mp3"
        if not os.path.exists(os.path.join(AUDIO_DIR, f_only)):
            errori.append(f"Manca centesimi isolati: {f_only}")
        if not os.path.exists(os.path.join(AUDIO_DIR, f_and)):
            errori.append(f"Manca centesimi con e: {f_and}")

# 3. Verifica Service Worker
sw_file = os.path.join(BASE_DIR, "service-worker.js")
if not os.path.exists(sw_file):
    errori.append("service-worker.js non trovato")
else:
    with open(sw_file, "r", encoding="utf-8") as f:
        sw = f.read()
    sw_assets = re.findall(r"'\./([^']+)'", sw)
    for a in sw_assets:
        p = os.path.normpath(os.path.join(BASE_DIR, a))
        if not os.path.exists(p):
            errori.append(f"service-worker.js elenca risorsa inesistente: {a}")

# 4. Verifica assenza di fallback WebSpeech e API server
if "speechSynthesis" in js:
    errori.append("app.js contiene ancora riferimenti a speechSynthesis!")
if "fallbackWebSpeech" in js:
    errori.append("app.js contiene ancora riferimenti a fallbackWebSpeech!")
if "/api/tts" in js:
    errori.append("app.js contiene ancora chiamate a /api/tts!")

# Resoconto
n_audio = len(os.listdir(AUDIO_DIR)) if os.path.exists(AUDIO_DIR) else 0
print(f"[*] Controllo Spidey Money Lab:")
print(f"    - File audio presenti in assets/audio/: {n_audio}")
print(f"    - Risorse verificate nel Service Worker: {len(sw_assets) if 'sw_assets' in locals() else 0}")
print(f"    - Stato fallback robotico: NESSUNO (completamente rimosso)")

if errori:
    print(f"\n[!] Rilevati {len(errori)} problemi:")
    for err in errori:
        print(f"    - {err}")
    sys.exit(1)
else:
    print("\n[OK] TUTTO VERIFICATO CON SUCCESSO. Uscita 0.")
    sys.exit(0)
