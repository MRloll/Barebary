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
                                    <span class="cart-count">0</span>
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- @@@@@@@@@@@@@@@@@@@@ -->
                <!-- the aside animated links  -->
                <!-- @@@@@@@@@@@@@@@@@@@@ -->
                <div class="links">
                    <div class="times text-left">
                        <span @click="closeMenu"
                            ><i class="fas fa-times fa-2x"></i
                        ></span>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <h3>
                                    <router-link to="/" class="">
                                        home
                                    </router-link>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    the shop
                                </h3>
                                <i class="fas fa-chevron-right "></i>
                            </div>
                        </li>
                        <li>
                            <div>
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
export default {
    methods: {
        openMenu() {
            animate.openMenu();
        },
        closeMenu() {
            animate.closeMenu();
        },
        openCart() {
            animate.openCart();
        }
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

    .links {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        padding: 70px 30px;
        background: white;
        max-height: 100vh;
        height: 100vh;
        width: 100%;
        max-width: 400px;
        overflow-y: auto;
        overflow-x: hidden;
        transform: translateX(-100%);
        .times {
            margin-bottom: 10px;
            i {
                cursor: pointer;
                font-size: 25px;
            }
        }
        ul {
            li {
                margin: 0;
                height: 60px;
                cursor: pointer;
                display: block;
                overflow: hidden;
                & > div {
                    transform: translateY(120px);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    @extend %vertical-center;
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
