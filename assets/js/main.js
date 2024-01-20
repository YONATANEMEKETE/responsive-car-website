/*=============== SHOW MENU ===============*/
const menu = document.getElementById('nav-menu'); 
const toggle = document.getElementById('nav-toggle')
const close = document.getElementById('nav-close')

toggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu')
}); 

close.addEventListener('click', () => {
  menu.classList.toggle('show-menu')
}); 

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll('.nav__link'); 

links.forEach(nl => {
  nl.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
  })
}); 

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header'); 

const activeHeader = () => {

  this.scrollY > 50 ? header.classList.add('header-change') 
                    : header.classList.remove('header-change') 
} 

window.addEventListener('scroll', activeHeader); 

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',  
  grabCursor: true,
  spaceBetween: 32,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  }, 

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
}); 


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
})

/* Link active featured */ 
const buttonItem = document.querySelectorAll('.featured__item'); 

buttonItem.forEach(bi => {
  bi.addEventListener('click', () => {
    buttonItem.forEach(br => br.classList.remove('show-feature'))
   // document.querySelector('.show-feature').classList.remove('show-feature') 
    bi.classList.add('show-feature') 
    
    })  
  }); 

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll-up'); 

window.addEventListener("scroll", () => {
  if (this.scrollY > 350){
    scrollUp.classList.add("show-scroll")
  } else {
    scrollUp.classList.remove("show-scroll")
  }
}); 



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); 

const scrollActive = () => {
  const scrollY = window.pageYOffset; 

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 58;
    const sectionHeight = current.offsetHeight; 
    const sectionId = current.getAttribute('id')
    const sectionClass = document.querySelector('.nav__menu a[href*= ' + sectionId + ']') 


    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('show-link')
    }  else {
      sectionClass.classList.remove('show-link')
    }
  })
}; 



window.addEventListener('scroll', scrollActive); 
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
 // reset: true, for repeat
}) 

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filter`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800}) 
sr.reveal(`.home__car-data`, {origin: 'bottom', delay: 900, interval: 100}) 
sr.reveal(`.home__button`, {origin: 'bottom', delay: 1000}) 
sr.reveal(`.about__group, .offer__data`, {origin: 'left'})
sr.reveal(`.about__data, .offer__img`, {origin: 'right'}) 
sr.reveal(`.features__map`, {deslay: 600, origin: 'bottom'})
sr.reveal(`.features__card`, {interval: 300}) 
sr.reveal(`.featured__card, .logos__content, .footer__content`, {interval: 100}) 