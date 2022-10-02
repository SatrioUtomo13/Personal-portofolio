// hamburger
const btnClick = document.getElementById('btn-click');
const hamburgerLine = document.querySelectorAll('#btn-click span');
const navLink = document.getElementById('nav-link');

btnClick.addEventListener('click', function () {
    btnClick.classList.toggle('hamburger-active');
    navLink.classList.toggle('link-active');
})


//navbar scroll
const link = document.querySelectorAll('.link');
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const logo = document.querySelector('#logo');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        logo.style.color = '#010101';
        for(let i = 0; i < hamburgerLine.length; i++){
            hamburgerLine[i].style.background = 'black';
        }
        
        for(let i = 0; i < link.length; i++){
            link[i].classList.replace("link-fixed", "link-scroll");
        }
    } else {
        header.classList.remove('navbar-fixed');
        logo.style.color = 'white';
        for(let i = 0; i < hamburgerLine.length; i++){
            hamburgerLine[i].style.background = 'white';
        }

        for(let i = 0; i < link.length; i++){
            link[i].classList.replace("link-scroll", "link-fixed");
        }
    }

}


// link hover
const homeSpan = document.getElementById('home-span');
const aboutSpan = document.getElementById('about-span');
const serviceSpan = document.getElementById('service-span');
const projectSpan = document.getElementById('project-span');
const blogSpan = document.getElementById('blog-span');
const contactSpan = document.getElementById('contact-span');

link[0].addEventListener('mouseover', function() {
    homeSpan.style.display = 'block';
})
link[0].addEventListener('mouseout', function() {
    homeSpan.style.display = 'none';
})

link[1].addEventListener('mouseover', function() {
    aboutSpan.style.display = 'block';
})
link[1].addEventListener('mouseout', function() {
    aboutSpan.style.display = 'none';
})

link[2].addEventListener('mouseover', function() {
    serviceSpan.style.display = 'block';
})
link[2].addEventListener('mouseout', function() {
    serviceSpan.style.display = 'none';
})

link[3].addEventListener('mouseover', function() {
    projectSpan.style.display = 'block';
})
link[3].addEventListener('mouseout', function() {
    projectSpan.style.display = 'none';
})

link[4].addEventListener('mouseover', function() {
    blogSpan.style.display = 'block';
})
link[4].addEventListener('mouseout', function() {
    blogSpan.style.display = 'none';
})

link[5].addEventListener('mouseover', function() {
    contactSpan.style.display = 'block';
})
link[5].addEventListener('mouseout', function() {
    contactSpan.style.display = 'none';
})

