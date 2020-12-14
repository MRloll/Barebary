<template>
    <nav>
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <!-- the mobile nav   -->
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <nav-mobile />
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <!-- the fixed sticky  nav  -->
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <sticky-nav />
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <!-- the ordinary nav   -->
        <!-- @@@@@@@@@@@@@@@@@@@@ -->
        <div class="nav d-none d-lg-block">
            <div class="custom-container">
                <div class="row justify-content-between align-items-center">
                    <div class="links large-menu">
                        <ul>
                            <li>
                                <h3>
                                    <router-link to="/">
                                        home
                                    </router-link>
                                </h3>
                            </li>
                            <li>
                                <h3 class="link">
                                    <router-link to="/shop">
                                        the shop
                                        <i class="fas fa-chevron-down "></i>
                                    </router-link>
                                </h3>
                                <div class="slide-down-box ">
                                    <div class="slide-down-inner shop-products">
                                        <div class="row">
                                            <div
                                                v-for="category in categories"
                                                :key="category.id"
                                                class="col"
                                            >
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <router-link
                                                                :to="{
                                                                    name: 'shop'
                                                                }"
                                                            >
                                                                <h4
                                                                    @click="
                                                                        addCatName(
                                                                            category.name
                                                                        )
                                                                    "
                                                                >
                                                                    {{
                                                                        category.name
                                                                    }}
                                                                </h4>
                                                            </router-link>
                                                        </li>
                                                        <template
                                                            v-if="
                                                                category.sorts
                                                            "
                                                        >
                                                            <template
                                                                v-for="sort in category.sorts"
                                                            >
                                                                <li
                                                                    v-for="product in sort.products"
                                                                    :key="
                                                                        product.id
                                                                    "
                                                                >
                                                                    <router-link
                                                                        :to="{
                                                                            name:
                                                                                'product-page',
                                                                            params: {
                                                                                id:
                                                                                    product.id
                                                                            }
                                                                        }"
                                                                        >{{
                                                                            product.name
                                                                        }}</router-link
                                                                    >
                                                                </li>
                                                            </template>
                                                        </template>
                                                        <li
                                                            v-for="product in category.products"
                                                            :key="product.id"
                                                        >
                                                            <router-link
                                                                :to="{
                                                                    name:
                                                                        'product-page',
                                                                    params: {
                                                                        id:
                                                                            product.id
                                                                    }
                                                                }"
                                                                >{{
                                                                    product.name
                                                                }}</router-link
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3 class="link">
                                    <router-link to="/">
                                        the blog
                                        <i class="fas fa-chevron-down "></i>
                                    </router-link>
                                </h3>
                                <div class="slide-down-box">
                                    <div class="slide-down-inner">
                                        <ul>
                                            <li>
                                                <router-link to="">
                                                    first link
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="">
                                                    second link
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="">
                                                    third link
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="">
                                                    fourth link
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                    <span class="cart-count">{{
                                        cart.length
                                    }}</span>
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <base-mini-cart />
        <div class="overlay overlay-cart" @click.self="closeCart"></div>
    </nav>
</template>

<script>
import animate from "../../animation.js";
import NavMobile from "@/components/NavMobile.vue";
import StickyNav from "@/components/StickyNav.vue";
import { EventBus } from "../main";
import { mapState } from "vuex";
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
        },
        addCatName(catName) {
            EventBus.$emit("addCatName", catName);
        }
    },
    updated() {
        document.addEventListener("scroll", this.showFixedNav);
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //loop for animation links in the menu
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        var ul = document.querySelectorAll(".slide-down-inner ul");
        var i;
        for (i = 0; i < ul.length; i++) {
            var li = ul[i].querySelectorAll("li");

            var z = 0;
            for (z; z < li.length; z++) {
                li[z].setAttribute("style", `--animation-order: ${z}`);
            }
        }
    },
    beforeDestroy() {
        document.addEventListener("scroll", this.showFixedNav);
    },
    computed: {
        ...mapState(["categories", "cart"])
    },
    components: {
        NavMobile,
        StickyNav
    }
};
</script>

<style lang="scss">
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
            & > ul li {
                display: inline-block;
                margin: 0 30px 0 0;
                position: relative;
                &:hover .slide-down-box {
                    animation: fadeIn 0.7s ease forwards;
                    ul li {
                        animation-name: animateIn;
                        animation-duration: 350ms;
                        animation-delay: calc(var(--animation-order) * 100ms);
                        animation-fill-mode: both;
                        animation-timing-function: ease-in-out;
                    }
                }
                .slide-down-box {
                    position: absolute;
                    left: -40px;
                    background: white;
                    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%);
                    z-index: 1;
                    .slide-down-inner {
                        min-width: 300px;
                        padding: 20px 40px;
                        ul {
                            li {
                                display: block;
                                margin: 0;
                                opacity: 0;
                                a {
                                    margin: 0.4em 0;
                                    line-height: 1.3;
                                    display: inline-block;
                                    color: #666;
                                    font-size: 17px;
                                    font-weight: 300;
                                    letter-spacing: 0px;
                                    text-transform: capitalize;
                                    transition: color 0.4s ease-out;
                                    &:hover {
                                        color: #9c9c9c;
                                    }
                                }
                            }
                        }
                    }
                    .shop-products {
                        min-width: 900px;
                        padding: 70px 50px;
                        background: url("../assets/images/menu-bg.jpg");
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-attachment: scroll;
                        background-position: 100% 0%;
                        ul li:first-of-type {
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
        .widgets {
            @extend %widgets;
        }
    }
}

@keyframes fadeIn {
    0% {
        clip-path: polygon(0 0, 100% 0, 100% 20%, 0 50%);
    }
    100% {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
}

@keyframes animateIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
