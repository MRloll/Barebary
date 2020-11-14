<template>
    <transition name="fade">
        <div
            v-if="product"
            class="preview d-flex justify-content-center align-items-center"
        >
            <div class="wrapper" @click.self="closePreview">
                <div class="preview-box d-flex">
                    <i @click="closePreview" class="fa fa-times"></i>

                    <div class="product-slider">
                        <flickity ref="flickity" :options="flickityOptions">
                            <div
                                class="carousel-cell d-flex justify-content-center align-items-center"
                            >
                                <img
                                    :src="
                                        require(`../assets/images/${product.img_1}`)
                                    "
                                    alt="product.name"
                                />
                            </div>
                            <div
                                class="carousel-cell d-flex justify-content-center align-items-center"
                            >
                                <img
                                    :src="
                                        require(`../assets/images/${product.img_2}`)
                                    "
                                    alt="product.name"
                                />
                            </div>
                        </flickity>
                    </div>
                    <div class="product-details">
                        <h1>{{ product.name }}</h1>
                        <div class="rating">
                            <star-rating
                                :read-only="true"
                                :rating="product.rating"
                                :star-size="15"
                                :increment="0.1"
                                :fixed-points="2"
                                :show-rating="false"
                                v-if="product.rating"
                            ></star-rating>
                        </div>
                        <span class="price"> ${{ product.price }} </span>
                        <p class="description lead">
                            {{ product.description }}
                        </p>
                        <div class="go-to-product">
                            <router-link
                                :to="{
                                    name: 'product-page',
                                    params: { name: product.name }
                                }"
                            >
                                <i class="fas fa-arrow-right"></i> Go to Product
                            </router-link>
                        </div>
                        <button><span>ADD TO CART</span></button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import StarRating from "vue-star-rating";
import Flickity from "vue-flickity";
import { EventBus } from "../main";

export default {
    components: {
        StarRating,
        Flickity
    },
    data() {
        return {
            flickityOptions: {
                wrapAround: true,
                imagesLoaded: true,
                percentPosition: false,
                setGallerySize: false
            },
            product: null
        };
    },
    methods: {
        closePreview() {
            this.product = null;
        }
    },
    created() {
        EventBus.$on("openPreview", product => {
            this.product = product;
        });
    },
    updated() {
        let body = document.querySelector("body");
        if (this.product) {
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "auto";
        }
    }
};
</script>

<style lang="scss" scoped>
//   @@@@@@@@@@@@@@@@@@@@
//  start Preview
//  @@@@@@@@@@@@@@@@@@@@
.preview {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    // backdrop-filter: blur(10px);
    //   @@@@@@@@@@@@@@@@@@@@
    //  start wrapper
    //  @@@@@@@@@@@@@@@@@@@@
    .wrapper {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: url(../assets/images/cross.png), zoom-out;
        //   @@@@@@@@@@@@@@@@@@@@
        //  start Preview box
        //  @@@@@@@@@@@@@@@@@@@@\
        .preview-box {
            cursor: auto;
            width: 85%;
            background: white;
            box-shadow: 0px 0px 6px 0px;
            position: relative;
            .fa-times {
                position: absolute;
                top: 17px;
                right: 38px;
                z-index: 10;
                font-size: 25px;
                cursor: pointer;
            }
            & > div {
                width: 50%;
                padding: 70px 15px;
                max-height: 60vh;
            }
            //   @@@@@@@@@@@@@@@@@@@@
            //  start product slider
            //  @@@@@@@@@@@@@@@@@@@@
            .product-slider {
                & > div {
                    height: 100%;
                }
                .carousel-cell {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    transition: ease opacity 1s;
                    &:not(.is-selected) {
                        opacity: 0;
                    }
                }
            }
            //   @@@@@@@@@@@@@@@@@@@@
            //  start product Details
            //  @@@@@@@@@@@@@@@@@@@@
            .product-details {
                overflow-y: auto;
                overflow-x: hidden;
                h1 {
                    font-size: 55px;
                    font-weight: bold;
                }
                .price {
                    font-size: 30px;
                    font-weight: bold;
                    margin: 15px 0;
                    display: inline-block;
                }
                .description {
                    color: #3a3a3a;
                }
                .go-to-product {
                    border: 1px solid #e2dbdb;
                    border-left: none;
                    border-right: none;
                    margin-bottom: 20px;
                    a {
                        display: block;
                        padding: 20px 0;
                        font-size: 20px;
                        transition: transform 1s ease;
                        i {
                            margin-right: 5px;
                        }
                    }
                    &:hover {
                        a {
                            transform: translateX(20px);
                        }
                    }
                }
                button {
                    position: relative;
                    border: 2px solid black;
                    padding: 20px;
                    @include baseButton(black, white);
                }
            }
            //   @@@@@@@@@@@@@@@@@@@@
            //  start Media quiries
            //  @@@@@@@@@@@@@@@@@@@@\
            @media #{$maxSmall} {
                width: 100%;
                box-shadow: none;
                .fa-times {
                    position: fixed;
                }
            }
            @media #{$maxMobile} {
                height: 100%;
                flex-wrap: wrap;
                overflow-y: auto;
                & > div {
                    width: 100%;
                    max-height: unset;
                }
                .product-slider {
                    height: 500px;
                }
                .product-details {
                    overflow-y: unset;
                    h1 {
                        font-size: 35px;
                    }
                }
            }
            @media #{$minMedium} {
                width: 80%;
            }
            @media #{$minLarge} {
                width: 60%;
            }
        }
    }
}
</style>
