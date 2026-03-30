gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


// aniamtion for banner text and pfp
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
// banner animation ends-------------------------


// Initialize Swiper
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // effect: "coverflow",

  coverflowEffect: {
    rotate: 30,              
    stretch: 0,              
    depth: 100,              
    modifier: 1,            
    slideShadows: true       
  },

  autoplay: {
    delay: 3000, // 3 seconds between slides
    disableOnInteraction: false, // keeps autoplay even after user interacts with it
  },

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
    1440: {
      slidesPerView: 4
    }

  }

    
});
// swiper ends-------------------------

// animation for project overview section
gsap.from("#project-overview h1", {
  scrollTrigger: {
    trigger: "#project-overview",
    start: "top 80%", // when it enters viewport
    toggleActions: "play none none none", //: onEnter: play onLeave: none onEnterBack: none onLeaveBack: none                *need to remember the order
    markers: true
  },
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// animation for project cards
gsap.from(".card-item", {
  scrollTrigger: {
    trigger: ".card-container",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  // ease: "power3.out",
  ease: "back.out"
});