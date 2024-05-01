function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

document.addEventListener('scroll', () => {
  const header = document.querySelector('.navigation');

  if(window.scrollY > 0) {
      header.classList.add ('scrolled');
  }
  else {
      header.classList.remove('scrolled');
  }
}) 
  