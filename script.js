gsap.registerPlugin(ScrollTrigger);

gsap.to(".creative-text span", {
  yPercent: 50,  // relative to CSS transform
  opacity: 1,
  rotation: gsap.utils.random(-10, 10),
  ease: "power2.out",
  duration: 1.5,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".creative-text",
    start: "top 90%",
    end: "bottom 50%",
    scrub: 0.6,
    markers: true
  }
});

gsap.registerPlugin(SplitText) 

let split = SplitText.create("#Senior-Programming-Portfolio", { type: "chars" });
let chars = split.chars

gsap.from(chars, {
  yPercent: 130,
  stagger: 0.02,
  ease: "back.out",
  duration: 0.5


})