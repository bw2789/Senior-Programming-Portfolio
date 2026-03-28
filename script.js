
// GASP animation
gsap.to("h1", {
    duration: 2,
    opacity: 1,
    y: -30,
    ease: "power3.out",
    delay: 2
})

gsap.registerPlugin(ScrollTrigger);

const text = document.getElementById("animated-text");
text.innerHTML = text.textContent
  .split("")                  
  .map(char => `<span>${char}</span>`)  
  .join("");

// Animate each character on scroll
gsap.to("#animated-text span", {
  y: -50,          // move up
  opacity: 1,     
  stagger: 0.05,   
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom top",
    scrub: true        
  }
});