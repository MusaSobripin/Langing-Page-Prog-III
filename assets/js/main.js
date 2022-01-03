// Configuração de Menu
const btnMobile = document.getElementById('btn-mobile');

function botaoMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', botaoMenu);
btnMobile.addEventListener('touchstart', botaoMenu)

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
      },
    },
  });

  const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "70px",
    duration: 700,
    reset: true,
  });
  
  scrollReveal.reveal(
    ` 
    #servicos .card, #sobre .image`,
    { interval: 100 }
  );
  
  