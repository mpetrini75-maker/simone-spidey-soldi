#!/usr/bin/env python3
"""
Generazione completa degli audio offline per Spidey Money Lab.
Voce: it-IT-DiegoNeural (scelta da Marco al provino 3: rate +18%, pitch +12Hz).
Frasi fisse intere + pezzi modulari e importi in passi da 10 centesimi.
"""

import os
import sys
import asyncio
import edge_tts

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(BASE_DIR, "assets", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

VOICE_NAME = "it-IT-DiegoNeural"
VOICE_RATE = "+18%"
VOICE_PITCH = "+12Hz"

# Dizionario { filename: testo }
AUDIO_MAP = {}

# ----------------------------------------------------------------------
# 1. INTRO MISSIONI RESTO (8 missioni)
# ----------------------------------------------------------------------
AUDIO_MAP["intro_change_0.mp3"] = "Ciao Simone! Questo fumetto dei Vendicatori costa 15 euro. Abbiamo dato 20 euro al negoziante. Prepara i soldi che tornano a te!"
AUDIO_MAP["intro_change_1.mp3"] = "Che profumo di pizza! Costa 8 euro e abbiamo dato una banconota da 10 euro. Prepara i soldi che tornano a te!"
AUDIO_MAP["intro_change_2.mp3"] = "Un succo fresco per dissetarci! Costa 4 euro e 30 centesimi. Abbiamo dato 5 euro. Calcola il resto sul tuo piattino!"
AUDIO_MAP["intro_change_3.mp3"] = "Un bel quaderno per disegnare! Costa 5 euro esatti e abbiamo dato proprio una banconota da 5 euro. Quanto resto torna a noi?"
AUDIO_MAP["intro_change_4.mp3"] = "La borraccia per le missioni segrete! Costa 7 euro. Abbiamo consegnato 10 euro. Prepara il resto sul piattino!"
AUDIO_MAP["intro_change_5.mp3"] = "Il mitico lancia-ragnatele! Costa 20 euro e abbiamo dato 50 euro. Calcola il resto che torna a Spidey e Simone!"
AUDIO_MAP["intro_change_6.mp3"] = "Un gelato squisito! Costa 3 euro e abbiamo dato 5 euro. Quanti soldini devono tornare sul piattino?"
AUDIO_MAP["intro_change_7.mp3"] = "Uno zaino robusto per la scuola! Costa 35 euro. Abbiamo pagato con una banconota da 50 euro. Prepara il resto!"

# ----------------------------------------------------------------------
# 2. INTRO MISSIONI PAGA ESATTO (5 missioni)
# ----------------------------------------------------------------------
AUDIO_MAP["intro_exact_0.mp3"] = "Simone, compriamo questo pallone da calcio! Costa 12 euro esatti. Metti sul piatto le banconote o monete giuste per pagare!"
AUDIO_MAP["intro_exact_1.mp3"] = "Una golosa ciambella al cioccolato! Costa 2 euro esatti. Scegli i soldi necessari per pagare il negoziante!"
AUDIO_MAP["intro_exact_2.mp3"] = "Questa maglietta con il ragno sul petto costa 25 euro. Componi l'importo esatto sul tuo piattino!"
AUDIO_MAP["intro_exact_3.mp3"] = "Un set completo per disegnare Spidey! Costa 6 euro. Paga la cifra esatta con le monete o banconote!"
AUDIO_MAP["intro_exact_4.mp3"] = "Un pacchetto di figurine dei supereroi! Costa 1 euro e 50 centesimi. Paga la cifra precisa!"

# ----------------------------------------------------------------------
# 3. INTRO MISSIONI VERIFICA (3 missioni)
# ----------------------------------------------------------------------
AUDIO_MAP["intro_verify_0.mp3"] = "Abbiamo preso un pasticcino da 3 euro e dato 5 euro. Il negoziante ci ha dato questa moneta da 2 euro. Controlla: ha fatto bene i conti?"
AUDIO_MAP["intro_verify_1.mp3"] = "Spille da 6 euro, abbiamo pagato con 10 euro. Il negoziante ci dà 3 euro di resto. Simone, guarda bene: è il resto giusto o ha sbagliato?"
AUDIO_MAP["intro_verify_2.mp3"] = "La torcia costa 15 euro, abbiamo dato 20 euro. Il negoziante ci consegna una banconota da 5 euro. È corretto?"

# ----------------------------------------------------------------------
# 4. ESPLORAZIONE BANCONOTE E MONETE (9 tagli)
# ----------------------------------------------------------------------
AUDIO_MAP["explore_5000.mp3"] = "Questa è una banconota da 50 Euro! Ha il colore arancione. Con 50 euro puoi comprare una spesa grande o uno zaino per la scuola!"
AUDIO_MAP["explore_2000.mp3"] = "Questa è una banconota da 20 Euro! È di colore blu con ponti e finestre. Con 20 euro puoi comprare una pizza con gli amici o un bel fumetto dei supereroi!"
AUDIO_MAP["explore_1000.mp3"] = "Questa è una banconota da 10 Euro! È di colore rosso. Con 10 euro puoi comprare una pizza margherita o un quaderno speciale!"
AUDIO_MAP["explore_500.mp3"]  = "Questa è una banconota da 5 Euro! È grigio-azzurra ed è la banconota più piccola. Con 5 euro puoi prendere un gelato grande o fare merenda!"
AUDIO_MAP["explore_200.mp3"]  = "Questa è la moneta da 2 Euro! Ha il cerchio esterno dorato e il centro argentato. È la moneta più grande di tutte!"
AUDIO_MAP["explore_100.mp3"]  = "Questa è la moneta da 1 Euro! Ha il cerchio esterno argentato e il centro dorato. Vale esattamente 100 centesimi!"
AUDIO_MAP["explore_50.mp3"]   = "Questa è la moneta da 50 Centesimi! Tutta dorata con bordo rigato. È più grande della moneta da 1 euro: guardala bene!"
AUDIO_MAP["explore_20.mp3"]   = "Questa è la moneta da 20 Centesimi! Ha 7 piccole tacche rotonde sul bordo: si chiama fiore spagnolo ed è facilissima da riconoscere toccandola!"
AUDIO_MAP["explore_10.mp3"]   = "Questa è la moneta da 10 Centesimi! È piccola, dorata e con i bordi dentellati. Dieci di queste formano un intero Euro!"

# ----------------------------------------------------------------------
# 5. MESSAGGI FISSI DI SISTEMA
# ----------------------------------------------------------------------
AUDIO_MAP["msg_explore_intro.mp3"] = "Tocca una qualsiasi banconota o moneta qui sotto: Spidey ti racconta quanto vale e come riconoscerla. Premi Gira denaro per vedere fronte e retro!"
AUDIO_MAP["msg_retro_banconote.mp3"] = "Ecco il retro delle banconote con i ponti dell'Europa!"
AUDIO_MAP["msg_fronte_banconote.mp3"] = "Ecco il fronte delle banconote!"
AUDIO_MAP["msg_voce_attiva.mp3"] = "Voce attiva! Spidey è con te!"
AUDIO_MAP["msg_tavolo_reale.mp3"] = "Facciamo la spesa insieme sul tavolo con i soldi veri! Ascolta l'adulto accanto a te!"
AUDIO_MAP["msg_resto_zero.mp3"] = "Bravissimo Simone! L'oggetto costa esattamente quanto hai dato, quindi il resto è zero e il piattino vuoto è correttissimo!"
AUDIO_MAP["msg_hint_troppi_soldi.mp3"] = "Hai messo troppi soldi: togli un pezzo dal tuo piattino toccandolo con il dito!"
AUDIO_MAP["msg_hint_piattino_perfetto.mp3"] = "Il piattino è già perfetto! Premi il grande pulsante rosso per controllare!"

# ----------------------------------------------------------------------
# 6. PEZZI MODULARI DI FRASE
# ----------------------------------------------------------------------
# Resto
AUDIO_MAP["prefix_resto_perfetto.mp3"] = "Colpo perfetto, Simone! Il resto da restituire è esattamente"
AUDIO_MAP["suffix_ragnatela_oro.mp3"] = "Ragnatela d'oro conquistata!"
AUDIO_MAP["prefix_mancano_ancora.mp3"] = "Mancano ancora"
AUDIO_MAP["mid_puoi_aggiungere_per_arrivare_a.mp3"] = "Puoi aggiungere altri soldi per arrivare a"
AUDIO_MAP["prefix_c_e.mp3"] = "C'è"
AUDIO_MAP["suffix_in_piu_sul_piattino_togli.mp3"] = "in più sul piattino. Puoi togliere un pezzo toccandolo!"

# Paga Esatto
AUDIO_MAP["prefix_grandioso_importo_esatto.mp3"] = "Grandioso Simone! Hai pagato l'importo esatto di"
AUDIO_MAP["suffix_spesa_perfetta.mp3"] = "Spesa perfetta!"
AUDIO_MAP["mid_per_raggiungere.mp3"] = "per raggiungere"
AUDIO_MAP["suffix_aggiungi_altri_soldi_piattino.mp3"] = "Aggiungi altri soldi sul piattino!"
AUDIO_MAP["prefix_hai_messo.mp3"] = "Hai messo"
AUDIO_MAP["suffix_in_piu_tocca_per_toglierlo.mp3"] = "in più. Tocca un pezzo sul piatto per toglierlo!"

# Verifica
AUDIO_MAP["prefix_esatto_resto_giusto.mp3"] = "Esatto Simone! Il negoziante ha calcolato il resto giusto di"
AUDIO_MAP["suffix_ottimo_controllo.mp3"] = "Ottimo controllo!"
AUDIO_MAP["prefix_ottimo_occhio_sbagliato_di.mp3"] = "Ottimo occhio! Il negoziante ha sbagliato di"
AUDIO_MAP["suffix_bisogna_correggerlo.mp3"] = "Bisogna correggerlo!"

# Aiuto Progressivo
AUDIO_MAP["prefix_guida_costa.mp3"] = "Guarda la guida in alto: l'oggetto costa"
AUDIO_MAP["mid_abbiamo_dato.mp3"] = "e abbiamo dato"
AUDIO_MAP["mid_salto_totale_e_di.mp3"] = "Il salto totale è di"
AUDIO_MAP["prefix_suggerimento_idea.mp3"] = "Spidey ti suggerisce un'idea: prova ad aggiungere"
AUDIO_MAP["suffix_illuminata_luce_gialla.mp3"] = "Te l'ho illuminata con la luce gialla nella cassa."
AUDIO_MAP["prefix_mancano.mp3"] = "Mancano"
AUDIO_MAP["suffix_prova_monete_piccole.mp3"] = "Prova con le monete più piccole!"

# Nomi dei tagli per il suggerimento
AUDIO_MAP["taglio_5000.mp3"] = "una banconota da 50 Euro!"
AUDIO_MAP["taglio_2000.mp3"] = "una banconota da 20 Euro!"
AUDIO_MAP["taglio_1000.mp3"] = "una banconota da 10 Euro!"
AUDIO_MAP["taglio_500.mp3"]  = "una banconota da 5 Euro!"
AUDIO_MAP["taglio_200.mp3"]  = "la moneta da 2 Euro!"
AUDIO_MAP["taglio_100.mp3"]  = "la moneta da 1 Euro!"
AUDIO_MAP["taglio_50.mp3"]   = "la moneta da 50 Centesimi!"
AUDIO_MAP["taglio_20.mp3"]   = "la moneta da 20 Centesimi!"
AUDIO_MAP["taglio_10.mp3"]   = "la moneta da 10 Centesimi!"

# ----------------------------------------------------------------------
# 7. IMPORTI MONETARI COMPONIBILI
# ----------------------------------------------------------------------
AUDIO_MAP["num_zero_euro.mp3"] = "zero euro"

# Euro interi da 1 a 60
for euro in range(1, 61):
    txt = "1 euro" if euro == 1 else f"{euro} euro"
    AUDIO_MAP[f"num_euro_{euro}.mp3"] = txt

# Centesimi isolati (quando euro è 0: 10, 20, ..., 90)
for cent in range(10, 100, 10):
    AUDIO_MAP[f"num_cent_only_{cent}.mp3"] = f"{cent} centesimi"

# Centesimi preceduti da "e" (quando euro > 0: "e 10 centesimi", etc.)
for cent in range(10, 100, 10):
    AUDIO_MAP[f"num_cent_and_{cent}.mp3"] = f"e {cent} centesimi"


# ----------------------------------------------------------------------
# FUNZIONE GENERAZIONE ASINCRONA
# ----------------------------------------------------------------------
sem = asyncio.Semaphore(4)

async def genera_singolo(nome, testo, i, totale):
    dest = os.path.join(AUDIO_DIR, nome)
    if os.path.exists(dest) and os.path.getsize(dest) > 500:
        print(f"[{i}/{totale}] Salto (gia' presente): {nome}")
        return True
    async with sem:
        print(f"[{i}/{totale}] Genero {nome} -> '{testo[:30]}...'")
        try:
            comm = edge_tts.Communicate(testo, VOICE_NAME, rate=VOICE_RATE, pitch=VOICE_PITCH)
            await comm.save(dest)
            return True
        except Exception as e:
            print(f"[ERRORE] su {nome}: {e}")
            return False

async def genera_tutto(force=False):
    totale = len(AUDIO_MAP)
    print(f"[*] Avvio generazione {totale} audio con voce '{VOICE_NAME}' ({VOICE_RATE}, {VOICE_PITCH})...")
    tasks = []
    for i, (nome, testo) in enumerate(AUDIO_MAP.items(), 1):
        if force:
            dest = os.path.join(AUDIO_DIR, nome)
            if os.path.exists(dest):
                os.remove(dest)
        tasks.append(genera_singolo(nome, testo, i, totale))
    risultati = await asyncio.gather(*tasks)
    ok = sum(1 for r in risultati if r)
    print(f"\n[OK] Generati/verificati {ok}/{totale} file audio in {AUDIO_DIR}")
    return ok == totale

if __name__ == "__main__":
    force_gen = "--force" in sys.argv
    success = asyncio.run(genera_tutto(force=force_gen))
    sys.exit(0 if success else 1)
