// gsap.to(".Header", {
//     duration: 2,
//     opacity: 1,
//     y: -30,
//     ease: "power3.out",
//     delay: 2
// })

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".header", {
//   scrollTrigger: {
//     trigger: ".header",
//     start: "20px 80%",
//     end: "bottom 100px",
//     markers: true,
//     toggleActions: "restart pause reverse pause"

//   }, 
//   y: -20,
//   duration: 3


// })

// animate each letter individually
document.querySelectorAll(".creative-text span").forEach((letter, i) => {
  gsap.to(letter, {
    scrollTrigger: {
      trigger: letter,
      markers: true,
      start: "top 90%",
      end: "bottom 50%",
      scrub: 0.6
    },
    y: 100 + (i * 2),   // stagger vertical movement
    opacity: 1,
    rotation: gsap.utils.random(-10, 10),
    ease: "power2.out",
    duration: 1.5
  });
});