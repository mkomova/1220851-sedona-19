var link = document.querySelector(".inquirer__send-button");
var popup = document.querySelector(".popup--warning");
var close = popup.querySelector(".popup__button");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var tel = popup.querySelector("[name=tel]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!name.value || !tel.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
