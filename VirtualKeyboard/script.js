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

var i = 0;
function newmes(){

    
    var textmes = document.getElementById('textmes');
    
    
    var textmessage = textmes.value;
    
   
    var comments = document.getElementById('comments');
    
    i++;
    comments.innerHTML += '<div class="com" class="comment"> >  <p> ' + textmessage + ' </p></div></div>';
    
}