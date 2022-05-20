
// swiper 
const swiper = new Swiper('.reviews__slider', {
    loop: true,
    pagination: {
      el: '.reviews-pagination',
    },
});

// burger
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__information')

document.addEventListener("DOMContentLoaded",function(){
  document.querySelector('.header__burger').onclick = function(){
      menu.classList.toggle('active')
      burger.classList.toggle('active');
      document.querySelector('body').classList.toggle('lock')
  }
})