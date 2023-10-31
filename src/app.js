const easyMode = document.querySelector(".easy__button");
const hardMode = document.querySelector(".hard__button");
const modal = document.querySelector(".modal");

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
