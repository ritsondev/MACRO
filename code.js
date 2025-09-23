const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById('icon-menu');

menuBtn.addEventListener('click', (e) =>{

    navLinks.classList.toggle("exe");

    const isOpen = navLinks.classList.contains("exe");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")

})