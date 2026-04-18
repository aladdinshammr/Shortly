const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const form = document.getElementById("form");
const input = document.getElementById("input");
const errMsg = document.getElementById("err-msg");

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i",
  );
  return !!pattern.test(str);
}

function toggleBtn() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
}

function handleForm(e) {
  e.preventDefault();

  if (input.value) {
    if (validURL(input.value)) {
      form.classList.remove("border-red");
      errMsg.textContent = "";
      alert(input.value);
    } else {
      errMsg.textContent = `${input.value} is not a valid URL`;
      form.classList.add("border-red");
    }
  } else {
    errMsg.textContent = "Please provide a valid URL";
    form.classList.add("border-red");
  }
}

btn.addEventListener("click", toggleBtn);
form.addEventListener("submit", handleForm);
