/**
 * SPIDEY MONEY LAB - IL NEGOZIO DI SIMONE
 * Codice di logica didattica, calcolo in centesimi interi e accessibilità per tablet.
 * Realizzato con cura per Simone: rinforzo positivo, nessun azzeramento punitivo,
 * asset ufficiali BCE, proporzioni reali e guida visiva dei salti.
 */

// =============================================================================
// 1. CONFIGURAZIONE DEI TAGLI DI DENARO (VALORI IN CENTESIMI INTERI)
// =============================================================================
const DENOMINATIONS = [
  {
    id: 5000,
    name: "50 Euro",
    shortLabel: "50 €",
    type: "bill",
    cents: 5000,
    frontImg: "assets/money/bill_50_front.png",
    backImg: "assets/money/bill_50_back.png",
    btnId: "btn-bill-5000",
    imgId: "img-bill-5000",
    exploreInfo: "Questa è una banconota da 50 Euro! Ha il colore arancione. Con 50 euro puoi comprare una spesa grande o uno zaino per la scuola!"
  },
  {
    id: 2000,
    name: "20 Euro",
    shortLabel: "20 €",
    type: "bill",
    cents: 2000,
    frontImg: "assets/money/bill_20_front.jpg",
    backImg: "assets/money/bill_20_back.jpg",
    btnId: "btn-bill-2000",
    imgId: "img-bill-2000",
    exploreInfo: "Questa è una banconota da 20 Euro! È di colore blu con ponti e finestre. Con 20 euro puoi comprare una pizza con gli amici o un bel fumetto dei supereroi!"
  },
  {
    id: 1000,
    name: "10 Euro",
    shortLabel: "10 €",
    type: "bill",
    cents: 1000,
    frontImg: "assets/money/bill_10_front.png",
    backImg: "assets/money/bill_10_back.png",
    btnId: "btn-bill-1000",
    imgId: "img-bill-1000",
    exploreInfo: "Questa è una banconota da 10 Euro! È di colore rosso. Con 10 euro puoi comprare una pizza margherita o un quaderno speciale!"
  },
  {
    id: 500,
    name: "5 Euro",
    shortLabel: "5 €",
    type: "bill",
    cents: 500,
    frontImg: "assets/money/bill_5_front.png",
    backImg: "assets/money/bill_5_back.png",
    btnId: "btn-bill-500",
    imgId: "img-bill-500",
    exploreInfo: "Questa è una banconota da 5 Euro! È grigio-azzurra ed è la banconota più piccola. Con 5 euro puoi prendere un gelato grande o fare merenda!"
  },
  {
    id: 200,
    name: "2 Euro",
    shortLabel: "2 €",
    type: "coin",
    cents: 200,
    frontImg: "assets/money/coin_2_euro.png",
    backImg: "assets/money/coin_2_euro.png",
    btnId: "btn-coin-200",
    sizeClass: "size-2e",
    exploreInfo: "Questa è la moneta da 2 Euro! Ha il cerchio esterno dorato e il centro argentato. È la moneta più grande di tutte!"
  },
  {
    id: 100,
    name: "1 Euro",
    shortLabel: "1 €",
    type: "coin",
    cents: 100,
    frontImg: "assets/money/coin_1_euro.png",
    backImg: "assets/money/coin_1_euro.png",
    btnId: "btn-coin-100",
    sizeClass: "size-1e",
    exploreInfo: "Questa è la moneta da 1 Euro! Ha il cerchio esterno argentato e il centro dorato. Vale esattamente 100 centesimi!"
  },
  {
    id: 50,
    name: "50 Centesimi",
    shortLabel: "50 cent",
    type: "coin",
    cents: 50,
    frontImg: "assets/money/coin_50_cent.png",
    backImg: "assets/money/coin_50_cent.png",
    btnId: "btn-coin-50",
    sizeClass: "size-50c",
    exploreInfo: "Questa è la moneta da 50 Centesimi! Tutta dorata con bordo rigato. È più grande della moneta da 1 euro: guardala bene!"
  },
  {
    id: 20,
    name: "20 Centesimi",
    shortLabel: "20 cent",
    type: "coin",
    cents: 20,
    frontImg: "assets/money/coin_20_cent.png",
    backImg: "assets/money/coin_20_cent.png",
    btnId: "btn-coin-20",
    sizeClass: "size-20c",
    exploreInfo: "Questa è la moneta da 20 Centesimi! Ha 7 piccole tacche rotonde sul bordo: si chiama fiore spagnolo ed è facilissima da riconoscere toccandola!"
  },
  {
    id: 10,
    name: "10 Centesimi",
    shortLabel: "10 cent",
    type: "coin",
    cents: 10,
    frontImg: "assets/money/coin_10_cent.png",
    backImg: "assets/money/coin_10_cent.png",
    btnId: "btn-coin-10",
    sizeClass: "size-10c",
    exploreInfo: "Questa è la moneta da 10 Centesimi! È piccola, dorata e con i bordi dentellati. Dieci di queste formano un intero Euro!"
  }
];

