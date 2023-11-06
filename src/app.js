const easyMode = document.querySelector(".easy__button");
const hardMode = document.querySelector(".hard__button");
const modal = document.querySelector(".modal");
const guideColor = document.querySelector(".target__color");
const selectedColor = document.querySelector(".selected__colors");
const colorsButtons = document.querySelector(".colors__buttons");
const enterClick = document.querySelector("#enter");
const selectedLog = document.querySelector(".selected__log");
const lastModal = document.querySelector(".last__modal");
const gameGuide = document.querySelector(".game__guide");
const GameGuideCaption = document.querySelector(".card");
const okClick = document.querySelector(".ok__click");
const changeLevel = document.querySelector(".change__level");

let targetColors = [];
let selectColor = [];

let easyMaxAttempt = 10;
let hardMaxAttempt = 15;
let attempt = 1;
let logNumber = 0;

let colors = [
  "red",
  "green",
  "blue",
  "gray",
  "white",
  "pink",
  "orange",
  "violet",
];

easyMode.addEventListener("click", showSoftPage);
hardMode.addEventListener("click", showHardPage);
colorsButtons.addEventListener("click", colorsClicked);
enterClick.addEventListener("click", submit);
gameGuide.addEventListener("click", gameGuideShow);
okClick.addEventListener("click", gameGuideHide);
changeLevel.addEventListener("click", changeLevelShow);

function showSoftPage() {
  addTargetColors(5);
  modal.style.transform = "translateX(-100%)";
  guideColor.innerHTML = ` <div class="rounded-circle"></div>
                           <div class="rounded-circle"></div>
                           <div class="rounded-circle"></div>
                           <div class="rounded-circle"></div>
                           <div class="rounded-circle"></div>`;
  selectedColor.innerHTML = `<div class="d-flex justify-content-end gap-3 mx-5 my-2">
                             <div class="rounded-circle"></div>
                             <div class="rounded-circle"></div>
                             <div class="rounded-circle"></div>
                             <div class="rounded-circle"></div>
                             <div class="rounded-circle"></div></div>`;
  colorsButtons.innerHTML = `<button id="red" class="p-4 mx-2 rounded-circle"></button>
                             <button id="green" class="p-4 m-2 rounded-circle"></button>
                             <button id="blue" class="p-4 m-2 rounded-circle"></button>
                             <button id="gray" class="p-4 m-2 rounded-circle"></button>
                             <button id="white" class="p-4 m-2 rounded-circle"></button>`;
}
function showHardPage() {
  addTargetColors(8);
  modal.style.transform = "translateX(-100%)";
}

function gameGuideShow() {
  GameGuideCaption.style.transform = "translateY(100%)";
}
function gameGuideHide() {
  GameGuideCaption.style.transform = "translateY(-100%)";
}
function changeLevelShow() {
  location.reload();
}

function colorsClicked(e) {
  if (e.target.tagName == "BUTTON") {
    addColor(e.target.id);
  }
}

function submit() {
  if (selectColor.length !== targetColors.length) {
    alert("Empty Input is Invalid, Fill All Color Input");
  } else {
    for (let i = 0; i < targetColors.length; i++) {
      if (selectColor[i] === targetColors[i]) {
        guideColor.children[i].classList.remove("incorrect");
        guideColor.children[i].classList.remove("maybe");
        guideColor.children[i].classList.add("correct");
      } else if (selectColor[i] !== targetColors[i]) {
        if (targetColors.includes(selectColor[i])) {
          guideColor.children[i].classList.add("maybe");
        } else if (!targetColors.includes(selectColor[i])) {
          guideColor.children[i].classList.remove("maybe");
          guideColor.children[i].classList.add("incorrect");
        }
      } else {
        alert("Error");
      }
    }
    let isAllCorrect = true;
    for (let i = 0; i < guideColor.children.length; i++) {
      if (selectColor.toString() !== targetColors.toString()) {
        isAllCorrect = false;
        break;
      }
    }

    if (isAllCorrect) {
      for (i = 0; i < targetColors.length; i++) {
        guideColor.children[i].id = targetColors[i];
      }
      lastModal.style.transform = "translateX(0)";
      lastModal.style.background = "#43aa8b7b";
      lastModal.innerHTML = "You Win";
    } else if (!isAllCorrect) {
      selectColor = [];

      if (targetColors.length == 5 && attempt < easyMaxAttempt) {
        selectedLog.innerHTML += `<div class="selected__colors${attempt}">
        <div class="selected__colors">
          <div class="d-flex justify-content-end gap-3 mx-5 my-2">
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
          </div>
        </div>
      </div>`;

        attempt++;
        logNumber++;
      } else if (targetColors.length == 8 && attempt < hardMaxAttempt) {
        selectedLog.innerHTML += `<div class="selected__colors${attempt}">
        <div class="selected__colors">
          <div class="d-flex justify-content-end gap-3 mx-5 my-2">
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
            <div class="rounded-circle"></div>
          </div>
        </div>
      </div>`;

        logNumber++;
        attempt++;
      } else {
        for (i = 0; i < targetColors.length; i++) {
          guideColor.children[i].id = targetColors[i];
        }
        lastModal.style.transform = "translateX(0)";
      }
    }
  }
}

function addColor(color) {
  if (selectColor.length < targetColors.length) {
    selectColor.push(color);
  }

  for (let x = 0; x < targetColors.length; x++) {
    if (
      selectedLog.children[logNumber].children[0].children[0].children[x].id ===
      ""
    ) {
      selectedLog.children[logNumber].children[0].children[0].children[
        x
      ].id = `${color}`;

      break;
    }
  }
}

function addTargetColors(number) {
  colors = colors.slice(0, number);

  for (let i = 0; i < number; i++) {
    targetColors.push(getRandom());
  }
}

function getRandom() {
  return colors[Math.floor(Math.random() * colors.length)];
}
