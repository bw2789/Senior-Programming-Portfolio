gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

let split = SplitText.create("#Senior-Programming-Portfolio", { type: "chars" });
let chars = split.chars


let tl = gsap.timeline();

tl.from(chars, {
  yPercent: 130,
  opacity: 0,
  stagger: 0.02,
  ease: "back.out",
  duration: 0.5
})
.from("#pfp", {
  y: 100,         
  opacity: 0,      
  scale: 0.8,     
  duration: 0.8,
  ease: "back.out(1.7)"
}, "<"); // "<" means start at the same time as previous animation


new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Paagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },

  }

    
});