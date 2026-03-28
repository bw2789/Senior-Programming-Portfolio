gsap.registerPlugin(ScrollTrigger);



gsap.registerPlugin(SplitText) 

let split = SplitText.create("#Senior-Programming-Portfolio", { type: "chars" });
let chars = split.chars

gsap.from(chars, {
  yPercent: 130,
  stagger: 0.02,
  ease: "back.out",
  duration: 0.5


})