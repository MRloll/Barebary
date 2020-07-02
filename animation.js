import { gsap, Expo } from "gsap";
const animate = {
    tl: gsap.timeline({
        defaults: { duration: 0.7, ease: Expo.easeOut }
    }),
    openMenu() {
        this.tl.to(".nav-mobile .links", {
            x: 0
        });

        gsap.to(".nav-mobile .links li div", {
            y: 0,
            stagger: 0.1,
            duration: 1
        });

        this.tl.to(".nav-mobile .links hr", {
            opacity: 1,
            width: "100%"
        });

        gsap.to(".overlay-menu", { opacity: 0.6, display: "block" });
        gsap.to("html", { overflow: "hidden" });

        //just making sure that it will not diappear when resizing screen to be large
        let navMobile = document.querySelector(".nav-mobile");
        navMobile.classList.replace("d-lg-none", "d-block");
    },
    closeMenu() {
        gsap.to(".nav-mobile .links", {
            x: "-100%"
        });

        this.tl.to(".nav-mobile .links li div", {
            y: 120
        });

        this.tl.to(".nav-mobile .links hr", {
            opacity: 0,
            width: "40%"
        });

        gsap.to(".overlay-menu", { opacity: 0, display: "none" });
        gsap.to("html", { overflow: "auto" });

        //Resetting the class to display as none at the large screens
        let navMobile = document.querySelector(".nav-mobile");
        navMobile.classList.replace("d-block", "d-lg-none");
    },
    openCart() {
        this.tl.to(".mini-cart", { maxWidth: 670, padding: 70 });
        gsap.to(".overlay-cart", { opacity: 0.6, display: "block" });
        gsap.to("html", { overflow: "hidden" });
        this.tl.fromTo(
            ".cart-text",
            {
                opacity: 0,
                display: "none",
                x: 100
            },
            {
                opacity: 1,
                display: "block",
                x: 0
            }
        );
    },
    closeCart() {
        this.tl.to(".cart-text", {
            opacity: 0,
            display: "none",
            duration: 0.2
        });
        gsap.to(".overlay-cart", { opacity: 0, display: "none" });
        gsap.to("html", { overflow: "auto" });
        this.tl.to(".mini-cart", {
            maxWidth: 0,
            padding: 0
        });
    }
};

export default animate;
