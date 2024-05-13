function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Now we are changing the navbar background color
function handleScroll() {
    const header = document.querySelector('.navigation');
    if (window.scrollY>0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
}
document.addEventListener('scroll', handleScroll);
