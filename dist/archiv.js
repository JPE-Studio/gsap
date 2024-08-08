/*
 gsap.from('.logo', {
  scale: 0,
  duration: 2,
  ease: 'bounce.out'
 })

 gsap.from('.background_blue', {
    scrollTrigger: '.background_blue', 
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
    x: 500,
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
    duration: 2,
    ease: "power1.out"
});

gsap.from('.contact-background', {
    scrollTrigger: '.contact-background',
    x: 1000,
    duration: 1.2,
     ease: "power1.out"
});

gsap.from('.team_img_wrapper', {
    scrollTrigger: ".team_img_wrapper",
    scale: 0,
    duration: 0.8,
    ease: 'power1.out'
});

gsap.from('.logo', {
    scale: 0,
    duration: 2,
   });

gsap.from('.heading-style-h2',{
    y: 50,
    ease: "circ.out"
});

gsap.from('.paragraph',{
    y: 50,
    ease: "circ.out"
});


*/




window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span"
    });
  
    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 80%",
        onEnter: () => timeline.play()
      });
    }
  
    $("[words-slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
      createScrollTrigger($(this), tl);
    });
  
    $("[words-rotate-in]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.set($(this).find(".word"), { transformPerspective: 1000 });
      tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
      createScrollTrigger($(this), tl);
    });
  
    $("[words-slide-from-right]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
      createScrollTrigger($(this), tl);
    });
  
    $("[letters-slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
      createScrollTrigger($(this), tl);
    });
  
    $("[letters-slide-down]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
      createScrollTrigger($(this), tl);
    });
  
    $("[letters-fade-in]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
      createScrollTrigger($(this), tl);
    });
  
    $("[letters-fade-in-random]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { 
        opacity: 0, 
        duration: 0.05, 
        ease: "power1.out", 
        stagger: { amount: 0.4, from: "random" } });
      createScrollTrigger($(this), tl);
    });


  
    $("[scrub-each-word]").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top center",
          scrub: true
        }
      });
      tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
    });
  
    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
  });

  gsap.from('[scale-from-0]', {
    scrollTrigger: '[scale-from-0]',
    start: "top 60%",
    scale: 0,
    duration: 1.5,
    ease: "power1.out"
});

// Stellt sicher, dass ScrollTrigger geladen ist
gsap.registerPlugin(ScrollTrigger);

// Animation für Elemente mit dem Attribut 'stagger-reviel'
gsap.from('[stagger-reviel]', {
  scrollTrigger: {
    trigger: '.leistungen', // Trigger-Element, das die Animation auslöst
    start: "top 60%", // Startpunkt der Animation
    toggleActions: "play none none none", // Steuerung der Animation
    markers: false // Setze auf true, um Debug-Markierungen anzuzeigen
  },
  opacity: 0,
  yPercent: 100,
  duration: 0.6, // Dauer der Animation pro Element
  ease: "power1.out", // Ease-Typ
  stagger: 0.2 // Zeitverzögerung zwischen den Animationen der einzelnen Elemente
});


gsap.from('.team_img_wrapper', {
    scrollTrigger: {
        trigger: ".team_img_wrapper",
        start: "top 60%", // Startpunkt der Animation
        },
    scale: 0,
    duration: 0.6,
    ease: 'power1.out',
    stagger: 0.1
});

gsap.from('.client_logo', {
    scrollTrigger: {
      trigger: '.clients', // Trigger-Element, das die Animation auslöst
      start: "top 60%", // Startpunkt der Animation
      toggleActions: "play none none none", // Steuerung der Animation
      markers: false // Setze auf true, um Debug-Markierungen anzuzeigen
    },
    opacity: 0,
    duration: 0.4, // Dauer der Animation pro Element
    ease: "power1.out", // Ease-Typ
    stagger: 0.1 // Zeitverzögerung zwischen den Animationen der einzelnen Elemente
  });

  const timeline = gsap.timeline({ paused: true });

    timeline.to(".hero-heading", {
      opacity: 1,
      yPercent: 0,
      duration: 0.5,
      ease: "back.out(2)",
      stagger: { amount: 0.5 }
    })
    .to(".hero-paragraph", {
      opacity: 1,
      duration: 0.5
    });

    ScrollTrigger.create({
      trigger: ".triggerElement",
      start: "top 80%",
      onEnter: () => timeline.play()
    });