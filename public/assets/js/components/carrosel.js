document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.meu-carrossel', {
    
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false, 
    },
    
    effect: 'fade', 
    
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});