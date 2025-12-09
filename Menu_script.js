//---Menu_script.js
let portal5Unlocked = false;

// --- PORTAL IMAGE CHANGES ---
function Kai_room() {
  document.getElementById("1").src = "images/broken.png";
  portalProgress[0] = true;
  updatePortalStatus();
  checkAllPortalsComplete();
}

function ben_room() {
  document.getElementById("2").src = "images/broken.png";
  portalProgress[1] = true;
  updatePortalStatus();
  checkAllPortalsComplete();
}

function Orion_room() {
  document.getElementById("3").src = "images/broken.png";
  portalProgress[2] = true;
  updatePortalStatus();
  checkAllPortalsComplete();
}

function Jose_room() {
  document.getElementById("4").src = "images/broken.png";
  portalProgress[3] = true;
  updatePortalStatus();
  checkAllPortalsComplete();
document.getElementById("SBB_1").src = "images/power.png";
}

function Final_room() {}

// --- MODAL SHOW/HIDE ---
function timeKeepersmenu() {
  const modal = document.getElementById("menumodal");
  modal.style.display = "flex";
  modal.classList.add("show");
  showPage("menuPage");
}

function hideModal() {
  const modal = document.getElementById("menumodal");
  modal.classList.remove("show");
  document.getElementById("menumodal").classList.remove("help-fullscreen");
  document.body.classList.remove("help-active");
  setTimeout(() => (modal.style.display = "none"), 400);
}


