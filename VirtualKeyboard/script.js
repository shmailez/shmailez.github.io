let display = document.querySelector('.display');
let buttonSymbols = document.querySelectorAll('.key');
let buttonClear = document.querySelector('.clear');

for (let buttonSymbol of buttonSymbols) {
  buttonSymbol.onclick = function() {
  display.innerHTML += buttonSymbol.innerHTML;
}
}

buttonClear.onclick = function () {
  display.textContent = ' ';
}