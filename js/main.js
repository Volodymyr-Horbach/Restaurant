
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

// popop
let popupBg = document.querySelector('.popup__bg')
let popup = document.querySelector('.popup')
let openPopunButton = document.querySelectorAll('.open-popup')
let closePopupButton = document.querySelector('.close-popup')

openPopunButton.forEach((buttom)=> {
  buttom.addEventListener('click', (e)=>{
    e.preventDefault()
    popupBg.classList.add('active')
    popup.classList.add('active')
  })
});

closePopupButton.addEventListener('click', ()=>{
  popupBg.classList.remove('active')
  popup.classList.remove('active')
})

document.addEventListener('click', (e)=>{
  if(e.target === popupBg){
    popupBg.classList.remove('active');
    popup.classList.remove('active')
  }
})

// let popupBtn = document.querySelector('.popup__btn')

// popupBtn.addEventListener('click', ()=>{
//   console.log('fff')
// })