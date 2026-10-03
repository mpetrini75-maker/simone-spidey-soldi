const CACHE = 'spidey-soldi-v1';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/money/bill_10_back.png',
  './assets/money/bill_10_front.png',
  './assets/money/bill_20_back.jpg',
  './assets/money/bill_20_front.jpg',
  './assets/money/bill_50_back.png',
  './assets/money/bill_50_front.png',
  './assets/money/bill_5_back.png',
  './assets/money/bill_5_front.png',
  './assets/money/coin_10_cent.jpg',
  './assets/money/coin_10_cent.png',
  './assets/money/coin_1_euro.png',
  './assets/money/coin_20_cent.jpg',
  './assets/money/coin_20_cent.png',
  './assets/money/coin_2_euro.jpg',
  './assets/money/coin_2_euro.png',
  './assets/money/coin_50_cent.jpg',
  './assets/money/coin_50_cent.png',
  './assets/audio/explore_10.mp3',
  './assets/audio/explore_100.mp3',
  './assets/audio/explore_1000.mp3',
  './assets/audio/explore_20.mp3',
  './assets/audio/explore_200.mp3',
  './assets/audio/explore_2000.mp3',
  './assets/audio/explore_50.mp3',
  './assets/audio/explore_500.mp3',
  './assets/audio/explore_5000.mp3',
  './assets/audio/intro_change_0.mp3',
  './assets/audio/intro_change_1.mp3',
  './assets/audio/intro_change_2.mp3',
  './assets/audio/intro_change_3.mp3',
  './assets/audio/intro_change_4.mp3',
  './assets/audio/intro_change_5.mp3',
  './assets/audio/intro_change_6.mp3',
  './assets/audio/intro_change_7.mp3',
  './assets/audio/intro_exact_0.mp3',
  './assets/audio/intro_exact_1.mp3',
  './assets/audio/intro_exact_2.mp3',
  './assets/audio/intro_exact_3.mp3',
  './assets/audio/intro_exact_4.mp3',
  './assets/audio/intro_verify_0.mp3',
  './assets/audio/intro_verify_1.mp3',
  './assets/audio/intro_verify_2.mp3',
  './assets/audio/mid_abbiamo_dato.mp3',
  './assets/audio/mid_per_raggiungere.mp3',
  './assets/audio/mid_puoi_aggiungere_per_arrivare_a.mp3',
  './assets/audio/mid_salto_totale_e_di.mp3',
  './assets/audio/msg_explore_intro.mp3',
  './assets/audio/msg_fronte_banconote.mp3',
  './assets/audio/msg_hint_piattino_perfetto.mp3',
  './assets/audio/msg_hint_troppi_soldi.mp3',
  './assets/audio/msg_resto_zero.mp3',
  './assets/audio/msg_retro_banconote.mp3',
  './assets/audio/msg_tavolo_reale.mp3',
  './assets/audio/msg_voce_attiva.mp3',
  './assets/audio/num_cent_and_10.mp3',
  './assets/audio/num_cent_and_20.mp3',
  './assets/audio/num_cent_and_30.mp3',
  './assets/audio/num_cent_and_40.mp3',
  './assets/audio/num_cent_and_50.mp3',
  './assets/audio/num_cent_and_60.mp3',
  './assets/audio/num_cent_and_70.mp3',
  './assets/audio/num_cent_and_80.mp3',
  './assets/audio/num_cent_and_90.mp3',
  './assets/audio/num_cent_only_10.mp3',
  './assets/audio/num_cent_only_20.mp3',
  './assets/audio/num_cent_only_30.mp3',
  './assets/audio/num_cent_only_40.mp3',
  './assets/audio/num_cent_only_50.mp3',
  './assets/audio/num_cent_only_60.mp3',
  './assets/audio/num_cent_only_70.mp3',
  './assets/audio/num_cent_only_80.mp3',
  './assets/audio/num_cent_only_90.mp3',
  './assets/audio/num_euro_1.mp3',
  './assets/audio/num_euro_10.mp3',
  './assets/audio/num_euro_11.mp3',
  './assets/audio/num_euro_12.mp3',
  './assets/audio/num_euro_13.mp3',
  './assets/audio/num_euro_14.mp3',
  './assets/audio/num_euro_15.mp3',
  './assets/audio/num_euro_16.mp3',
  './assets/audio/num_euro_17.mp3',
  './assets/audio/num_euro_18.mp3',
  './assets/audio/num_euro_19.mp3',
  './assets/audio/num_euro_2.mp3',
  './assets/audio/num_euro_20.mp3',
  './assets/audio/num_euro_21.mp3',
  './assets/audio/num_euro_22.mp3',
  './assets/audio/num_euro_23.mp3',
  './assets/audio/num_euro_24.mp3',
  './assets/audio/num_euro_25.mp3',
  './assets/audio/num_euro_26.mp3',
  './assets/audio/num_euro_27.mp3',
  './assets/audio/num_euro_28.mp3',
  './assets/audio/num_euro_29.mp3',
  './assets/audio/num_euro_3.mp3',
  './assets/audio/num_euro_30.mp3',
  './assets/audio/num_euro_31.mp3',
  './assets/audio/num_euro_32.mp3',
  './assets/audio/num_euro_33.mp3',
  './assets/audio/num_euro_34.mp3',
  './assets/audio/num_euro_35.mp3',
  './assets/audio/num_euro_36.mp3',
  './assets/audio/num_euro_37.mp3',
  './assets/audio/num_euro_38.mp3',
  './assets/audio/num_euro_39.mp3',
  './assets/audio/num_euro_4.mp3',
  './assets/audio/num_euro_40.mp3',
  './assets/audio/num_euro_41.mp3',
  './assets/audio/num_euro_42.mp3',
  './assets/audio/num_euro_43.mp3',
  './assets/audio/num_euro_44.mp3',
  './assets/audio/num_euro_45.mp3',
  './assets/audio/num_euro_46.mp3',
  './assets/audio/num_euro_47.mp3',
  './assets/audio/num_euro_48.mp3',
  './assets/audio/num_euro_49.mp3',
  './assets/audio/num_euro_5.mp3',
  './assets/audio/num_euro_50.mp3',
  './assets/audio/num_euro_51.mp3',
  './assets/audio/num_euro_52.mp3',
  './assets/audio/num_euro_53.mp3',
  './assets/audio/num_euro_54.mp3',
  './assets/audio/num_euro_55.mp3',
  './assets/audio/num_euro_56.mp3',
  './assets/audio/num_euro_57.mp3',
  './assets/audio/num_euro_58.mp3',
  './assets/audio/num_euro_59.mp3',
  './assets/audio/num_euro_6.mp3',
  './assets/audio/num_euro_60.mp3',
  './assets/audio/num_euro_7.mp3',
  './assets/audio/num_euro_8.mp3',
  './assets/audio/num_euro_9.mp3',
  './assets/audio/num_zero_euro.mp3',
  './assets/audio/prefix_c_e.mp3',
  './assets/audio/prefix_esatto_resto_giusto.mp3',
  './assets/audio/prefix_grandioso_importo_esatto.mp3',
  './assets/audio/prefix_guida_costa.mp3',
  './assets/audio/prefix_hai_messo.mp3',
  './assets/audio/prefix_mancano.mp3',
  './assets/audio/prefix_mancano_ancora.mp3',
  './assets/audio/prefix_ottimo_occhio_sbagliato_di.mp3',
  './assets/audio/prefix_resto_perfetto.mp3',
  './assets/audio/prefix_suggerimento_idea.mp3',
  './assets/audio/suffix_aggiungi_altri_soldi_piattino.mp3',
  './assets/audio/suffix_bisogna_correggerlo.mp3',
  './assets/audio/suffix_illuminata_luce_gialla.mp3',
  './assets/audio/suffix_in_piu_sul_piattino_togli.mp3',
  './assets/audio/suffix_in_piu_tocca_per_toglierlo.mp3',
  './assets/audio/suffix_ottimo_controllo.mp3',
  './assets/audio/suffix_prova_monete_piccole.mp3',
  './assets/audio/suffix_ragnatela_oro.mp3',
  './assets/audio/suffix_spesa_perfetta.mp3',
  './assets/audio/taglio_10.mp3',
  './assets/audio/taglio_100.mp3',
  './assets/audio/taglio_1000.mp3',
  './assets/audio/taglio_20.mp3',
  './assets/audio/taglio_200.mp3',
  './assets/audio/taglio_2000.mp3',
  './assets/audio/taglio_50.mp3',
  './assets/audio/taglio_500.mp3',
  './assets/audio/taglio_5000.mp3',

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
