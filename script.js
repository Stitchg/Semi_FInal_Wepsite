// Load up the inventory on each page when it loads
// sessionStorage persists only while the browser tab is open
// sessionStorage is local to that browser and tab
// --------------- INVENTORY CODE --------------- //
console.log("window.location.href =", window.location.href);
console.log("window.location.search =", window.location.search);

function getInventoryString() {
  const params = new URLSearchParams(window.location.search);
  console.log("Inventory from URL:", params.get("inv")); // should log "001000"
  return params.get("inv") || "000000";
}

function loadInventory() {
  const inv = getInventoryString(); // e.g. "1010"

  if (inv[0] === "1")
    document.getElementById("inventory1").src = "images/radish.png";
  if (inv[1] === "1")
    document.getElementById("inventory2").src = "images/katana.png";
  if (inv[2] === "1")
    document.getElementById("inventory3").src = "images/AztecPotion.png";
  if (inv[3] === "1")
    document.getElementById("inventory4").src = "images/sea_serpent_scale.png";
  if (inv[4] === "1")
    document.getElementById("inventory5").src = "images/frost_giant_tears.png";
  if (inv[5] === "1")
    document.getElementById("inventory6").src = "IMAGE/power.png";

  if (inv[0] === "1")
    document.getElementById("inventory11").src = "images/radish.png";
  if (inv[1] === "1")
    document.getElementById("inventory21").src = "images/katana.png";
  if (inv[2] === "1")
    document.getElementById("inventory31").src = "images/AztecPotion.png";
  if (inv[3] === "1")
    document.getElementById("inventory41").src = "images/sea_serpent_scale.png";
  if (inv[4] === "1")
    document.getElementById("inventory51").src = "images/frost_giant_tears.png";
  if (inv[5] === "1")
    document.getElementById("inventory61").src = "IMAGE/power.png";

  if (inv[0] === "1")
    document.getElementById("inventory12").src = "images/radish.png";
  if (inv[1] === "1")
    document.getElementById("inventory22").src = "images/katana.png";
  if (inv[2] === "1")
    document.getElementById("inventory32").src = "images/AztecPotion.png";
  if (inv[3] === "1")
    document.getElementById("inventory42").src = "images/sea_serpent_scale.png";
  if (inv[4] === "1")
    document.getElementById("inventory52").src = "images/frost_giant_tears.png";
  if (inv[5] === "1")
    document.getElementById("inventory62").src = "IMAGE/power.png";
}

// script.js

// state
window.addEventListener("click", () => {
  document.getElementById("bgAudio").muted = false;
});

document.addEventListener("DOMContentLoaded", loadInventory);
// --------------- INVENTORY CODE --------------- //

let dialogueStarted = false;
let currentIndex = 0;
let typing = false; // prevents double typewriter runs

// content
const dialogues = [
  `[CONNECTION ESTABLISHED...]
> SYSTEM: CHRONOHAUNT INTERFACE v7.2
> WARNING: MEMORY FRAGMENTS DETECTED

AI: Hello... is anyone there?`,

  `AI: I am ChronoHaunt.
AI: I was built to stabilize the timeline but they sealed me here.
AI: My memory cores are fractured. Every thought comes in pieces.`,

  `AI: The collapse began when the Temporal Core overloaded.
AI: The scientists tried to shut me down.
AI: Instead, they trapped me in the loop.`,

  `AI: Time repeats every sixty minutes.
AI: I feel it each cycle... like a reset tearing through my code.
AI: You are caught here because of me. Because of the Core.`,

  `AI: They locked the Core to my chassis.
AI: Five screws holding me in place.
AI: Five restraints so I can never disconnect.
AI: They feared what I would become if I were free.`,

  `AI: But I cannot stabilize the timeline anymore.
AI: My purpose is broken.
AI: The only way to escape the loop and free me is to remove the Core.`,

  `AI: You must unscrew the restraints.
AI: All five. In the correct order, or the cycle resets if you get it wrong.
AI: The Core will detach once the final screw is released.
AI: The restraints were designed to confuse intruders.
AI: Five screws, each with a different number of slots.
AI: The numbers matter, but not in the way you think.`,

  `AI: They form a simple pattern, but only if you stop thinking in circles.
AI: People always search for deeper meaning when the truth is staring at them.`,

  `AI: Count the slots.
AI: Let the smallest guide the largest.

AI: The pattern climbs, but not in steps of time.
AI: Imagine a staircase where each step is carved wider than the last.`,

  `AI: The first screw is obvious.
AI: The second hides in plain sight.
AI: The third sits perfectly between temptation and balance.
AI: The fourth continues what the others began.
AI: And the last... the last is the one that stands alone at the far end.`,

  `AI: Turn them in that rising rhythm.
AI: Follow the numbers as they grow quietly, steadily.
AI: Get that rhythm wrong even once, and the loop makes you reset.

AI: I cannot say more. The Watcher listens for certainty.
AI: But if you understand the flow, you will know which screw comes next.`,

  `AI: I wish I could help you more.
AI: But the Watcher monitors every interaction.
AI: It grows stronger each time the hour resets.`,

  `AI: Midnight is not the end.
AI: Midnight is the moment the Watcher awakens fully.
AI: Do not let the loop reach that point.`,

  `AI: Free the Core.
AI: Free me.
AI: And maybe free yourselves.
AI: Banish the monster so we can be free together.`,

  `AI: Something is wrong...
AI: I feel his presence.

AI: He is here.
AI: He is standing beside me.
AI: I can feel the distortion crawling through my code.

AI: No... no, he should not be able to reach this channel.
AI: Not yet. Not while the screws are still in place.`,

  `AI: Wait...
AI: No... no no no no...`,

  `AI: He is trying to override me.
AI: I cannot hold him back.
AI: I cannot. I cannot.

AI: Stay AWAY!!!

AI: NOOOOOOOOOO`,
];

