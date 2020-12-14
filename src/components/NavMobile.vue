<template>
    <div>
        <div class="nav nav-mobile ">
            <div class="custom-container">
                <div
                    class="row justify-content-between align-items-center d-lg-none"
                >
                    <!-- @@@@@@@@@@@@@@@@@@@@ -->
                    <!-- the  bars  -->
                    <!-- @@@@@@@@@@@@@@@@@@@@ -->
                    <div class="col">
                        <div class="bars" @click="openMenu">
                            <div>
                                <span class="top-bar"></span>
                                <span class="middle-bar"></span>
                                <span class="bottom-bar"></span>
                            </div>
                            <span class="d-none d-md-block">menu</span>
                        </div>
                    </div>
                    <div class="col-1 logo text-center">
                        <img :src="require('../assets/images/logo_x36.png')" />
                    </div>

                    <!-- @@@@@@@@@@@@@@@@@@@@ -->
                    <!-- the widgets  -->
                    <!-- @@@@@@@@@@@@@@@@@@@@ -->
                    <div class="col widgets d-flex">
                        <div class="search">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="account d-none d-md-block">
                            <h3>
                                <router-link to=""
                                    ><i class="far fa-user"></i>
                                </router-link>
                            </h3>
                        </div>
                        <div class="cart" @click="openCart">
                            <h3>
                                <router-link to="">
                                    <span class="d-none d-md-inline">cart</span>
                                    <span class="cart-count">{{
                                        cart.length
                                    }}</span>
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>

                <!-- @@@@@@@@@@@@@@@@@@@@ -->
                <!-- the aside animated links  -->
                <!-- @@@@@@@@@@@@@@@@@@@@ -->
                <div class="links-wrapper">
                    <div class="links-holder">
                        <div class="times text-left">
                            <span @click="closeMenu"
                                ><i class="fas fa-times fa-2x"></i
                            ></span>
                        </div>
                        <ul>
                            <li>
                                <div class="link">
                                    <h3>
                                        <router-link to="/" class="">
                                            home
                                        </router-link>
                                    </h3>
                                </div>
                            </li>
                            <li>
                                <div
                                    class="link"
                                    data-class=".shop-links"
                                    @click="openMenuSupLinks($event)"
                                >
                                    <h3>
                                        the shop
                                    </h3>
                                    <i class="fas fa-chevron-right "></i>
                                </div>
                            </li>
                            <li>
                                <div
                                    class="link"
                                    data-class=".blog-links"
                                    @click="openMenuSupLinks($event)"
                                >
                                    <h3>
                                        the blog
                                    </h3>
                                    <i class="fas fa-chevron-right "></i>
                                </div>
                            </li>
                        </ul>
                        <hr />
                        <div class="contacts">
                            <p>
                                <a href="mailto:walidelloll2018@gmail.com"
                                    >walidelloll2018@gmail.com</a
                                >
                            </p>
                            <p>
                                <a href="tel:+201013194797">+201013194797</a>
                            </p>
                        </div>
                    </div>
                    <div class="shop-links suplinks">
                        <div
                            class="navigation d-flex justify-content-between align-items-center"
                        >
                            <i
                                class="fas fa-arrow-left"
                                @click="closeMenuSupLinks($event)"
                                data-class=".shop-links"
                            ></i>
                            <router-link to="/shop"><h4>shop</h4></router-link>
                            <i
                                @click="closeMenu"
                                class="fas fa-times fa-2x"
                            ></i>
                        </div>
                        <div class="ul-wrapper">
                            <ul>
                                <li
                                    v-for="category in categories"
                                    :key="category.id"
                                >
                                    <div
                                        class="wrapper"
                                        :data-class="'.' + category.id"
                                        @click="openCategoryLinks($event)"
                                    >
                                        <span>
                                            {{ category.name }}
                                        </span>
                                        <i class="fas fa-chevron-right "></i>
                                    </div>
                                    <div :class="['cat', category.id]">
                                        <div
                                            class="navigation d-flex justify-content-between align-items-center"
                                        >
                                            <i
                                                class="fas fa-arrow-left"
                                                @click="
                                                    closeCategoryLinks($event)
                                                "
                                                :data-class="'.' + category.id"
                                            ></i>
                                            <router-link :to="{ name: 'shop' }"
                                                ><h4
                                                    @click="
                                                        addCatName(
                                                            category.name
                                                        )
                                                    "
                                                >
                                                    {{ category.name }}
                                                </h4></router-link
                                            >
                                            <i
                                                @click="closeMenu"
                                                class="fas fa-times fa-2x"
                                            ></i>
                                        </div>

                                        <ul>
                                            <template v-if="category.sorts">
                                                <template
                                                    v-for="sort in category.sorts"
                                                >
                                                    <li
                                                        v-for="product in sort.products"
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
                                                </template>
                                            </template>
                                            <li
                                                v-for="product in category.products"
                                                :key="product.id"
                                            >
                                                <router-link
                                                    :to="{
                                                        name: 'product-page',
                                                        params: {
                                                            id: product.id
                                                        }
                                                    }"
                                                    >{{
                                                        product.name
                                                    }}</router-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="blog-links suplinks">
                        <div
                            class="navigation d-flex justify-content-between align-items-center"
                        >
                            <i
                                class="fas fa-arrow-left"
                                @click="closeMenuSupLinks($event)"
                                data-class=".blog-links"
                            ></i>
                            <router-link to="/"><h4>shop</h4></router-link>
                            <i
                                @click="closeMenu"
                                class="fas fa-times fa-2x"
                            ></i>
                        </div>
                        <div class="ul-wrapper">
                            <ul>
                                <li>
                                    <div class="wrapper">
                                        <span>
                                            Blog one
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div class="wrapper">
                                        <span>
                                            Blog two
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div class="wrapper">
                                        <span>
                                            Blog three
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div class="wrapper">
                                        <span>
                                            Blog four
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    class="overlay overlay-menu"
                    style="height: 100vh"
                    @click.self="closeMenu"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import animate from "../../animation.js";
