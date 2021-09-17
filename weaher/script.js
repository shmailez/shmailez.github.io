let open = document.querySelector('.open');
let search = document.querySelector('.search');

open.onclick = function(){
    search.classList.add('search-active')
}


let cels = document.querySelector('.switch-btn');

cels.onclick = function(){
    cels.classList.toggle('switch-on');
}