// =============================================================================
// 2. DATABASE DELLE MISSIONI AL SUPERMERCATO (IN CENTESIMI INTERI)
// =============================================================================
const MISSIONS_CHANGE = [
  {
    name: "Fumetto dei Vendicatori",
    emoji: "🦸‍♂️",
    price: 1500, // 15 €
    givenTotal: 2000, // 20 €
    givenItems: [{ cents: 2000, type: "bill" }],
    intro: "Ciao Simone! Questo fumetto dei Vendicatori costa 15 euro. Abbiamo dato 20 euro al negoziante. Prepara i soldi che tornano a te!"
  },
  {
    name: "Super Pizza al Pomodoro",
    emoji: "🍕",
    price: 800, // 8 €
    givenTotal: 1000, // 10 €
    givenItems: [{ cents: 1000, type: "bill" }],
    intro: "Che profumo di pizza! Costa 8 euro e abbiamo dato una banconota da 10 euro. Prepara i soldi che tornano a te!"
  },
  {
    name: "Succo di Frutta ai Mirtilli",
    emoji: "🧃",
    price: 430, // 4,30 €
    givenTotal: 500, // 5,00 €
    givenItems: [{ cents: 500, type: "bill" }],
    intro: "Un succo fresco per dissetarci! Costa 4 euro e 30 centesimi. Abbiamo dato 5 euro. Calcola il resto sul tuo piattino!"
  },
  {
    name: "Quaderno di Spider-Man",
    emoji: "📓",
    price: 500, // 5,00 €
    givenTotal: 500, // 5,00 € (Resto Zero!)
    givenItems: [{ cents: 500, type: "bill" }],
    intro: "Un bel quaderno per disegnare! Costa 5 euro esatti e abbiamo dato proprio una banconota da 5 euro. Quanto resto torna a noi?"
  },
  {
    name: "Borraccia Termica di Spidey",
    emoji: "🥤",
    price: 700, // 7 €
    givenTotal: 1000, // 10 €
    givenItems: [{ cents: 1000, type: "bill" }],
    intro: "La borraccia per le missioni segrete! Costa 7 euro. Abbiamo consegnato 10 euro. Prepara il resto sul piattino!"
  },
  {
    name: "Lancia-Ragnatele",
    emoji: "🕸️",
    price: 2000, // 20 €
    givenTotal: 5000, // 50 €
    givenItems: [{ cents: 5000, type: "bill" }],
    intro: "Il mitico lancia-ragnatele! Costa 20 euro e abbiamo dato 50 euro. Calcola il resto che torna a Spidey e Simone!"
  },
  {
    name: "Super Gelato con Fragole",
    emoji: "🍦",
    price: 300, // 3 €
    givenTotal: 500, // 5 €
    givenItems: [{ cents: 500, type: "bill" }],
    intro: "Un gelato squisito! Costa 3 euro e abbiamo dato 5 euro. Quanti soldini devono tornare sul piattino?"
  },
  {
    name: "Zaino per la Scuola",
    emoji: "🎒",
    price: 3500, // 35 €
    givenTotal: 5000, // 50 €
    givenItems: [{ cents: 5000, type: "bill" }],
    intro: "Uno zaino robusto per la scuola! Costa 35 euro. Abbiamo pagato con una banconota da 50 euro. Prepara il resto!"
  }
];

const MISSIONS_EXACT = [
  {
    name: "Pallone da Calcio",
    emoji: "⚽",
    price: 1200, // 12 €
    intro: "Simone, compriamo questo pallone da calcio! Costa 12 euro esatti. Metti sul piatto le banconote o monete giuste per pagare!"
  },
  {
    name: "Ciambella al Cioccolato",
    emoji: "🍩",
    price: 200, // 2 €
    intro: "Una golosa ciambella al cioccolato! Costa 2 euro esatti. Scegli i soldi necessari per pagare il negoziante!"
  },
  {
    name: "Maglietta da Supereroe",
    emoji: "👕",
    price: 2500, // 25 €
    intro: "Questa maglietta con il ragno sul petto costa 25 euro. Componi l'importo esatto sul tuo piattino!"
  },
  {
    name: "Set Matite Colorate",
    emoji: "🎨",
    price: 600, // 6 €
    intro: "Un set completo per disegnare Spidey! Costa 6 euro. Paga la cifra esatta con le monete o banconote!"
  },
  {
    name: "Pacchetto di Figurine",
    emoji: "🃏",
    price: 150, // 1,50 €
    intro: "Un pacchetto di figurine dei supereroi! Costa 1 euro e 50 centesimi. Paga la cifra precisa!"
  }
];

// Missioni per la modalità "Controlla il Negoziante"
const MISSIONS_VERIFY = [
  {
    name: "Pasticcino alla Crema",
    emoji: "🧁",
    price: 300, // 3 €
    givenTotal: 500, // 5 €
    givenItems: [{ cents: 500, type: "bill" }],
    cashierTray: [200], // 2 € (CORRETTO!)
    isCorrect: true,
    intro: "Abbiamo preso un pasticcino da 3 euro e dato 5 euro. Il negoziante ci ha dato questa moneta da 2 euro. Controlla: ha fatto bene i conti?"
  },
  {
    name: "Bustina di Spille Spidey",
    emoji: "✨",
    price: 600, // 6 €
    givenTotal: 1000, // 10 €
    givenItems: [{ cents: 1000, type: "bill" }],
    cashierTray: [200, 100], // 3 € (SBAGLIATO! Manca 1 €)
    isCorrect: false,
    reason: "Manca 1 euro",
    intro: "Spille da 6 euro, abbiamo pagato con 10 euro. Il negoziante ci dà 3 euro di resto. Simone, guarda bene: è il resto giusto o ha sbagliato?"
  },
  {
    name: "Mini-Torcia da Esploratore",
    emoji: "🔦",
    price: 1500, // 15 €
    givenTotal: 2000, // 20 €
    givenItems: [{ cents: 2000, type: "bill" }],
    cashierTray: [500], // 5 € (CORRETTO!)
    isCorrect: true,
    intro: "La torcia costa 15 euro, abbiamo dato 20 euro. Il negoziante ci consegna una banconota da 5 euro. È corretto?"
  }
];

// =============================================================================
// 3. STATO DELL'APPLICAZIONE & SETTINGS ADULTO
// =============================================================================
const APP_STORAGE_KEY = "spidey_money_lab_config_v2";

const AppState = {
  mode: "exact", // Inizia da Paga Esatto per didattica graduale ("explore" | "exact" | "change" | "verify")
  missionIndex: 0,
  trayItems: [], // array di oggetti { id, cents, type }
  undoStack: [], // storico per annullare l'ultimo tocco
  score: 0,
  voiceEnabled: true,
  soundEnabled: true,
  isFlipped: false, // se true mostra il retro delle banconote
  hintStep: 0, // livello di aiuto progressivo (0, 1, 2)
  showJumpGuide: true,
  useCents: true,
  maxPriceCents: 2000, // max 20€ per default
  reducedMotion: false,
  enabledTagli: {
    5000: true,
    2000: true,
    1000: true,
    500: true,
    200: true,
    100: true,
    50: true,
    20: true,
    10: true
  }
};

