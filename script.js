const navFlex = document.querySelector('.navFlex');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click' , show);
closeMenu.addEventListener('click' , close);

function show(){
    navFlex.style.display ='flex';
    navFlex.style.top ='0';
 
}

function close(){
    navFlex.style.top = '-100%';
}