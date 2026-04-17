const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

function toggleBtn() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
}

btn.addEventListener("click", toggleBtn);
