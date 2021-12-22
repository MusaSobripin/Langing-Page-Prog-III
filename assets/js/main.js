// Configuração de Menu
const btnMobile = document.getElementById('btn-mobile');

function botaoMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', botaoMenu);
btnMobile.addEventListener('touchstart', botaoMenu)