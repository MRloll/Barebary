import { gsap, Expo } from "gsap";
const animate = {
    tl: gsap.timeline({
        defaults: { duration: 0.7, ease: Expo.easeOut }
    }),
    openMenu() {
        gsap.to(".overlay-menu", { opacity: 0.6, display: "block" });
        gsap.to("html", { overflow: "hidden" });
        gsap.to(".nav-mobile .links-wrapper", {
            x: 0
        });

        gsap.to(".nav-mobile .links-holder li .link", {
            y: 0,
            stagger: 0.1,
            duration: 1
        });

        this.tl.to(".nav-mobile .links-holder hr", {
            opacity: 1,
            width: "100%"
        });

        //just making sure that it will not diappear when resizing screen to be large
        let navMobile = document.querySelector(".nav-mobile");
        navMobile.classList.replace("d-lg-none", "d-block");
    },
    closeMenu() {
        gsap.to(".overlay-menu", { opacity: 0, display: "none" });
        gsap.to("html", { overflow: "auto" });
        gsap.to(".nav-mobile .links-wrapper", {
            x: "-100%"
        });

        this.tl.to(".nav-mobile .links-holder li .link", {
            y: 120
        });

        this.tl.to(".nav-mobile .links-holder hr", {
            opacity: 0,
            width: "40%"
        });

        //Resetting the class to display as none at the large screens
        let navMobile = document.querySelector(".nav-mobile");
        navMobile.classList.replace("d-block", "d-lg-none");
    },
    openCart() {
        this.tl.to(".mini-cart", { maxWidth: 670 });
        gsap.to(".overlay-cart", { opacity: 0.6, display: "block" });
        gsap.to("body", { overflow: "hidden" });
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
        gsap.to("body", { overflow: "auto" });
        this.tl.to(".mini-cart", {
            maxWidth: 0
        });
    },
    openMenuSupLinks(elem) {
        gsap.to(elem, {
            x: 0,
            duration: 0.3
        });
        gsap.to(".links-holder", {
            x: -100,
            duration: 0.3
        });
    },
    closeMenuSupLinks(elem) {
        gsap.to(elem, {
            x: "100%",
            duration: 0.3
        });
        gsap.to(".links-holder", {
            x: 0,
            duration: 0.3
        });
    },
    openCategoryLinks(elem) {
        gsap.to(elem, {
            x: 0,
            duration: 0.3
        });
    },
    closeCategoryLinks(elem) {
        gsap.to(elem, {
            x: "100%",
            duration: 0.3
        });
    }
};

export default animate;
