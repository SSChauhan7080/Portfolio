let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}
/*-------------Scroll Section active click--------*/
let section=document.querySelector('section');
let navLinks=document.querySelector('header nav a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offest=sec.offestTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offest+height){
            navLinks.forEach.apply(links=>{
              links.classList.remove('active');
              document.querySelector('header nev a[href*='+id+']').classList.add('active');
            });
        };
    });
    /*---------------------------Sticky Number--------------*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*-------------------------------remove toggle icon and navbar--------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};
/*---------scroll reveal------*/
ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay:200,
});
ScrollReveal().reveal('.home-contact, heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .skill-container,.portfolio-box, .contact form', { origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right' });
/*---------Typed js------*/
const typed=new Typed('.multiple-text',{
   strings: ['Fresher','And','Application Devloper'],
   typeSpeed:70,
   backSpeed: 70,
   backDelay:1000,
   loop:true,
});
