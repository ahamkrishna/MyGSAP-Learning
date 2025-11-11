gsap.from("h1", {
    opacity: 0, //visibility of element
    color: "red", //text color
    duration: 2, //time taken to complete the transition / animation
    delay: 1, // starting time delay for the effect
    y: 30, //co-ordinate in y axis
    stagger: -0.5, //line by line transition wrt time in seconds (-1 gives reverse order from bottom to top)
})