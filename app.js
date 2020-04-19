let tl = gsap.timeline();

tl.from(".content", {duration: 1, opacity:0, y:50, stagger: 0.5, ease: Power2.easeInOut});
tl.from(".view-album", {duration: 1, opacity:0, y:50, scale: 0.2, ease: "elastic"}, "-=.2");
tl.from("h3", {duration: 1, opacity:0, x:-50, stagger:0.5, ease: Power2.easeInOut});