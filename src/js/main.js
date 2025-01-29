var buttons = document.querySelectorAll(".product-addtocart");
var confirmationMessage = document.querySelector(".confirmation");
function addProduct() {
  confirmationMessage.classList.add("open");
  setTimeout(function () {
    confirmationMessage.classList.remove("open");
  }, 2000);
}
buttons.forEach(function (button) {
  button.addEventListener("click", addProduct);
});
