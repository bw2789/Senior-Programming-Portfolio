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


