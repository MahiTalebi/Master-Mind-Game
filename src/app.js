const easyMode = document.querySelector(".easy__button");
const hardMode = document.querySelector(".hard__button");
const modal = document.querySelector(".modal");
const guideColor = document.querySelector(".target__color");
const selectedColor = document.querySelector(".selected__colors");
const colorsButtons = document.querySelector(".colors__buttons");

let targetColors = [];
let colors = [
  { name: "red", color: "#e5383b" },
  { name: "green", color: "#43aa8b" },
  { name: "blue", color: "#277da1" },
  { name: "gray", color: "#736f72" },
  { name: "white", color: "#e5e6e4" },
  { name: "pink", color: "#e5383b" },
  { name: "orange", color: "#e5383b" },
  { name: "violet", color: "#e5383b" },
];

easyMode.addEventListener("click", showSoftPage);
hardMode.addEventListener("click", showHardPage);

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
  colorsButtons.innerHTML = `<button class="red p-4 mx-2 rounded-circle"></button>
                          <button class="green p-4 m-2 rounded-circle"></button>
                          <button class="blue p-4 m-2 rounded-circle"></button>
                          <button class="gray p-4 m-2 rounded-circle"></button>
                          <button class="white p-4 m-2 rounded-circle"></button>`;
}
function showHardPage() {
  addTargetColors(7);
  modal.style.transform = "translateX(-100%)";
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
