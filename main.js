document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle button");
    const container = document.querySelector(".container");
    const links = document.querySelectorAll(".link");
    let isOpen = false;

    const timeline = gsap.timeline({ paused: true});

    timeline.to(container, {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)"
    });

    timeline.to(links, {
        duration: 1,
        top: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power3.inOut"
    }, "-=1");

    toggleButton.addEventListener("click", function() {
        if(isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen;
    });
})