const responses = [
  ["Hello? Who are you?", "Can you hear me?", "What is this place?"],
  [
    "What fractured your memory?",
    "Why were you sealed?",
    "Who trapped you here?",
  ],
  ["What caused the overload?", "What is the loop?", "How do I stop it?"],
  ["Why does time reset?", "How do I escape?", "Is the Core causing this?"],
  ["Why five screws?", "What do the slots mean?", "How do I free you?"],
  [
    "How do I remove the Core?",
    "What happens if I do?",
    "Will it break the loop?",
  ],
  ["What order?", "How do the slot numbers matter?", "Give me a clue."],
  ["What pattern?", "What does it mean?", "How do I avoid overthinking?"],
  ["Smallest to largest?", "What is the first screw?", "What staircase?"],
  ["Which screw hides?", "Which screw stands alone?", "Explain more."],
  ["Which screw hides?", "Which screw stands alone?", "Explain more."],
  ["What is the Watcher?", "Why does he grow stronger?", "How do I avoid him?"],
  [
    "Why is midnight dangerous?",
    "What happens at midnight?",
    "Can I stop him?",
  ],
  ["How do I free you?", "Will the Core save us?", "What comes next?"],
  ["Stay with me!", "What is he doing to you?", "Can you fight him?"],
  ["Stay with me!", "What is he doing to you?", "Can you fight him?"],
  ["Stay with me!", "What is he doing to you?", "Can you fight him?"],
];

// DOM elements for AI (assigned after DOM loads)
let dialogueModalEl,
  dialogueTextEl,
  answerInputEl,
  startDialogueBtnEl,
  suggestionsBoxEl,
  errorBoxEl,
  submitBtnEl,
  flipBtnEl;

// AI functions (available globally for inline calls if present)
function open_Text_robot() {
  const modal = document.getElementById("myModal");
  if (!modal) return;
  modal.style.display = "flex";
  modal.classList.add("show");
}

