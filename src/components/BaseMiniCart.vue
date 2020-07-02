<template>
    <div class="mini-cart">
        <div class="wrapper">
            <div class=" cart-text text-center">
                <div class="times text-right">
                    <a href="#" @click.prevent="closeCart"
                        ><i class="fas fa-times fa-2x"></i
                    ></a>
                </div>
                <div class="empty">
                    <div>no products in the cart.</div>
                </div>
                <div class="button">
                    <router-link to="">
                        return to shop
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import animate from "../../animation.js";

export default {
    methods: {
        closeCart() {
            animate.closeCart();
        }
    }
};
</script>

<style lang="scss">
//****************/
// start mini cart
//******************/
.mini-cart {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 0;
    height: 100vh;
    padding: 0;
    background: white;
    z-index: 10;
    .cart-text {
        opacity: 0;
        display: none;
    }
    .wrapper {
        height: 100%;
        min-height: 500px;
        display: flex;
        justify-content: center;
        div > div {
            margin-bottom: 40px;
        }
        .empty {
            font-size: 30px;
        }
        .button {
            a {
                display: inline-block;
                width: 150px;
                padding: 20px 10px;
                border: 1px solid #dcdada;
                text-align: center;
                transition: color 0.8s ease;
                &:hover {
                    color: #b3aeae;
                }
            }
        }
    }
}
</style>