// =============================================================================
// 4. SISTEMA AUDIO NATURALE OFFLINE (SINGOLO ELEMENTO AUDIO PER TABLET / IOS)
// =============================================================================
let audioCtx = null;
let narratorAudio = null;
let currentAudioQueue = [];
let lastSpokenClips = [];
let audioUnlocked = false;

function getAudioContext() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    return null;
  }
}

function initAudioSystem() {
  if (!narratorAudio) {
    narratorAudio = new Audio();
    narratorAudio.preload = "auto";

    narratorAudio.addEventListener("ended", () => {
      playNextQueuedClip();
    });

    narratorAudio.addEventListener("error", (e) => {
      console.warn("Clip audio non caricata, proseguo con la coda:", e);
      playNextQueuedClip();
    });
  }
}

function unlockAudio() {
  if (audioUnlocked) return;
  initAudioSystem();
  // Sblocco audio per policy iOS Safari e Chrome Android al primo tocco
  narratorAudio.src = "assets/audio/num_zero_euro.mp3";
  narratorAudio.volume = 0.01;
  const p = narratorAudio.play();
  if (p && typeof p.then === "function") {
    p.then(() => {
      narratorAudio.pause();
      narratorAudio.volume = 1.0;
      narratorAudio.currentTime = 0;
      audioUnlocked = true;
    }).catch(() => {});
  }
}

function stopAudio() {
  currentAudioQueue = [];
  if (narratorAudio) {
    try {
      narratorAudio.pause();
      narratorAudio.currentTime = 0;
    } catch (e) {}
  }
  const avatar = document.getElementById("spidey-avatar");
  if (avatar) avatar.classList.remove("talking");
}

function playNextQueuedClip() {
  const avatar = document.getElementById("spidey-avatar");
  if (currentAudioQueue.length === 0) {
    if (avatar) avatar.classList.remove("talking");
    return;
  }
  const nextClip = currentAudioQueue.shift();
  if (avatar) avatar.classList.add("talking");
  initAudioSystem();
  narratorAudio.src = nextClip;
  narratorAudio.play().catch(err => {
    console.warn("Riproduzione audio interrotta o bloccata:", err);
    playNextQueuedClip();
  });
}

function speakClips(clips, textMessage) {
  if (textMessage) {
    setSpideyMessage(textMessage);
  }
  if (!AppState.voiceEnabled || !clips || clips.length === 0) return;

  stopAudio();
  lastSpokenClips = [...clips];
  currentAudioQueue = [...clips];
  playNextQueuedClip();
}

function speak(text) {
  // Testo sicuro senza sintesi vocale robotica
  if (text) setSpideyMessage(text);
}

function repeatSpeech() {
  if (lastSpokenClips && lastSpokenClips.length > 0) {
    stopAudio();
    currentAudioQueue = [...lastSpokenClips];
    playNextQueuedClip();
  }
}

function getAmountClips(cents) {
  if (cents <= 0) return ["assets/audio/num_zero_euro.mp3"];
  const euro = Math.floor(cents / 100);
  const cent = cents % 100;
  const clips = [];
  if (euro > 0) {
    const eCapped = Math.min(euro, 60);
    clips.push(`assets/audio/num_euro_${eCapped}.mp3`);
  }
  if (cent > 0) {
    const c10 = Math.round(cent / 10) * 10;
    if (c10 > 0) {
      if (euro > 0) {
        clips.push(`assets/audio/num_cent_and_${c10}.mp3`);
      } else {
        clips.push(`assets/audio/num_cent_only_${c10}.mp3`);
      }
    }
  }
  return clips;
}

function toggleVoice() {
  AppState.voiceEnabled = !AppState.voiceEnabled;
  saveAppState();
  const icon = document.getElementById("voice-icon");
  const label = document.getElementById("voice-label");
  if (AppState.voiceEnabled) {
    icon.innerText = "🎙️";
    label.innerText = "Voce";
    speakClips(["assets/audio/msg_voce_attiva.mp3"], "Voce attiva! Spidey è con te!");
  } else {
    stopAudio();
    icon.innerText = "🔇";
    label.innerText = "Muto";
  }
}

function toggleSound() {
  AppState.soundEnabled = !AppState.soundEnabled;
  saveAppState();
  const icon = document.getElementById("sound-icon");
  const label = document.getElementById("sound-label");
  if (AppState.soundEnabled) {
    icon.innerText = "🔔";
    label.innerText = "Suoni";
    playCoinSound();
  } else {
    icon.innerText = "🔕";
    label.innerText = "No suoni";
  }
}

// Effetti sonori sintetizzati
function playCoinSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2900, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {}
}

function playBillSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(420, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

function playSuccessSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      const startTime = ctx.currentTime + idx * 0.1;
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.35);
    });
  } catch (e) {}
}

function playGentleRetrySound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(340, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}

