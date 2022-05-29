const btnToggle = document.querySelectorAll('.toggle-menu');

const closeMenu = (event) => {
  const menu = document.querySelector('.menu ul');
  event.target.classList.toggle('fa-bars');
  event.target.classList.toggle('fa-close');

  menu.classList.toggle('menu-slide');
};

btnToggle.forEach((btn) => { btn.addEventListener('click', closeMenu); });
