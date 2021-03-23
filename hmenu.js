const menuBtn = document.querySelector('.menu-btn-mob');
let menuOpen = false;
menuBtn.addEventListener('click', doAction);

function doAction(){
    if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
}