// =============================================================================
// 5. FORMATTAZIONE VALUTA IN EURO (DA CENTESIMI INTERI)
// =============================================================================
function formatCents(cents) {
  const euros = (cents / 100).toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${euros} €`;
}

function formatCentsSpoken(cents) {
  const euroPart = Math.floor(cents / 100);
  const centPart = cents % 100;
  if (cents === 0) return "zero euro";
  if (euroPart > 0 && centPart > 0) {
    const eTxt = euroPart === 1 ? "1 euro" : `${euroPart} euro`;
    return `${eTxt} e ${centPart} centesimi`;
  } else if (euroPart > 0) {
    return euroPart === 1 ? "1 euro" : `${euroPart} euro`;
  } else {
    return `${centPart} centesimi`;
  }
}

// =============================================================================
// 6. GESTIONE MODALITÀ DI GIOCO
// =============================================================================
function setMode(mode) {
  AppState.mode = mode;
  AppState.missionIndex = 0;
  AppState.hintStep = 0;
  clearTray();
  removeHintPulses();

  document.querySelectorAll(".mode-tab").forEach(tab => tab.classList.remove("active"));
  const activeTab = document.getElementById(`btn-mode-${mode}`);
  if (activeTab) activeTab.classList.add("active");

  const boxCost = document.getElementById("box-cost-area");
  const boxGiven = document.getElementById("box-given-area");
  const jumpGuide = document.getElementById("jump-guide-container");
  const hintBtn = document.getElementById("btn-hint");
  const submitBtn = document.getElementById("btn-submit");
  const trayInstruction = document.getElementById("tray-instruction");
  const drawerTitle = document.getElementById("drawer-title-label");
  const flipBtn = document.getElementById("btn-flip-money");

  if (mode === "change") {
    boxCost.style.display = "block";
    boxGiven.style.display = "block";
    jumpGuide.style.display = AppState.showJumpGuide ? "block" : "none";
    hintBtn.style.display = "flex";
    submitBtn.style.display = "flex";
    flipBtn.style.display = "inline-flex";
    trayInstruction.innerText = "Prepara i soldi che tornano a te";
    drawerTitle.innerText = "🏪 CASSA DEL NEGOZIANTE (PRENDI IL RESTO DA QUI)";
    document.getElementById("btn-submit-text").innerText = "SPIDEY, CONTROLLA IL RESTO!";
  } else if (mode === "exact") {
    boxCost.style.display = "block";
    boxGiven.style.display = "none";
    jumpGuide.style.display = "none";
    hintBtn.style.display = "none";
    submitBtn.style.display = "flex";
    flipBtn.style.display = "inline-flex";
    trayInstruction.innerText = "Metti sul piatto i soldi per pagare l'oggetto";
    drawerTitle.innerText = "👛 IL TUO PORTAFOGLIO (PAGA IL NEGOZIANTE)";
    document.getElementById("btn-submit-text").innerText = "PAGA L'IMPORTO ESATTO!";
  } else if (mode === "explore") {
    boxCost.style.display = "none";
    boxGiven.style.display = "none";
    jumpGuide.style.display = "none";
    hintBtn.style.display = "none";
    submitBtn.style.display = "none";
    flipBtn.style.display = "inline-flex";
    trayInstruction.innerText = "Moneta o banconota selezionata:";
    drawerTitle.innerText = "🔍 TOCCA UN PEZZO PER SCOPRIRE QUANTO VALE";
  } else if (mode === "verify") {
    boxCost.style.display = "block";
    boxGiven.style.display = "block";
    jumpGuide.style.display = "none";
    hintBtn.style.display = "none";
    submitBtn.style.display = "flex";
    flipBtn.style.display = "none";
    trayInstruction.innerText = "Il negoziante ti ha dato questo resto. È giusto?";
    drawerTitle.innerText = "🕵️ VERIFICA IL RESTO CONSEGNATO";
    document.getElementById("btn-submit-text").innerText = "CONFERMA LA VERIFICA!";
  }

  loadCurrentMission();
}

// =============================================================================
// 7. CARICAMENTO DELLA MISSIONE CORRENTE
// =============================================================================
function getFilteredMissions(list) {
  return list.filter(m => {
    // Filtro centesimi se disabilitati
    if (!AppState.useCents && m.price % 100 !== 0) return false;
    // Filtro importo massimo
    if (m.price > AppState.maxPriceCents) return false;
    return true;
  });
}

function loadCurrentMission() {
  clearTray();
  AppState.hintStep = 0;
  removeHintPulses();

  if (AppState.mode === "change") {
    const list = getFilteredMissions(MISSIONS_CHANGE);
    const missionList = list.length > 0 ? list : MISSIONS_CHANGE;
    const mission = missionList[AppState.missionIndex % missionList.length];

    document.getElementById("item-emoji").innerText = mission.emoji;
    document.getElementById("item-name").innerText = mission.name;
    document.getElementById("item-price").innerText = formatCents(mission.price);

    // Visualizza il pagamento effettuato
    renderGivenArea(mission.givenItems, mission.givenTotal);

    // Aggiorna guida visiva dei salti
    renderJumpGuide(mission.price, mission.givenTotal, 0);

    // L'audio va preso dalla posizione della missione nella lista COMPLETA:
    // con i filtri (prezzo massimo, centesimi) l'indice della lista filtrata non coincide.
    const changeIdx = MISSIONS_CHANGE.indexOf(mission);
    speakClips([`assets/audio/intro_change_${changeIdx}.mp3`], mission.intro);

  } else if (AppState.mode === "exact") {
    const list = getFilteredMissions(MISSIONS_EXACT);
    const missionList = list.length > 0 ? list : MISSIONS_EXACT;
    const exactIdx = AppState.missionIndex % missionList.length;
    const mission = missionList[exactIdx];

    document.getElementById("item-emoji").innerText = mission.emoji;
    document.getElementById("item-name").innerText = mission.name;
    document.getElementById("item-price").innerText = formatCents(mission.price);

    const audioIdx = MISSIONS_EXACT.indexOf(mission);
    speakClips([`assets/audio/intro_exact_${audioIdx}.mp3`], mission.intro);

  } else if (AppState.mode === "explore") {
    const msg = "Tocca una qualsiasi banconota o moneta qui sotto: Spidey ti racconta quanto vale e come riconoscerla. Premi 'Gira denaro' per vedere fronte e retro!";
    speakClips(["assets/audio/msg_explore_intro.mp3"], msg);

  } else if (AppState.mode === "verify") {
    const verifyIdx = AppState.missionIndex % MISSIONS_VERIFY.length;
    const mission = MISSIONS_VERIFY[verifyIdx];
    document.getElementById("item-emoji").innerText = mission.emoji;
    document.getElementById("item-name").innerText = mission.name;
    document.getElementById("item-price").innerText = formatCents(mission.price);

    renderGivenArea(mission.givenItems, mission.givenTotal);

    // Metti sul piattino il resto proposto dal negoziante
    mission.cashierTray.forEach(cents => {
      const den = DENOMINATIONS.find(d => d.cents === cents);
      if (den) {
        AppState.trayItems.push({
          id: Date.now() + Math.random(),
          cents: den.cents,
          type: den.type
        });
      }
    });
    renderTray();

    speakClips([`assets/audio/intro_verify_${verifyIdx}.mp3`], mission.intro);
  }
}

function renderGivenArea(givenItems, givenTotal) {
  const container = document.getElementById("given-visual");
  const label = document.getElementById("given-amount-label");
  container.innerHTML = "";

  givenItems.forEach(item => {
    const den = DENOMINATIONS.find(d => d.cents === item.cents);
    if (!den) return;
    const img = document.createElement("img");
    img.src = den.frontImg;
    img.alt = den.name;
    img.className = den.type === "bill" ? "given-mini-img" : "given-mini-coin";
    container.appendChild(img);
  });

  label.innerText = formatCents(givenTotal);
}

function setSpideyMessage(msg) {
  document.getElementById("spidey-message").innerText = msg;
}

// =============================================================================
// 8. GUIDA VISIVA DEI SALTI (15 -> 17 -> 19 -> 20)
// =============================================================================
function renderJumpGuide(priceCents, targetCents, currentTrayCents) {
  const display = document.getElementById("jump-path-display");
  if (!display) return;

  display.innerHTML = "";

  const currentSumCents = priceCents + currentTrayCents;

  // Nodo di partenza (PREZZO)
  const startNode = createJumpNode(priceCents, "COSTA", "node-start");
  display.appendChild(startNode);

  // Se ci sono pezzi sul piattino, mostra i singoli salti
  let runningCents = priceCents;
  AppState.trayItems.forEach((item, idx) => {
    const arrow = createJumpArrow(item.cents);
    display.appendChild(arrow);

    runningCents += item.cents;
    const isLatest = idx === AppState.trayItems.length - 1;
    const nodeClass = runningCents === targetCents ? "node-reached" :
                      runningCents > targetCents ? "node-start" : "node-hop";
    const hopNode = createJumpNode(runningCents, `+${formatCents(item.cents)}`, nodeClass);
    display.appendChild(hopNode);
  });

  // Se non abbiamo ancora raggiunto il target
  if (currentSumCents < targetCents) {
    const remainingArrow = createJumpArrow(targetCents - currentSumCents, true);
    display.appendChild(remainingArrow);

    const targetNode = createJumpNode(targetCents, "HAI DATO", "node-target");
    display.appendChild(targetNode);
  }
}

function createJumpNode(cents, tagText, customClass) {
  const node = document.createElement("div");
  node.className = `jump-node ${customClass}`;

  const bubble = document.createElement("div");
  bubble.className = "jump-bubble";
  bubble.innerText = (cents / 100).toLocaleString("it-IT", { maximumFractionDigits: 1 });

  const tag = document.createElement("span");
  tag.className = "jump-tag";
  tag.innerText = tagText;

  node.appendChild(bubble);
  node.appendChild(tag);
  return node;
}

function createJumpArrow(cents, isDashed = false) {
  const arrowWrap = document.createElement("div");
  arrowWrap.className = "jump-arrow";
  arrowWrap.innerHTML = `
    <span class="jump-step-val">+${formatCents(cents)}</span>
    <span>${isDashed ? "⇢" : "➔"}</span>
  `;
  return arrowWrap;
}

function toggleJumpGuide() {
  const display = document.getElementById("jump-path-display");
  const btn = document.getElementById("btn-toggle-guide");
  const isHidden = display.classList.contains("hidden");

  if (isHidden) {
    display.classList.remove("hidden");
    btn.innerText = "Nascondi guida";
  } else {
    display.classList.add("hidden");
    btn.innerText = "Mostra guida";
  }
}

// =============================================================================
// 9. GESTIONE DEL DENARO SUL PIATTINO (AGGIUNGI, ANNULLA, RIMUOVI)
// =============================================================================
function addMoney(cents, type) {
  if (type === "coin") playCoinSound();
  else playBillSound();

  removeHintPulses(); // toglie l'evidenziazione di aiuto appena tocca

  if (AppState.mode === "explore") {
    const den = DENOMINATIONS.find(d => d.cents === cents);
    if (den) {
      speakClips([`assets/audio/explore_${den.cents}.mp3`], den.exploreInfo);
      AppState.trayItems = [{ id: Date.now(), cents: den.cents, type: den.type }];
      renderTray();
    }
    return;
  }

  // Modalità Calcola Resto o Paga Esatto
  const item = {
    id: Date.now() + Math.random(),
    cents: cents,
    type: type
  };

  AppState.undoStack.push([...AppState.trayItems]);
  AppState.trayItems.push(item);
  renderTray();

  // Aggiorna guida visiva in tempo reale se in modalità resto
  if (AppState.mode === "change") {
    const list = getFilteredMissions(MISSIONS_CHANGE);
    const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
    const currentTraySum = AppState.trayItems.reduce((acc, it) => acc + it.cents, 0);
    renderJumpGuide(mission.price, mission.givenTotal, currentTraySum);
  }
}

function removeSingleItem(id) {
  playCoinSound();
  AppState.undoStack.push([...AppState.trayItems]);
  AppState.trayItems = AppState.trayItems.filter(item => item.id !== id);
  renderTray();

  if (AppState.mode === "change") {
    const list = getFilteredMissions(MISSIONS_CHANGE);
    const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
    const currentTraySum = AppState.trayItems.reduce((acc, it) => acc + it.cents, 0);
    renderJumpGuide(mission.price, mission.givenTotal, currentTraySum);
  }
}

function undoLastTouch() {
  if (AppState.undoStack.length > 0) {
    AppState.trayItems = AppState.undoStack.pop();
    playCoinSound();
    renderTray();

    if (AppState.mode === "change") {
      const list = getFilteredMissions(MISSIONS_CHANGE);
      const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
      const currentTraySum = AppState.trayItems.reduce((acc, it) => acc + it.cents, 0);
      renderJumpGuide(mission.price, mission.givenTotal, currentTraySum);
    }
  } else if (AppState.trayItems.length > 0) {
    AppState.trayItems.pop();
    playCoinSound();
    renderTray();
  }
}

function clearTray() {
  if (AppState.trayItems.length > 0) {
    AppState.undoStack.push([...AppState.trayItems]);
    AppState.trayItems = [];
    playCoinSound();
    renderTray();

    if (AppState.mode === "change") {
      const list = getFilteredMissions(MISSIONS_CHANGE);
      const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
      renderJumpGuide(mission.price, mission.givenTotal, 0);
    }
  }
}

function renderTray() {
  const container = document.getElementById("tray-items-container");
  const placeholder = document.getElementById("tray-placeholder");
  const totalDisplay = document.getElementById("tray-total-val");

  container.innerHTML = "";

  if (AppState.trayItems.length === 0) {
    placeholder.style.display = "block";
    totalDisplay.innerText = "0,00 €";
    return;
  }

  placeholder.style.display = "none";
  let totalCents = 0;

  AppState.trayItems.forEach(item => {
    totalCents += item.cents;
    const den = DENOMINATIONS.find(d => d.cents === item.cents);
    if (!den) return;

    const btn = document.createElement("button");
    btn.className = "tray-item";
    btn.setAttribute("aria-label", `Rimuovi ${den.name} dal piattino`);
    btn.onclick = () => removeSingleItem(item.id);

    const removeBadge = document.createElement("span");
    removeBadge.className = "tray-item-remove-badge";
    removeBadge.innerText = "✕";
    btn.appendChild(removeBadge);

    const img = document.createElement("img");
    img.src = AppState.isFlipped ? den.backImg : den.frontImg;
    img.alt = den.name;
    img.className = den.type === "bill" ? "tray-bill-img" : "tray-coin-img";
    if (den.type === "coin") {
      // Dimensioni proporzionali anche sul piattino
      const sizePx = den.cents === 200 ? 54 :
                     den.cents === 50 ? 50 :
                     den.cents === 100 ? 46 :
                     den.cents === 20 ? 42 : 38;
      img.style.width = `${sizePx}px`;
      img.style.height = `${sizePx}px`;
    }
    btn.appendChild(img);

    const label = document.createElement("span");
    label.className = "tray-item-label";
    label.innerText = den.shortLabel;
    btn.appendChild(label);

    container.appendChild(btn);
  });

  totalDisplay.innerText = formatCents(totalCents);
}

// =============================================================================
// 10. GIRA DENARO (FRONTE / RETRO BANCONOTE)
// =============================================================================
function toggleMoneyFlip() {
  AppState.isFlipped = !AppState.isFlipped;
  const flipBtn = document.getElementById("btn-flip-money");

  if (AppState.isFlipped) {
    flipBtn.innerText = "🔄 Mostra Fronte";
    speakClips(["assets/audio/msg_retro_banconote.mp3"], "Ecco il retro delle banconote con i ponti dell'Europa!");
  } else {
    flipBtn.innerText = "🔄 Gira denaro (Fronte / Retro)";
    speakClips(["assets/audio/msg_fronte_banconote.mp3"], "Ecco il fronte delle banconote!");
  }

  // Aggiorna le immagini nella cassa del negoziante
  DENOMINATIONS.filter(d => d.type === "bill").forEach(den => {
    const imgEl = document.getElementById(den.imgId);
    if (imgEl) {
      imgEl.src = AppState.isFlipped ? den.backImg : den.frontImg;
    }
  });

  // Aggiorna anche il piattino se ci sono banconote
  renderTray();
}

// =============================================================================
// 11. VERIFICA DELLA RISPOSTA (PEDAGOGIA NON PUNITIVA)
// =============================================================================
function checkAnswer() {
  removeHintPulses();
  const currentTotal = AppState.trayItems.reduce((acc, item) => acc + item.cents, 0);

  if (AppState.mode === "change") {
    const list = getFilteredMissions(MISSIONS_CHANGE);
    const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
    const expected = mission.givenTotal - mission.price;

    if (currentTotal === expected) {
      // RISPOSTA ESATTA!
      playSuccessSound();
      AppState.score += 1;
      updateScoreUI();
      saveAppState();

      if (expected === 0) {
        const congratMsg = `Bravissimo Simone! L'oggetto costa esattamente quanto hai dato, quindi il resto è zero e il piattino vuoto è correttissimo!`;
        speakClips(["assets/audio/msg_resto_zero.mp3"], congratMsg);
      } else {
        const congratMsg = `Colpo perfetto, Simone! Il resto da restituire è esattamente ${formatCentsSpoken(expected)}! Ragnatela d'oro conquistata!`;
        speakClips(["assets/audio/prefix_resto_perfetto.mp3", ...getAmountClips(expected), "assets/audio/suffix_ragnatela_oro.mp3"], congratMsg);
      }

      showCelebrationModal(mission.name, expected);

    } else if (currentTotal < expected) {
      // RESTO INSUFFICIENTE (NON CANCELLARE IL LAVORO!)
      playGentleRetrySound();
      const diff = expected - currentTotal;
      const encourage = `Mancano ancora ${formatCentsSpoken(diff)}. Puoi aggiungere altri soldi per arrivare a ${formatCentsSpoken(expected)}!`;
      speakClips(["assets/audio/prefix_mancano_ancora.mp3", ...getAmountClips(diff), "assets/audio/mid_puoi_aggiungere_per_arrivare_a.mp3", ...getAmountClips(expected)], encourage);

    } else {
      // RESTO ECCESSIVO (NON CANCELLARE IL LAVORO!)
      playGentleRetrySound();
      const diff = currentTotal - expected;
      const encourage = `C'è ${formatCentsSpoken(diff)} in più sul piattino. Puoi togliere un pezzo toccandolo!`;
      speakClips(["assets/audio/prefix_c_e.mp3", ...getAmountClips(diff), "assets/audio/suffix_in_piu_sul_piattino_togli.mp3"], encourage);
    }

  } else if (AppState.mode === "exact") {
    const list = getFilteredMissions(MISSIONS_EXACT);
    const mission = list[AppState.missionIndex % list.length] || MISSIONS_EXACT[0];
    const target = mission.price;

    if (currentTotal === target) {
      playSuccessSound();
      AppState.score += 1;
      updateScoreUI();
      saveAppState();

      const congratMsg = `Grandioso Simone! Hai pagato l'importo esatto di ${formatCentsSpoken(target)}! Spesa perfetta!`;
      speakClips(["assets/audio/prefix_grandioso_importo_esatto.mp3", ...getAmountClips(target), "assets/audio/suffix_spesa_perfetta.mp3"], congratMsg);

      showCelebrationModal(mission.name, target, "Hai pagato la cifra esatta!");

    } else if (currentTotal < target) {
      playGentleRetrySound();
      const diff = target - currentTotal;
      const msg = `Mancano ancora ${formatCentsSpoken(diff)} per raggiungere ${formatCentsSpoken(target)}. Aggiungi altri soldi sul piattino!`;
      speakClips(["assets/audio/prefix_mancano_ancora.mp3", ...getAmountClips(diff), "assets/audio/mid_per_raggiungere.mp3", ...getAmountClips(target), "assets/audio/suffix_aggiungi_altri_soldi_piattino.mp3"], msg);

    } else {
      playGentleRetrySound();
      const diff = currentTotal - target;
      const msg = `Hai messo ${formatCentsSpoken(diff)} in più. Tocca un pezzo sul piatto per toglierlo!`;
      speakClips(["assets/audio/prefix_hai_messo.mp3", ...getAmountClips(diff), "assets/audio/suffix_in_piu_tocca_per_toglierlo.mp3"], msg);
    }

  } else if (AppState.mode === "verify") {
    const mission = MISSIONS_VERIFY[AppState.missionIndex % MISSIONS_VERIFY.length];
    const expected = mission.givenTotal - mission.price;

    if (currentTotal === expected) {
      playSuccessSound();
      AppState.score += 1;
      updateScoreUI();
      saveAppState();

      const msg = `Esatto Simone! Il negoziante ha calcolato il resto giusto di ${formatCentsSpoken(expected)}! Ottimo controllo!`;
      speakClips(["assets/audio/prefix_esatto_resto_giusto.mp3", ...getAmountClips(expected), "assets/audio/suffix_ottimo_controllo.mp3"], msg);
      showCelebrationModal(mission.name, expected, "Hai controllato il resto del negoziante!");
    } else {
      playGentleRetrySound();
      const diff = Math.abs(currentTotal - expected);
      const msg = `Ottimo occhio! Il negoziante ha sbagliato di ${formatCentsSpoken(diff)}. Bisogna correggerlo!`;
      speakClips(["assets/audio/prefix_ottimo_occhio_sbagliato_di.mp3", ...getAmountClips(diff), "assets/audio/suffix_bisogna_correggerlo.mp3"], msg);
    }
  }
}

