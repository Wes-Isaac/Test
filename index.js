const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const menuLis = menu.querySelectorAll('li');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
  menu.classList.replace('invisible', 'menu');
  main.style.backgroundColor = '#d0d9d4';
});
for (let i = 0; i < menuLis.length; i = i + 1) {
  menuLis[i].addEventListener('click', () => {
    menu.classList.replace('menu', 'invisible');
    main.style.backgroundColor = '#fff';

  });
}
