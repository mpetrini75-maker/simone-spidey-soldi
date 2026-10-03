# Spidey Money Lab — Il Negozio di Simone 🕷️💰

Web app didattica e progressiva per imparare l'uso dei soldi, il calcolo del resto e il valore del denaro, pensata per tablet touch e accessibilita (discalculia e difficolta di lettoscrittura).

## Caratteristiche
- **Voce naturale offline**: 144 file audio preregistrati con la voce Diego (Edge-TTS, tono vivace ed energico), senza dipendenza da server o sintesi vocale robotica del browser.
- **PWA offline**: Service Worker integrato con memorizzazione automatica di tutti gli asset (immagini banconote/monete BCE e audio) al primo accesso per funzionare anche senza connessione internet.
- **Progressione didattica graduale**:
  1. *Paga Esatto* — composizione diretta dell'importo esatto sul piattino.
  2. *Calcola il Resto* — gestione del resto con guida visiva dei salti numerici.
  3. *Impara le Monete* — esplorazione interattiva fronte/retro di ogni taglio.
  4. *Controlla il Negoziante* — verifica del resto proposto.
- **Pedagogia non punitiva**: nessun azzeramento del lavoro in caso di errore, suggerimento visivo del taglio utile, stelle solo guadagnate.

Collaudo qualita:
`ash
py controlla.py
`
