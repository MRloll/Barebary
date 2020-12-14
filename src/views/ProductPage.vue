<template>
    <div class="product-page">
        <div class="custom-container">
            <main class="product-show" v-if="product[0]">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <div class="slider">
                            <flickity
                                ref="flickity"
                                :options="flickityOptions"
                                class="carousel-main"
                            >
                                <div class="carousel-cell">
                                    <img
                                        :src="
                                            require(`@/assets/images/${product[0].img_2}`)
                                        "
                                        :alt="product[0].name"
                                    />
                                </div>
                                <div class="carousel-cell">
                                    <img
                                        :src="
                                            require(`@/assets/images/${product[0].img_1}`)
                                        "
                                        :alt="product[0].name"
                                    />
                                </div>
                            </flickity>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="description">
                            <h1 v-html="splitProductName(product[0].name)"></h1>
                            <star-rating
                                :read-only="true"
                                :rating="product[0].rating"
                                :star-size="20"
                                :increment="0.1"
                                :fixed-points="2"
                                :show-rating="false"
                                v-if="product[0].rating"
                                style="margin-bottom: 10px"
                            ></star-rating>
                            <span class="info">12 sold in last 4 hours</span>
                            <p class="text">
                                {{ product[0].description }}
                            </p>
                            <h3 class="price">
                                <span>$</span>{{ product[0].price }}
                            </h3>
                            <div
                                class="add-to-cart d-flex justify-content-around align-items-center"
                            >
                                <base-quantity-of-one-product
                                    @addOneProduct="addOneProduct()"
                                    @removeOneProduct="removeOneProduct()"
                                >
                                    {{ product[0].quantity }}
                                </base-quantity-of-one-product>
                                <button @click="addToCart()">
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="product-tabs mt-5">
                <ul class="text-center mb-5">
                    <li :class="[currentTab === 'description' ? 'active' : '']">
                        <a href="#" @click.prevent="currentTab = 'description'"
                            >Description</a
                        >
                    </li>
                    <li :class="[currentTab === 'reviews' ? 'active' : '']">
                        <a href="#" @click.prevent="currentTab = 'reviews'"
                            >Reviews</a
                        >
                    </li>
                    <li :class="[currentTab === 'shipping' ? 'active' : '']">
                        <a href="#" @click.prevent="currentTab = 'shipping'"
                            >Shipping</a
                        >
                    </li>
                </ul>
                <div class="tabs-wrapper pb-5">
                    <transition
                        name="fade"
                        appear
                        mode="out-in"
                        :duration="240"
                    >
                        <product-description
                            v-if="currentTab === 'description'"
                            :product="product"
                        >
                        </product-description>
                        <product-reviews
                            v-if="currentTab === 'reviews'"
                            :product="product"
                        >
                        </product-reviews>
                        <product-shipping
                            v-if="currentTab === 'shipping'"
                            :product="product"
                        >
                        </product-shipping>
                    </transition>
                </div>
            </div>
        </div>
        <product-preview />
        <recent-products />
    </div>
</template>

<script>
import Flickity from "vue-flickity";
import imagesLoaded from "imagesloaded";
import StarRating from "vue-star-rating";

import ProductDescription from "@/components/ProductDescription.vue";
import ProductReviews from "@/components/ProductReviews.vue";
import ProductShipping from "@/components/ProductShipping.vue";
import RecentProducts from "@/components/RecentProducts.vue";
import ProductPreview from "@/components/ProductPreview.vue";

import { mapGetters } from "vuex";
export default {
    components: {
        StarRating,
        Flickity,
        ProductDescription,
        ProductReviews,
        ProductShipping,
        RecentProducts,
        ProductPreview
    },
    data() {
        return {
            flickityOptions: {
                wrapAround: true,
                loop: true,
                on: {
                    ready: () => {
                        imagesLoaded(this.$refs.flickity, this.loadComplete);
                    }
                }
            },
            currentTab: "description"
        };
    },
    computed: {
        ...mapGetters(["getAllProducts"]),
        product() {
            return this.getAllProducts.filter(item => {
                return item.id == this.$route.params.id;
            });
        }
    },
    methods: {
        splitProductName(name) {
            return name.replace(/ /g, "<br />");
        },
        loadComplete() {
            if (this.$refs.flickity) {
                this.$refs.flickity.reloadCells();
            }
        },
        addToCart() {
            this.$store.dispatch("addToCart", this.product[0]);
        },
        addOneProduct() {
            this.product[0].quantity++;
        },
        removeOneProduct() {
            if (this.product[0].quantity > 1) {
                this.product[0].quantity--;
            } else {
                this.product[0].quantity = 1;
            }
        }
    }
};
</script>

<style lang="scss">
.product-page {
    background: white;

    main.product-show {
        .slider {
            position: relative;
            .carousel-cell {
                width: 100%;
                display: flex;
                justify-content: center;
                img {
                    width: 100%;
                    max-width: 648px;
                }
            }
            button.flickity-button {
                opacity: 0;
            }
            & > div {
                .flickity-button {
                    transition: 0.5s all ease;
                    opacity: 0;
                    background: transparent;
                    &.previous {
                        left: 20px;
                    }
                    &.next {
                        right: 20px;
                    }
                    svg {
                        width: 40px;
                        height: 40px;
                        path {
                            d: path(
                                "M 10,50 L 60,100 L 60,95 L 15,50  L 60,5 L 60,0 Z"
                            );
                        }
                    }
                }
            }
            & ol {
                bottom: 15px;
            }
            &:hover .flickity-button {
                opacity: 1;
                &.previous {
                    left: 10px;
                }
                &.next {
                    right: 10px;
                }
            }
        }
        .description {
            h1 {
                font-size: 56px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            span.info {
                color: #da4343;
                text-transform: uppercase;
                display: inline-block;
                margin-bottom: 10px;
            }
            .text {
                font-size: 20px;
                line-height: 1.8;
                color: #5a5a5a;
                max-width: 450px;
            }
            h3.price {
                margin: 20px 0;
                color: #da4343;
                font-size: 35px;
                span {
                    font-size: 25px;
                }
            }
            .add-to-cart {
                button {
                    min-width: 150px;
                    width: 300px;
                    border: 1px solid black;
                    padding: 15px 16px;
                    position: relative;
                    @include baseButton;
                    span {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
    .product-tabs {
        ul {
            li {
                &.active {
                    a {
                        background-position: 0%;
                    }
                }
                display: inline-block;
                font-weight: bold;
                padding: 0 0.625rem;
                margin: 5px 0;
                a {
                    font-size: 36px;
                    opacity: 1;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-image: linear-gradient(
                        to right,
                        #000,
                        #000 50%,
                        rgba(0, 0, 0, 0.3) 50%
                    );
                    background-size: 200% 100%;
                    background-position: 100%;
                    transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
                    &:hover {
                        background-position: 0%;
                    }
                }
            }
        }
    }
    @media #{$maxMobile} {
        .product-tabs {
            ul {
                li {
                    display: block;
                    a {
                        font-size: 24px;
                    }
                }
            }
        }
    }
}
</style>
