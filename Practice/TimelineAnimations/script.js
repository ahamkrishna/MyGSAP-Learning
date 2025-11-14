// PAGE 1 --------------------------------------
function page1animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        duration: 0.8,
        opacity: 0,
        stagger: 0.15
    });

    tl.from(".center-part1 h1", {
        x: -120,
        opacity: 0,
        duration: 0.6
    });

    tl.from(".center-part1 p", {
        x: -80,
        opacity: 0,
        duration: 0.5
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.6
    }, "-=0.4");

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
    });
}

// PAGE 2 --------------------------------------
function page2animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 75%",     // FIXED
            end: "top 10%",       // FIXED
            scrub: 1              // FIXED
        }
    });

    tl2.from(".services", {
        y: 40,
        opacity: 0,
        duration: 0.5
    });

    tl2.from([".elem.line1.left", ".elem.line1.right"], {
        x: (i) => i === 0 ? -200 : 200,
        opacity: 0,
        duration: 0.6
    }, "<");

    tl2.from([".elem.line2.left", ".elem.line2.right"], {
        x: (i) => i === 0 ? -200 : 200,
        opacity: 0,
        duration: 0.6
    }, "<");
}

page1animation();
page2animation();
