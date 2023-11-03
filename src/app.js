const easyMode = document.querySelector(".easy__button");
const hardMode = document.querySelector(".hard__button");
const modal = document.querySelector(".modal");
const guideColor = document.querySelector(".target__color");
const selectedColor = document.querySelector(".selected__colors");
const colorsButtons = document.querySelector(".colors__buttons");
const enterClick = document.querySelector("#enter");

let targetColors = [];
let selectColor = [];
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

function colorsClicked(e) {
  if (e.target.tagName == "BUTTON") {
    addColor(e.target.id);
  }
}
function submit() {
  for (let i = 0; i < targetColors.length; i++) {
    if (selectColor[i] === targetColors[i]) {
      guideColor.children[i].classList.add("correct");
    } else if (selectColor[i] !== targetColors[i]) {
      if (targetColors.includes(selectColor[i])) {
        guideColor.children[i].classList.add("maybe");
      } else if (!targetColors.includes(selectColor[i])) {
        guideColor.children[i].classList.add("incorrect");
      }
    } else {
      alert("Error");
    }
  }
  let isAllCorrect = true;
  for (let i = 0; i < guideColor.children.length; i++) {
    if (!guideColor.children[i].classList.contains("correct")) {
      isAllCorrect = false;
      break;
    }
  }
  if (isAllCorrect) {
    alert("you win");
  } else {
    alert("try again");
  }
}

function addColor(color) {
  if (selectColor.length < targetColors.length) {
    selectColor.push(color);
  } else alert("Please Press Enter Button");

  for (let x = 0; x < targetColors.length; x++) {
    if (selectedColor.children[0].children[x].id === "") {
      selectedColor.children[0].children[x].id = `${color}`;
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
