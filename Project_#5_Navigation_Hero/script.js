let active = 3;
let mncircle = document.querySelectorAll(".minicircle");
let sec = document.querySelectorAll(".sec");

// Set initial state
gsap.to(mncircle[active - 1], {
    opacity: 0.5
});
gsap.to(sec[active - 1], {
    opacity: 1
});

mncircle.forEach(function(val, index) {
    val.addEventListener('click', function() {
        // Animate the circle rotation
        gsap.to("#circle", {
            rotate: (3 - (index + 1)) * 10,
            ease: "expo.inOut",
            duration: 1
        });

        // Fade all to grey first
        greyout();

        // Highlight the clicked circle
        gsap.to(mncircle[index], {
            opacity: 0.5
        });

        // Highlight the corresponding section
        gsap.to(sec[index], {
            opacity: 1
        });

        // Update active index if needed
        active = index + 1;
    });
});

// Function to fade all to grey
function greyout() {
    gsap.to(mncircle, {
        opacity: 0.08
    });

    gsap.to(sec, {
        opacity: 0.4
    });
}

gsap.to("#circle", {
    rotate : 0,
    ease : Expo.easeInOut,
    duration : 4,
    duration: 3,
    ease: "power1.inOut",
    force3D: true,
    autoRound: false
})