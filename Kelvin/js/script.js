// подключение анимации 
AOS.init();

const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.burger__icon');
const body = document.body;

if (menu && menuBtn) { // если на странице будет меню и кнопка бургер
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');  // добавляем классы
      menuBtn.classList.toggle('active');
      body.classList.toggle('lock');
   })


   menu.addEventListener('click', e => {    // по нажатию по области закрывается меню
      if (e.target.classList.contains('header__menu')) {
         menu.classList.remove('active');
         menuBtn.classList.remove('active');
         body.classList.remove('lock');
      }
   })
   menu.querySelectorAll('.menu__header-link').forEach(link => {
      link.addEventListener('click', () => {
         menu.classList.remove('active');
         menuBtn.classList.remove('active');
         body.classList.remove('lock');
      })
   })
}