// =============================================================================
// 12. AIUTO PROGRESSIVO (REMIND PERCORSO -> EVIDENZIA PEZZO SENZA RISOLVERE)
// =============================================================================
function requestProgressiveHint() {
  removeHintPulses();
  AppState.hintStep = (AppState.hintStep % 2) + 1;

  const list = getFilteredMissions(MISSIONS_CHANGE);
  const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
  const expected = mission.givenTotal - mission.price;
  const currentTotal = AppState.trayItems.reduce((acc, it) => acc + it.cents, 0);
  const gap = expected - currentTotal;

  if (AppState.hintStep === 1) {
    // LIVELLO 1: Spiega il percorso dal prezzo al pagamento
    const hintMsg = `Guarda la guida in alto: l'oggetto costa ${formatCentsSpoken(mission.price)} e abbiamo dato ${formatCentsSpoken(mission.givenTotal)}. Il salto totale è di ${formatCentsSpoken(expected)}.`;
    speakClips(["assets/audio/prefix_guida_costa.mp3", ...getAmountClips(mission.price), "assets/audio/mid_abbiamo_dato.mp3", ...getAmountClips(mission.givenTotal), "assets/audio/mid_salto_totale_e_di.mp3", ...getAmountClips(expected)], hintMsg);

  } else if (AppState.hintStep === 2) {
    // LIVELLO 2: Suggerisce ed evidenzia un pezzo utile nella cassa
    if (gap > 0) {
      // Cerca il taglio più grande utilizzabile <= gap
      const usefulDenom = DENOMINATIONS.find(d => d.cents <= gap && AppState.enabledTagli[d.cents]);
      if (usefulDenom) {
        highlightDenominationButton(usefulDenom.btnId);
        const hintMsg = `Spidey ti suggerisce un'idea: prova ad aggiungere ${usefulDenom.name}! Te l'ho illuminata con la luce gialla nella cassa.`;
        speakClips(["assets/audio/prefix_suggerimento_idea.mp3", `assets/audio/taglio_${usefulDenom.cents}.mp3`, "assets/audio/suffix_illuminata_luce_gialla.mp3"], hintMsg);
      } else {
        const hintMsg = `Mancano ${formatCentsSpoken(gap)}. Prova con le monete più piccole!`;
        speakClips(["assets/audio/prefix_mancano.mp3", ...getAmountClips(gap), "assets/audio/suffix_prova_monete_piccole.mp3"], hintMsg);
      }
    } else if (gap < 0) {
      const hintMsg = `Hai messo troppi soldi: togli un pezzo dal tuo piattino toccandolo con il dito!`;
      speakClips(["assets/audio/msg_hint_troppi_soldi.mp3"], hintMsg);
    } else {
      const hintMsg = `Il piattino è già perfetto! Premi il grande pulsante rosso per controllare!`;
      speakClips(["assets/audio/msg_hint_piattino_perfetto.mp3"], hintMsg);
    }
  }
}

