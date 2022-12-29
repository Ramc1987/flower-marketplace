const navMenu = document.querySelector('.nav');
const btnMenu = document.querySelector('.menu-toggle');

function openMobMenu() {
  btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('nav--open');
  });
}

export {openMobMenu};
