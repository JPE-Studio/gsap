
 gsap.from('.logo', {
  scale: 0,
  duration: 2,
  ease: 'bounce.out'
 })

 gsap.from('.background_blue', {
    scrollTrigger: '.background_blue', // start the animation when ".box" enters the viewport (once)
    x: 500,
    duration: 1,
     ease: "power1.out"
});


gsap.from('.hero_text_contain', {
    x: -500,
    duration: 1,
    ease: "power1.out"
});

gsap.from('.hero_image', {
    y: -500,
    duration: 1,
    ease: "power1.out"
});


gsap.from('.background_red', {
    scrollTrigger: '.background_red',
    scale: 0,
    duration: 1,
     ease: "power1.out"
});




gsap.from('.background_yellow', {
    scrollTrigger: '.background_yellow',
    scale: 0,
    duration: 1,
     ease: "power1.out"
});


gsap.from('.leistungen-background-div', {
    scrollTrigger: '.leistungen-background-div',
    x: -1500,
    duration: 1.2,
    ease: "power1.out"
});

gsap.from('.contact-background', {
    scrollTrigger: '.contact-background',
    x: 1000,
    duration: 1.2,
     ease: "power1.out"
});


let scrollTl = gsap.timeline({
    scrollTrigger: { 
        trigger: ".Team", 
        start: "top center", 
        end: "bottom bottom", 
        markers: true
    },
});

scrollTl.from('.team_img_wrapper', {
    scale: 0,
    duration: 0.8,
    ease: 'power1.out'
});