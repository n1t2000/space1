const button_menu = document.querySelector(".burg_menu");
const menu = document.querySelector("#menua");
console.log(button_menu);

button_menu.addEventListener("click", function () {
  menu.classList.toggle("mn_burg");
});
