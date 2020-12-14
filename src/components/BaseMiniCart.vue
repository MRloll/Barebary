<template>
    <div class="mini-cart">
        <div class="wrapper">
            <div class=" cart-text text-center">
                <div class="times text-right">
                    <a href="#" @click.prevent="closeCart"
                        ><i class="fas fa-times fa-2x"></i
                    ></a>
                </div>
                <!-- ****************************************** -->
                <!-- Here is on item in the cart  -->
                <!-- ****************************************** -->
                <div
                    class="item d-flex justify-content-between align-items-center"
                    v-for="(item, index) in cart"
                    :key="index"
                >
                    <i
                        @click="removeWholeItemFromTheCart(item)"
                        class="remove-item fas fa-times fa-2x"
                    ></i>
                    <div class="img rounded-circle overflow-hidden">
                        <img
                            :src="require(`@/assets/images/${item.img_2}`)"
                            alt="img"
                            class="rounded img-fluid"
                        />
                    </div>
                    <div class="name text-center">
                        <router-link
                            :to="{
                                name: 'product-page',
                                params: {
                                    id: item.id
                                }
                            }"
                            ><h4 class="mb-3">{{ item.name }}</h4>
                        </router-link>
                        <base-quantity-of-one-product
                            @addOneProduct="addOneProduct(item)"
                            @removeOneProduct="removeOneProduct(item)"
                        >
                            {{ item.quantity }}
                        </base-quantity-of-one-product>
                    </div>
                    <div class="price">
                        <strong> ${{ item.price * item.quantity }} </strong>
                    </div>
                </div>
                <template v-if="cart.length === 0">
                    <div class="empty">
                        <div>no products in the cart.</div>
                    </div>
                    <div class="button" @click="closeCart()">
                        <router-link to="/shop">
                            return to shop
                        </router-link>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import animate from "../../animation.js";
import { mapState } from "vuex";

export default {
    methods: {
        closeCart() {
            animate.closeCart();
        },
        addOneProduct(e) {
            e.quantity++;
        },
        removeOneProduct(e) {
            if (e.quantity > 1) {
                e.quantity--;
            } else {
                e.quantity = 1;
            }
        },
        removeWholeItemFromTheCart(item) {
            item.quantity = 1;
            this.$store.dispatch("removeFromCart", item.id);
        }
    },
    computed: {
        ...mapState(["cart"])
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
    max-width: 0px;
    height: 100vh;
    padding: 0;
    background: white;
    z-index: 10;
    .times {
        padding: 50px 0px 50px;
    }
    .wrapper {
        width: 90%;
        margin: auto;
        height: 100%;
        min-height: 500px;
        display: flex;
        justify-content: center;
        .cart-text {
            opacity: 0;
            display: none;
            width: 90%;
            .item {
                position: relative;
                &:hover {
                    .remove-item {
                        opacity: 1;
                    }
                }
                .img {
                    img {
                        width: 100px;
                        height: 100px;
                    }
                }
                .remove-item {
                    position: absolute;
                    top: -11px;
                    left: 21px;
                    font-size: 20px;
                    opacity: 0;
                    cursor: pointer;
                    transition: 0.4s opacity ease;
                }
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
}
</style>
