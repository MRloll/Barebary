<template>
    <nav>
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <!-- the fixed sticky  nav  -->
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <div class="nav-fixed nav d-none d-lg-block">
            <div class="custom-container">
                <div class="row justify-content-between align-items-center">
                    <div class="links">
                        <ul>
                            <li>
                                <h3>
                                    <router-link to="/" class="">
                                        home
                                    </router-link>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <router-link to="/">
                                        the shop
                                        <i class="fas fa-chevron-down "></i>
                                    </router-link>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <router-link to="/">
                                        the blog
                                        <i class="fas fa-chevron-down "></i>
                                    </router-link>
                                </h3>
                            </li>
                        </ul>
                    </div>
                    <div class="logo text-center">
                        <img :src="require('../assets/images/logo_x36.png')" />
                    </div>
                    <div class="widgets d-flex">
                        <div class="search">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="account">
                            <h3>
                                <router-link to=""> my account </router-link>
                                <i class="fas fa-chevron-down "></i>
                            </h3>
                        </div>
                        <div class="cart" @click="openCart">
                            <h3>
                                <router-link to="">
                                    cart
                                    <span class="cart-count">0</span>
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <!-- the ordinary nav nav  -->
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <div class="nav d-none d-lg-block">
            <div class="custom-container">
                <div class="row justify-content-between align-items-center">
                    <div class="links">
                        <ul>
                            <li>
                                <h3>
                                    <router-link to="/" class="">
                                        home
                                    </router-link>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <router-link to="/">
                                        the shop
                                        <i class="fas fa-chevron-down "></i>
                                    </router-link>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <router-link to="/">
                                        the blog
                                        <i class="fas fa-chevron-down "></i>
                                    </router-link>
                                </h3>
                            </li>
                        </ul>
                    </div>
                    <div class="logo text-center">
                        <img :src="require('../assets/images/logo_x56.png')" />
                    </div>
                    <div class="widgets d-flex">
                        <div class="search">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="account">
                            <h3>
                                <router-link to=""> my account </router-link>
                                <i class="fas fa-chevron-down "></i>
                            </h3>
                        </div>
                        <div class="cart" @click="openCart">
                            <h3>
                                <router-link to="">
                                    cart
                                    <span class="cart-count">0</span>
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <!-- the mobile nav   -->
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <nav-mobile />
        <base-mini-cart />
        <div class="overlay overlay-cart" @click.self="closeCart"></div>
    </nav>
</template>

<script>
import animate from "../../animation.js";
import NavMobile from "@/components/NavMobile.vue";
export default {
    name: "BaseNavBar",
    methods: {
        openCart() {
            animate.openCart();
        },
        closeCart() {
            animate.closeCart();
        },
        showFixedNav() {
            let fixedNav = document.querySelector(".nav-fixed");
            if (window.scrollY > 256) {
                fixedNav.classList.remove("unstick");
                fixedNav.classList.add("stick");
            } else {
                fixedNav.classList.replace("stick", "unstick");
            }
        }
    },
    mounted() {
        document.addEventListener("scroll", this.showFixedNav);
    },
    components: {
        NavMobile
    }
};
</script>

<style lang="scss" scoped>
//********** */
//global
// ***********/
h3 {
    font-size: 25px;
    i {
        font-size: 13px;
    }
}

//****************/
// start nav bar
//******************/
nav {
    //****************/
    // nav styles
    //******************/
    .nav,
    .nav-fixed {
        padding: 50px 0;
        background: white;

        //****************/
        // start nav links
        //******************/
        .links {
            ul {
                li {
                    display: inline-block;
                    margin: 0 30px 0 0;
                }
            }
        }
        .widgets {
            @extend %widgets;
        }
    }

    //****************/
    // fixed nav styles
    //******************/
    .nav-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        transform: translateY(-120%);
        padding: 14px 0;
        background: white;
        &.stick {
            animation: slide-down-skew 0.7s ease forwards;
        }
        &.unstick {
            animation: slide-up-skew 0.7s ease forwards;
        }
    }
}

@keyframes slide-up-skew {
    0% {
        transform: translateY(0);
        transform-origin: right top;
        animation-timing-function: ease-in;
    }
    50% {
        transform: translateY(-20%) rotate(2deg);
        transform-origin: right top;
        animation-timing-function: ease-out;
    }
    100% {
        transform: translateY(-120%) rotate(0deg);
        transform-origin: right top;
        animation-timing-function: ease-out;
    }
}

@keyframes slide-down-skew {
    0% {
        transform: translateX(-20px) translateY(-120%) rotate(-7deg);
        transform-origin: left top;
    }
    100% {
        transform: translateY(0);
        transform-origin: left top;
    }
}
</style>