function highlightDenominationButton(btnId) {
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.classList.add("pulse-hint");
    btn.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function removeHintPulses() {
  document.querySelectorAll(".money-btn").forEach(btn => {
    btn.classList.remove("pulse-hint");
  });
}

// =============================================================================
// 13. MODAL CELEBRATIVO, RIPETI CON SOLDI VERI E PROSSIMA MISSIONE
// =============================================================================
function showCelebrationModal(itemName, amountCents, customText = null) {
  const modal = document.getElementById("modal-celebrate");
  const feedback = document.getElementById("modal-feedback");

  if (customText) {
    feedback.innerText = `${customText} Hai completato l'acquisto di: ${itemName}!`;
  } else if (amountCents === 0) {
    feedback.innerText = `Il resto di 0,00 € era corretto per: ${itemName}!`;
  } else {
    feedback.innerText = `Il resto di ${formatCents(amountCents)} era perfetto per comprare: ${itemName}!`;
  }

  modal.classList.remove("hidden");
}

function nextMission() {
  document.getElementById("modal-celebrate").classList.add("hidden");
  AppState.missionIndex++;
  loadCurrentMission();
}

function repeatWithRealMoney() {
  const modal = document.getElementById("modal-celebrate");
  modal.classList.add("hidden");

  const realModal = document.getElementById("modal-real-money");
  const desc = document.getElementById("real-money-instructions");

  const list = getFilteredMissions(MISSIONS_CHANGE);
  const mission = list[AppState.missionIndex % list.length] || MISSIONS_CHANGE[0];
  const expected = mission.givenTotal - mission.price;

  desc.innerHTML = `
    <strong>Attività da fare insieme sul tavolo:</strong><br>
    1. Prendi un oggetto reale o disegnato per <strong>"${mission.name}"</strong> (prezzo: <strong>${formatCents(mission.price)}</strong>).<br>
    2. Consegna a Simone la banconota da <strong>${formatCents(mission.givenTotal)}</strong>.<br>
    3. Fagli contare con le mani il resto da restituirti: <strong>${formatCents(expected)}</strong>!<br>
    <em>La manipolazione fisica delle monete consolida l'apprendimento!</em>
  `;

  realModal.classList.remove("hidden");
  speakClips(["assets/audio/msg_tavolo_reale.mp3"], "Facciamo la spesa insieme sul tavolo con i soldi veri! Ascolta l'adulto accanto a te!");
}

function closeRealMoneyModal() {
  document.getElementById("modal-real-money").classList.add("hidden");
}

function updateScoreUI() {
  const el = document.getElementById("score-counter");
  if (el) el.innerText = AppState.score;
}

// =============================================================================
// 14. PANNELLO IMPOSTAZIONI PER L'ADULTO (⚙️)
// =============================================================================
function openSettingsModal() {
  // Popola lo stato attuale dei checkbox
  DENOMINATIONS.forEach(d => {
    const chk = document.getElementById(`cfg-${d.cents}`);
    if (chk) chk.checked = AppState.enabledTagli[d.cents] !== false;
  });

  const centsChk = document.getElementById("cfg-use-cents");
  if (centsChk) centsChk.checked = AppState.useCents;

  const rangeSel = document.getElementById("cfg-max-range");
  if (rangeSel) rangeSel.value = String(AppState.maxPriceCents);

  const guideChk = document.getElementById("cfg-show-guide");
  if (guideChk) guideChk.checked = AppState.showJumpGuide;

  const motionChk = document.getElementById("cfg-reduced-motion");
  if (motionChk) motionChk.checked = AppState.reducedMotion;

  document.getElementById("modal-settings").classList.remove("hidden");
}

function closeSettingsModal() {
  document.getElementById("modal-settings").classList.add("hidden");
  saveAppState();
  loadCurrentMission();
}

function updateTagliConfig() {
  DENOMINATIONS.forEach(d => {
    const chk = document.getElementById(`cfg-${d.cents}`);
    if (chk) {
      AppState.enabledTagli[d.cents] = chk.checked;
      const btn = document.getElementById(d.btnId);
      if (btn) {
        btn.style.display = chk.checked ? "flex" : "none";
      }
    }
  });
  saveAppState();
}

function updateGeneralConfig() {
  const centsChk = document.getElementById("cfg-use-cents");
  if (centsChk) AppState.useCents = centsChk.checked;

  const rangeSel = document.getElementById("cfg-max-range");
  if (rangeSel) AppState.maxPriceCents = parseInt(rangeSel.value, 10);

  const guideChk = document.getElementById("cfg-show-guide");
  if (guideChk) {
    AppState.showJumpGuide = guideChk.checked;
    const guideBox = document.getElementById("jump-guide-container");
    if (guideBox && AppState.mode === "change") {
      guideBox.style.display = AppState.showJumpGuide ? "block" : "none";
    }
  }

  const motionChk = document.getElementById("cfg-reduced-motion");
  if (motionChk) {
    AppState.reducedMotion = motionChk.checked;
    if (AppState.reducedMotion) {
      document.body.classList.add("reduced-motion");
    } else {
      document.body.classList.remove("reduced-motion");
    }
  }

  saveAppState();
}

// =============================================================================
// 15. PERSISTENZA STATO (LOCALSTORAGE RESILIENTE)
// =============================================================================
function saveAppState() {
  try {
    const data = {
      score: AppState.score,
      voiceEnabled: AppState.voiceEnabled,
      soundEnabled: AppState.soundEnabled,
      useCents: AppState.useCents,
      maxPriceCents: AppState.maxPriceCents,
      showJumpGuide: AppState.showJumpGuide,
      reducedMotion: AppState.reducedMotion,
      enabledTagli: AppState.enabledTagli
    };
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("LocalStorage non accessibile:", e);
  }
}

function loadSavedAppState() {
  try {
    const raw = localStorage.getItem(APP_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (typeof data.score === "number") AppState.score = data.score;
      if (typeof data.voiceEnabled === "boolean") AppState.voiceEnabled = data.voiceEnabled;
      if (typeof data.soundEnabled === "boolean") AppState.soundEnabled = data.soundEnabled;
      if (typeof data.useCents === "boolean") AppState.useCents = data.useCents;
      if (typeof data.maxPriceCents === "number") AppState.maxPriceCents = data.maxPriceCents;
      if (typeof data.showJumpGuide === "boolean") AppState.showJumpGuide = data.showJumpGuide;
      if (typeof data.reducedMotion === "boolean") AppState.reducedMotion = data.reducedMotion;
      if (data.enabledTagli) AppState.enabledTagli = { ...AppState.enabledTagli, ...data.enabledTagli };
    }
  } catch (e) {
    console.warn("Impossibile caricare da LocalStorage:", e);
  }

  // Applica stato caricato
  updateScoreUI();
  if (AppState.reducedMotion) document.body.classList.add("reduced-motion");
  updateTagliConfig();
}

// =============================================================================
// 16. INIZIALIZZAZIONE ALL'AVVIO
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAudioSystem();
  loadSavedAppState();
  setMode("exact");

  // Inizializza e sblocca l'audio al primo tocco per policy iOS/Safari/Chrome
  window.addEventListener("pointerdown", () => {
    getAudioContext();
    unlockAudio();
  }, { once: true });
});
