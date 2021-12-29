let nav = document.querySelector('.nav');
let btn = document.querySelector('.btn');

btn.onclick = function(){
    nav.classList.toggle('invis')
}

let button = document.querySelector('.menu-btn');

button.onclick = function(){
    button.classList.toggle('menu-btn_active');
}