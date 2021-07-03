const init = () => {
    frameOne();
};

// frame 1
const frameOne = () => {
    gsap.from(".lionLogo", {
        duration: 1, 
        z: 100, 
        opacity: 0, 
        scale: 0.3
    });

    gsap.to(".lionLogo", {
        duration: 1.5,
        delay: 1
    });

    gsap.to(".lionLogo", {
        duration: 0.5,
        opacity: 0,
        delay: 2.5
    });

    gsap.to(".redBG", {
        duration: 1,
        y: 250,
        delay: 3
    });

    gsap.delayedCall(3, frameTwo);
}

// frame 2
const frameTwo = () => {
    gsap.set(".frame2BG", {
        opacity: 1
    });

    gsap.set(".shape1", {
        opacity: 1
    });

    gsap.to(".frame2BG", {
        duration: 2,
        scale: 1.1
    });

    gsap.to(".shape1", {
        duration: 1,
        y: -250,
        delay: 2.05
    });

    gsap.set(".frame2BG", {
        opacity: 0,
        delay: 4
    })

    gsap.delayedCall(2, frameThree);
}

// frame 3
const frameThree = () => {
    gsap.to(".redBG", {
        duration: 1,
        y: 0
    });

    var tl = gsap.timeline({delay: 0.8});

    tl.to(".f3Line1", {duration: 0.8, opacity: 1})
      .to(".f3Line2", {duration: 0.8, opacity: 1})
      .to(".f3Line3", {duration: 0.8, opacity: 1})

    gsap.to(".redBG", {
        duration: 1,
        y: -250,
        delay: 3.55
    });

    gsap.to(".f3Line1", {
        duration: 1,
        y: -250,
        delay: 3.5
    });

    gsap.to(".f3Line2", {
        duration: 1,
        y: -250,
        delay: 3.5
    });

    gsap.to(".f3Line3", {
        duration: 1,
        y: -250,
        delay: 3.5
    });

    gsap.delayedCall(3.5, frameFour);
}

// frame 4
const frameFour = () => {
    gsap.set(".shape2", {
        opacity: 1
    });
    
    gsap.from(".shape2", {
        duration: 1,
        y: 249
    });

    gsap.set(".f4Shadow", {
        opacity: 1
    })

    gsap.set(".frame4BG", {
        x: -370,
        y: -375,
        scale: 0.5,
        opacity: 1
    });

    gsap.to(".frame4BG", {
        duration: 4,
        x: -630,
        y: -330,
        scale: 0.5,
        delay: 1
    });

    var tl = gsap.timeline({delay: 1});

    tl.to(".f4Line1", {duration: 0.8, opacity: 1})
      .to(".f4Line2", {duration: 0.8, opacity: 1})
      .to(".f4Line3", {duration: 0.8, opacity: 1});

    gsap.to(".shape2", {
        duration: 1,
        opacity: 0,
        delay: 4
    });

    gsap.to(".frame4BG", {
        duration: 1,
        opacity: 0,
        delay: 4
    });

    gsap.to(".f4Shadow", {
        duration: 1,
        opacity: 0,
        delay: 4
    });

    gsap.to(".f4Line1", {
        duration: 1,
        opacity: 0,
        delay: 4
    });

    gsap.to(".f4Line2", {
        duration: 1,
        opacity: 0,
        delay: 4
    });

    gsap.to(".f4Line3", {
        duration: 1,
        opacity: 0,
        delay: 4
    });

    gsap.delayedCall(4, frameFive);
}

// frame 5
const frameFive = () => {
    gsap.to(".shape3", {
        duration: 1,
        opacity: 1
    })

    gsap.to(".pubLogo", {
        duration: 1,
        opacity: 1
    });
    
    gsap.to(".frame5BG", {
        duration: 1,
        opacity: 1
    });

    gsap.to(".f5Shadow", {
        duration: 1,
        opacity: 1,
        delay: 0.3
    });

    gsap.to(".f5Text", {
        duration: 1,
        opacity: 1,
        delay: 0.3
    });

    gsap.to(".applyBtn", {
        duration: 1,
        opacity: 1,
        delay: 0.8
    });
}

// functions to be used in event listeners
const showArrow = () => {
    gsap.to(".ctaArrow", {duration: 0.3, opacity: 1});
}

const hideArrow = () => {
    gsap.to(".ctaArrow", {duration: 0.3, opacity: 0});
}

// event listeners for CTA arrow
const button = document.querySelector(".applyBtn");
button.addEventListener("mouseover", showArrow);
button.addEventListener("mouseout", hideArrow);


init();