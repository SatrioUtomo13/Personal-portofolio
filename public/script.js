// hamburger click
const btnClick = document.querySelector('#btn-click');
const navClick = document.querySelector('#nav-link');
btnClick.addEventListener('click', function () {
    btnClick.classList.toggle('hamburger-active')
    navClick.classList.toggle('hidden');
})

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const logo = document.querySelector('.text-logo');
    const hamburgerScroll = document.querySelectorAll('.h-scroll');
    const linkScroll = document.querySelectorAll('.link-scroll');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        logo.style.color = 'black';
        for(let i = 0; i < hamburgerScroll.length; i++){
            hamburgerScroll[i].classList.add('hamburger-line');
        }
        for (let a = 0; a < linkScroll.length; a++){
            linkScroll[a].style.color = '#010101';
        }
        
    } else {
        header.classList.remove('navbar-fixed');
        logo.style.color = 'white';
        for(let i = 0; i < hamburgerScroll.length; i++){
            hamburgerScroll[i].classList.remove('hamburger-line');
            hamburgerScroll[i].style.transition = 'none';
        }
        for (let a = 0; a < linkScroll.length; a++){
            linkScroll[a].style.color = 'white';
        }
    }
}