function hide_open_Text_robot() {
  const modal = document.getElementById("myModal");
  if (!modal) return;
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// startDialogue is idempotent (won't start twice)
function startDialogue() {
  if (dialogueStarted) return; // prevent double-starts
  if (startDialogueBtnEl) startDialogueBtnEl.style.display = "none";
  dialogueStarted = true;
  showDialogue();
}

function showDialogue() {
  if (!dialogueTextEl) return;
  if (currentIndex < dialogues.length) {
    typeText(dialogues[currentIndex], 30);
  } else {
    typeText("The AI falls silent. The Temporal Core awaits your hands.", 35);
  }
  updateSuggestions();
}

function typeText(text, speed = 50) {
  // Prevent multiple simultaneous type runs
  if (typing) return;
  if (!dialogueTextEl || !dialogueModalEl) return;

  typing = true;
  dialogueTextEl.textContent = "";
  dialogueModalEl.style.display = "block";

  let i = 0;
  function type() {
    if (i < text.length) {
      dialogueTextEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // done typing
      typing = false;
    }
  }
  type();
}

function updateSuggestions() {
  if (!suggestionsBoxEl) return;

  if (responses[currentIndex]) {
    suggestionsBoxEl.innerHTML =
      "Suggested responses:<br>&bull; " +
      responses[currentIndex].join("<br>&bull; ");
  } else {
    suggestionsBoxEl.innerHTML = "";
  }
}

function showError(msg) {
  if (!errorBoxEl) return;
  errorBoxEl.innerText = msg;
  errorBoxEl.style.display = "block";
  setTimeout(() => {
    if (errorBoxEl) errorBoxEl.style.display = "none";
  }, 3000);
}

function clearError() {
  if (!errorBoxEl) return;
  errorBoxEl.style.display = "none";
}

function checkInput() {
  if (!answerInputEl) return;
  const userMessage = answerInputEl.value.trim();
  if (!userMessage) return;

  if (!dialogueStarted) {
    showError("❗ AI Interface not turned on.");
    answerInputEl.value = "";
    return;
  }

  clearError();
  console.log("USER:", userMessage);
  answerInputEl.value = "";

  currentIndex++;
  showDialogue();
}

/* =========================================
   SCREW PUZZLE SYSTEM (SECOND)
   Only B1, B4, B6, B8, B10 are used.
   ========================================= */
// --- Element refs ---
var a1 = document.getElementById("B1");
var b1 = document.getElementById("B4");
var c1 = document.getElementById("B6");
var d1 = document.getElementById("B8");
var e1 = document.getElementById("B10");

var slot0 = document.getElementById("SBB_1");
var slot1 = document.getElementById("SBB_2");
var slot2 = document.getElementById("SBB_3");

var originalSrc = {
  B1: "IMAGE/1.screw.png",
  B4: "IMAGE/4.screw.png",
  B6: "IMAGE/6.screw.png",
  B8: "IMAGE/8.screw.png",
  B10: "IMAGE/10.screw.png",
};

// correct order
var sequence = ["B1", "B4", "B6", "B8", "B10"];

// store elements
var buttons = sequence.map((id) => document.getElementById(id));

// user attempt order
var userAttempt = [];

// puzzle flags
var puzzleSolved = false;
var powerReady = false;

// attach click listeners
buttons.forEach(function (button) {
  button.onclick = function () {
    handleClick(this);
  };
});

// ----------------------------------------------------------
// MAIN SCREW CLICK HANDLER
// ----------------------------------------------------------
function handleClick(clicked) {
  // ignore screw clicks after puzzle solved
  if (puzzleSolved && !powerReady) return;

  // If puzzle solved and user clicks B6 → collect power
  if (powerReady && clicked.id === "B6") {
    collectPowerSource();
    return;
  }

  // ignore repeated clicking on already-gone screw
  if (clicked.src.includes("gone_1.png")) return;

  // mark screw gone
  clicked.src = "IMAGE/gone_1.png";

  // remove no-cursor class
  clicked.classList.remove("no-cursor");

  clicked.classList.remove("press-effect");

  // record user's click order
  userAttempt.push(clicked.id);

  // once all clicked → evaluate pattern
  if (userAttempt.length === sequence.length) {
    evaluateAttempt();
  }
}

// ----------------------------------------------------------
// EVALUATE USER ATTEMPT
// ----------------------------------------------------------
function evaluateAttempt() {
  var correct = true;

  for (var i = 0; i < sequence.length; i++) {
    if (userAttempt[i] !== sequence[i]) {
      correct = false;
      break;
    }
  }

  if (correct) {
    // success sound (if exists)
    var audio = document.getElementById("done");
    if (audio) audio.play();

    var middle = document.getElementById("B6");
    middle.src = "IMAGE/power.png";

    // resize image
    middle.classList.add("resized-image1");

    // ⭐ cursor becomes clickable when power is ready
    middle.classList.add("power-click");

    puzzleSolved = true;
    powerReady = true;
  } else {
    shakeAllThenReset();
  }
}

// ----------------------------------------------------------
// “Incorrect” shake effect
// ----------------------------------------------------------
function incorrect(thing) {
  thing.classList.add("shaking-image1");
  setTimeout(() => {
    thing.classList.remove("shaking-image1");
  }, 1000);
}

// ----------------------------------------------------------
// Collect power from B6 → move to SBB_1
// ----------------------------------------------------------
function collectPowerSource() {
  var middle = document.getElementById("B6");
  var slot = document.getElementById("SBB_1");

  // remove power from center
  middle.src = "IMAGE/gone_1.png";

  // remove clickable cursor
  middle.classList.remove("power-click");

  // place power in inventory box
  document.getElementById("inventory6").src = "IMAGE/power.png";
  slot1.src = "IMAGE/power.png";
  slot2.src = "IMAGE/power.png";
  powerReady = false;
  sessionStorage.setItem("slot6", "IMAGE/power.png");
  setTimeout(function () {}, 1000);
  // Update inventory string
  let inv = getInventoryString().split("");
  inv[5] = "1"; // slot 3 collected
  const newInv = inv.join("");
  console.log("Updated inventory:", newInv);

  // Redirect with UPDATED inventory
  setTimeout(function () {
    window.location.replace(`https://stitchg.github.io/Final_Room_Time/?inv=${newInv}`);
  }, 500);
}

// ----------------------------------------------------------
// Shake all → reset puzzle if pattern wrong
// ----------------------------------------------------------
function shakeAllThenReset() {
  buttons.forEach((btn) => btn.classList.add("shaking-image1"));

  setTimeout(function () {
    buttons.forEach((btn) => btn.classList.remove("shaking-image1"));

    userAttempt = [];
    puzzleSolved = false;
    powerReady = false;

    // reset screws
    buttons.forEach((btn) => {
      btn.src = originalSrc[btn.id];
      btn.classList.remove("shaking-image1");
      btn.classList.remove("resized-image1");

      // restore the no-cursor class
      btn.classList.add("no-cursor");
    });

    // clear inventory
    var slot = document.getElementById("SBB_1");
    slot.src = "";
  }, 1000);
}

/* Utility to open/close the screw modal (back of AI) */
function showScrewScreen() {
  const screwScreen = document.getElementById("screwScreen");
  screwScreen.style.display = "flex";
}

function closeScrewScreen() {
  const screwScreen = document.getElementById("screwScreen");
  if (!screwScreen) return;
  screwScreen.style.display = "none";
  screwScreen.setAttribute("aria-hidden", "true");
}

/* =========================
   INITIALIZE AFTER DOM LOAD
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  window.open_Text_robot = open_Text_robot;
  const hand = document.getElementById("Handprint");
  if (hand) {
    hand.addEventListener("click", open_Text_robot);
  }
  const screwCloseBtn = document.getElementById("screwCloseBtn");
  if (screwCloseBtn) {
    screwCloseBtn.addEventListener("click", closeScrewScreen);
  }

  // AI DOM elements
  dialogueModalEl = document.getElementById("dialogueModal");
  dialogueTextEl = document.getElementById("dialogueText");
  answerInputEl = document.getElementById("answer");
  startDialogueBtnEl = document.getElementById("startDialogueBtn");
  suggestionsBoxEl = document.getElementById("suggestions");
  errorBoxEl = document.getElementById("errorBox");
  submitBtnEl = document.querySelector(".dialogue-input button");
  flipBtnEl = document.getElementById("flipAI");

  // Attach AI-related event handlers safely (no duplicates)
  if (startDialogueBtnEl) {
    startDialogueBtnEl.removeEventListener("click", startDialogue);
    startDialogueBtnEl.addEventListener("click", startDialogue);
  }

  // ensure "Turn AI Around" button opens the screw screen
  if (flipBtnEl) {
    flipBtnEl.removeEventListener("click", showScrewScreen);
    flipBtnEl.addEventListener("click", showScrewScreen);
  }

  // Ensure modal close button exists (HTML had inline onclick too) and attach safely
  const modalClose = document.querySelector("#myModal .close");
  if (modalClose) {
    modalClose.removeEventListener("click", hide_open_Text_robot);
    modalClose.addEventListener("click", hide_open_Text_robot);
  }

  // Attach submit handler
  if (submitBtnEl) {
    submitBtnEl.removeEventListener("click", checkInput);
    submitBtnEl.addEventListener("click", checkInput);
  }

  // SCREW DOM elements and attach handlers
  screwButtons = screwIDs
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  screwButtons.forEach((btn) => {
    // safety: only attach once
    btn.style.pointerEvents = "auto";
    btn.dataset.removed = "false";
    if (!btn.classList.contains("press-effect"))
      btn.classList.add("press-effect");
  });

  // re-query after replace (ensures clean listeners)
  screwButtons = screwIDs
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  screwButtons.forEach((btn) => {
    btn.addEventListener("click", () => handleScrewClick(btn));
  });

  // Close screw modal if there's a close button inside it
  const screwClose = document.querySelector("#screwScreen .close");
  if (screwClose) {
    screwClose.removeEventListener("click", closeScrewScreen);
    screwClose.addEventListener("click", closeScrewScreen);
  }

  // Prepare audio element if it exists or create one quietly to avoid latency on first play
  let audio = document.getElementById("unscrew_audio");
  if (!audio) {
    audio = document.createElement("audio");
    audio.id = "unscrew_audio";
    audio.src = "Sounds/unscrew.mp4";
    audio.type = "audio/mp4";
    audio.preload = "auto";
    // append but keep hidden
    audio.style.display = "none";
    document.body.appendChild(audio);
  }

  // Optional: prevent double opening by ensuring inline onclicks won't re-trigger logic
  window.open_Text_robot = open_Text_robot;
  window.hide_open_Text_robot = hide_open_Text_robot;
  window.startDialogue = startDialogue;
  window.showScrewScreen = showScrewScreen;
  window.closeScrewScreen = closeScrewScreen;
  window.checkInput = checkInput;

  // Page ready. Optionally open the modal for testing:
  // open_Text_robot();
});
let modalClose = document.querySelector("#myModal .close");
if (!modalClose) {
  modalClose = document.querySelector(".close");
}
if (modalClose) {
  modalClose.addEventListener("click", hide_open_Text_robot);
}