// --- MENU NAVIGATION ---
function showPage(pageId) {
  document
    .querySelectorAll(".menu-page")
    .forEach((p) => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

function returnToMenu() {
  showPage("menuPage");
  document.getElementById("menumodal").classList.remove("help-fullscreen");
}

function openNotes() {
  showPage("notesPage");
  updatePortalStatus(); // ensure portal 5 unlocks in menu
}

function openPortalStatus() {
  updatePortalStatus();
  showPage("statusPage");
}

function openInventory() {
  updateInventoryList();
  showPage("inventoryPage");
}

function openSettings() {
  alert("Settings coming soon.");
}

function openHelp() {
  showPage("helpPage");
document.getElementById("menumodal").classList.add("help-fullscreen");
  document.body.classList.add("help-active");
}

// --- PORTAL / INVENTORY TRACKING ---
let portalProgress = [false, false, false, false];
let itemsCollected = [];

function updatePortalStatus() {
  const p5 = document.getElementById("portalStatus5");
  const p5hint = document.getElementById("portal5Hint");

  // Unlock through portals 1–4
  if (portal5Unlocked === true) {
    p5.textContent = "Portal 5: READY";
    p5.classList.remove("locked");
    p5hint.disabled = false;
    p5hint.classList.remove("locked");
    p5hint.style.pointerEvents = "auto";
    p5hint.style.opacity = "1";
  }

  // OR unlock by items
  else if (itemsCollected.length >= 6) {
    p5.textContent = "Portal 5: READY";
    p5.classList.remove("locked");
    p5hint.disabled = false;
    p5hint.classList.remove("locked");
    p5hint.style.pointerEvents = "auto";
    p5hint.style.opacity = "1";
  }
}

function updateInventoryList() {
  const list = document.getElementById("inventoryList");
  list.innerHTML = "";
  if (itemsCollected.length === 0) {
    list.innerHTML = "<p>No items yet.</p>";
document.getElementById("inventoryList").classList.add("help-text")
  } else {
    itemsCollected.forEach((item) => (list.innerHTML += `<li>${item}</li>`));
  }
}

function showHint(portal) {
  const hintBox = document.getElementById("hintText");
  let text = "";

  switch (portal) {
    case 1:
      text = `
        <p class="tk-line1">Hey… you. Yes, you.</p>
        <p class="tk-line1">It is I, the TimeKeeper. I am glad you are here and heard my call.</p>
        <p class="tk-line1">Time is collapsing. A monster is tearing through the ages.</p>
        <p class="tk-line1">Each holds a number… and a voice — a font — of its own.</p>

        <p class="tk-line1">Only when the number and the voice match the glyph in the center will the gears listen.</p>
        <p class="tk-line1">Seek the three. Reveal their forms.</p>
        <p class="tk-line1">Then turn the dial… scroll the numbers…</p>

        <p class="tk-line1">until the center’s mark and the found mark speak the same number in the same voice.</p>
        <p class="tk-line1">Only then will time move forward.</p>
      `;
      break;

    case 2:
      text = `
        <p class="tk-line1">Hey… you. Yes, you.</p>
        <p class="tk-line1">It is I, the TimeKeeper. I am glad you are here and heard my call.</p>
        <p class="tk-line1">Time is collapsing. A monster is tearing through the ages.</p>
        <p class="tk-line1">The fourth slot must have the Skull god.</p>
        <p class="tk-line1">The second slot must have the Block god.</p>
        <p class="tk-line1">The first slot must have the Feather god.</p>
        <p class="tk-line1">The third slot must have the Mouth god.</p>
      `;
      break;

case 3:
      text = `
      <p class="tk-line1">Hey… you. Yes, you.</p>
      <p class="tk-line1">It is I, the TimeKeeper. I am glad you are here and heard my call.</p>
      <p class="tk-line1">Time is collapsing. A monster is tearing through the ages.</p>
      <p class="tk-line1">Seeker… numbers circle this room.</p>
      <p class="tk-line1">Their dots reveal their place in a four-part lock.</p>
      <p class="tk-line1">The right chest holds the numbers you need.</p>
      <p class="tk-line1">The left chest holds a riddle—its answer is a sword,</p>
      <p class="tk-line1">and a scroll nearby will help you decode it.</p>
      <p class="tk-line1">Claim what lies within. Only then may you leave my chamber.</p>
       
      `;
      break;

    case 4:
      text = `
        <p class="tk-line1">Hey… you. Yes, you.</p>
        <p class="tk-line1">It is I, the TimeKeeper. I am glad you heard my call.</p>
        <p class="tk-line1">Listen closely… the screws obey a quiet pattern.</p>
        <p class="tk-line1">Begin with the screw that has the fewest slots.</p>
        <p class="tk-line1">Then choose the next with a slightly higher count.</p>
        <p class="tk-line1">Continue rising… smallest to largest.</p>
        <p class="tk-line1">Follow the climb, and the Power source will loosen.</p>
      `;
      break;

    case 5:
      text = `
        <p class="tk-line1">Hey… you. Yes, you.</p>
        <p class="tk-line1">It is I, the TimeKeeper. I am glad you heard my call.</p>
        <p class="tk-line1">The monster grows closer… its shadow leaks between the minutes.</p>
        <p class="tk-line1">When your journey is complete, you will hold all the fragments you need.</p>
        <p class="tk-line1">Do not cling to them. Release them. Let them fall into place.</p>
        <p class="tk-line1">Only when each fragment is offered in the correct moment</p>
        <p class="tk-line1">will they bind together and reveal the weapon meant to end him.</p>
        <p class="tk-line1">The pieces know the shape they must form. Trust the pattern.</p>
      `;

      break;
  }

  hintBox.innerHTML = text;
}

// --- CHECK FOR UNLOCK ---
function checkAllPortalsComplete() {
  const allDone = portalProgress.every((p) => p === true);

  if (allDone) {
    portal5Unlocked = true;

    // Change portal 5 image
    document.getElementById("5").src = "images/Portal.PNG";

    // Unlock hint
    const p5hint = document.getElementById("portal5Hint");
    p5hint.disabled = false;
    p5hint.classList.remove("locked");
    p5hint.style.pointerEvents = "auto";
    p5hint.style.opacity = "1";

    // Update text and remove (Locked)
    p5hint.textContent = "Portal 5 Hint";

    // Add click event
    p5hint.setAttribute("onclick", "showHint(5)");

    // Update status page display
    const p5 = document.getElementById("portalStatus5");
    p5.textContent = "Portal 5: READY";
    p5.classList.remove("locked");

    // Re-run menu updates
    updatePortalStatus();

    console.log("Portal 5 UNLOCKED!");
  }
}

function unlockPortal5() {
  const portal5HintButton = document.getElementById("portal5Hint");

  // Unlock the button
  portal5HintButton.disabled = false;
  portal5HintButton.classList.remove("locked");

  // Change text
  portal5HintButton.textContent = "Portal 5 Hint";

  // Add the click event so it works
  portal5HintButton.setAttribute("onclick", "showHint(5)");

  console.log("Portal 5 UNLOCKED and button updated!");
}
