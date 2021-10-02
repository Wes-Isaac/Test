const hamburger = document.querySelector('.fa-bars');
const main = document.querySelector('main');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click',(e)=> {
  console.dir(e);
  menu.classList.remove('menu')
  menu.classList.add('menu-on')
  main.style.backgroundColor = 'rgb(197, 197, 197)';
  menu.innerHTML = `
  <i class="fal fa-times fa-2x cancel-icon"></i>
  <ul class="menu-ul">
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
  </ul>`;
  
const cancel = document.querySelector('.cancel-icon');
const menu_ul = document.querySelector('.menu-ul');
const allLis = menu_ul.querySelectorAll('li');
for(let li of allLis) {
  li.addEventListener('click', can);
}

cancel.addEventListener('click', can);

})

function can() {
  menu.classList.add('menu')
  menu.classList.remove('menu-on')
  main.style.backgroundColor = '#fff';
}