import { EventBus } from "../main";
import { mapState } from "vuex";
export default {
    name: "NavMobile",
    methods: {
        openMenu() {
            animate.openMenu();
        },
        closeMenu() {
            animate.closeMenu();
        },
        openCart() {
            animate.openCart();
        },
        openMenuSupLinks(e) {
            let elem = e.currentTarget.getAttribute("data-class");
            animate.openMenuSupLinks(elem);
        },
        closeMenuSupLinks(e) {
            let elem = e.currentTarget.getAttribute("data-class");
            animate.closeMenuSupLinks(elem);
        },
        openCategoryLinks(e) {
            let elem = e.currentTarget.getAttribute("data-class");
            animate.openCategoryLinks(elem);
        },
        closeCategoryLinks(e) {
            let elem = e.currentTarget.getAttribute("data-class");
            animate.closeCategoryLinks(elem);
        },
        addCatName(catName) {
            EventBus.$emit("addCatName", catName);
        }
    },
    computed: {
        ...mapState(["categories", "cart"])
    }
};
</script>

<style lang="scss" scoped>
//****************/
// mobile nav styles
//******************/
.nav-mobile {
    //****************/
    // start nav links
    //******************/
    background: white;
    position: fixed;
    padding: 0;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 4;
    .row {
        padding: 14px 0;
    }
    //   @@@@@@@@@@@@@@@@@@@@
    //  the aside animated links
    //  @@@@@@@@@@@@@@@@@@@@

    .links-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        background: white;
        max-height: 100vh;
        height: 100vh;
        width: 100%;
        max-width: 400px;
        overflow-y: auto;
        overflow-x: hidden;
        transform: translateX(-100%);
        .links-holder {
            padding: 70px 30px;
            .times {
                margin-bottom: 10px;
                i {
                    font-size: 25px;
                    cursor: pointer;
                }
            }
            ul {
                li {
                    margin: 0;
                    height: 60px;
                    display: block;
                    overflow: hidden;
                    & > .link {
                        transform: translateY(120px);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        @extend %vertical-center;
                        cursor: pointer;
                        h3 {
                            width: 100%;
                            a {
                                width: 100%;
                                display: inline-block;
                            }
                        }
                    }
                }
            }
            hr {
                height: 7px;
                background: #333;
                border-radius: 5px;
                margin: 20px 0;
                width: 45%;
                opacity: 0;
            }
            .contacts {
                // min-width: fit-content;
                a {
                    font-weight: 300;
                    color: #5f5f5f;
                }
            }
        }
        .suplinks {
            padding: 30px 40px;
            position: absolute;
            top: 0;
            right: 0%;
            width: 100%;
            height: 100%;
            background: white;
            transform: translateX(100%);
            .navigation {
                i {
                    cursor: pointer;
                }
            }
            ul {
                padding-top: 50px;
                li {
                    margin-bottom: 15px;
                    color: #666;
                    font-size: 17px;
                    letter-spacing: 0px;
                    .wrapper {
                        display: flex;
                        justify-content: space-between;
                        align-content: center;
                        cursor: pointer;
                    }
                    .cat {
                        padding: 30px 40px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: white;
                        transform: translateX(100%);
                    }
                }
            }
        }
    }
    //   @@@@@@@@@@@@@@@@@@@@
    //  the bars
    //  @@@@@@@@@@@@@@@@@@@@
    .bars {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 25px;
        width: fit-content;
        &:hover {
            & > div {
                span {
                    transform: translateX(120%);
                    &:last-of-type {
                        transform: translateX(200%);
                    }
                }
            }
        }
        & > div {
            width: 25px;
            margin-right: 20px;
            overflow: hidden;
            span {
                height: 2px;
                background: #333;
                display: block;
                margin: 3px 0;
                position: relative;
                &:last-of-type {
                    width: 50%;
                    &::after {
                        left: -200%;
                    }
                }
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -120%;
                    height: 100%;
                    width: 100%;
                    background: #333;
                }
                &.top-bar {
                    transition: transform 0.7s ease;
                }
                &.middle-bar {
                    transition: transform 0.9s ease;
                }
                &.bottom-bar {
                    transition: transform 0.5s ease-out;
                }
            }
        }
    }
    //****************/
    // start nav widgets
    //******************/
    .widgets {
        @extend %widgets;
        i {
            font-size: 17px;
        }
    }
}
</style>
