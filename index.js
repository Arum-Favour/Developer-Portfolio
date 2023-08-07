const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".links");
const navLinkItems = Array.from(navLinks.querySelectorAll('a'));


hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
});

navLinkItems.forEach((link)=>{
    link.addEventListener("click",()=>{
       navLinks.classList.remove('active')
       // link.classList.add('active');
    })
})