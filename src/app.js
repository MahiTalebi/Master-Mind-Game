const easyMode = document.querySelector(".easy__button");
const hardMode = document.querySelector(".hard__button");
const modal = document.querySelector(".modal");

easyMode.addEventListener("click", showSoftPage);
hardMode.addEventListener("click", showHardPage);

function showSoftPage() {
  modal.style.transform = "translateX(-100%)";
}
function showHardPage() {
  modal.style.transform = "translateX(-100%)";
}
