<template>
    <!-- @@@@@@@@@@@@@@@@@@@@ -->
    <!-- the fixed sticky  nav  -->
    <!-- @@@@@@@@@@@@@@@@@@@@ -->
    <div class="nav-fixed nav d-none d-lg-block">
        <div class="custom-container">
            <div class="row justify-content-between align-items-center">
                <div class="links large-menu">
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
                            <div class="slide-down-box">
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
                                                        <router-link to="/">
                                                            <h4>
                                                                {{
                                                                    category.name
                                                                }}
                                                            </h4>
                                                        </router-link>
                                                    </li>
                                                    <template
                                                        v-if="category.sorts"
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
                                                                    to="/"
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
                                                        <router-link to="/">{{
                                                            product.name
                                                        }}</router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h3>
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
</template>
<script>
import animate from "../../animation.js";
import { mapState } from "vuex";

export default {
    name: "StickyNav",
    methods: {
        openCart() {
            animate.openCart();
        }
    },
    computed: {
        ...mapState(["categories"])
    }
};
</script>

<style lang="scss" scoped>
//****************/
// fixed nav styles
//******************/
.nav-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
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

//****************/
// fixed nav Animation
//******************/
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
