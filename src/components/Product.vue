<template>
    <div class="product">
        <div class="img">
            <img
                class="img-fluid img-1"
                :src="require(`@/assets/images/${product.img_1}`)"
                alt="bottle"
            />
            <img
                class="img-fluid img-2"
                :src="require(`@/assets/images/${product.img_2}`)"
                alt="bottle"
            />
        </div>
        <div class="d-none d-lg-block">
            <div class="desc">
                <star-rating
                    :read-only="true"
                    :rating="product.rating"
                    :star-size="15"
                    :increment="0.1"
                    :fixed-points="2"
                    :show-rating="false"
                    v-if="product.rating"
                    style="margin-bottom: 10px"
                ></star-rating>
                <div class=" d-flex justify-content-between align-items-end">
                    <h3 v-html="splitProductName(product.name)"></h3>
                    <span>{{ product.price }}$</span>
                </div>
            </div>
            <div
                class="buttons d-flex justify-content-center align-items-center"
            >
                <button @click="openPreview(product)">
                    <i class="far fa-eye"></i>
                </button>
                <button class="base-button"><span>Add To cart</span></button>
            </div>
        </div>
        <div class="d-lg-none d-block">
            <div class="buttons buttons-small">
                <button @click="openPreview(product)">
                    <i class="far fa-eye"></i>
                </button>
                <button class="base-button">
                    <span><i class="fas fa-cart-plus"></i></span>
                </button>
            </div>
            <div class="desc-small">
                <star-rating
                    :read-only="true"
                    :rating="product.rating"
                    :star-size="15"
                    :increment="0.1"
                    :fixed-points="2"
                    :show-rating="false"
                    v-if="product.rating"
                    style="margin-bottom: 10px"
                ></star-rating>

                <div class=" d-sm-flex justify-content-between align-items-end">
                    <h3
                        class="d-none d-sm-block"
                        v-html="splitProductName(product.name)"
                    ></h3>
                    <h3 class="d-block d-sm-none" v-html="product.name"></h3>
                    <span>{{ product.price }}$</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { EventBus } from "../main";
export default {
    methods: {
        splitProductName(name) {
            return name.replace(" ", "<br />");
        },
        openPreview(product) {
            EventBus.$emit("openPreview", product);
        }
    },
    props: ["product"],
    components: {
        StarRating
    }
};
</script>

<style lang="scss" scoped>
//   @@@@@@@@@@@@@@@@@@@@
//  start product
//  @@@@@@@@@@@@@@@@@@@@
.product {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    cursor: pointer;
    //   @@@@@@@@@@@@@@@@@@@@
    //  product imgs
    //  @@@@@@@@@@@@@@@@@@@@=
    .img {
        position: relative;
        img {
            width: 100%;
            @extend %transition;
            transition-duration: 1.8s;
            &.img-2 {
                position: absolute;
                right: 0;
                top: 0;
                opacity: 0;
            }
        }
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //      description
    //  @@@@@@@@@@@@@@@@@@@@
    .desc,
    .buttons {
        position: absolute;
        width: 100%;
        left: 0;
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //      small screens desc
    //  @@@@@@@@@@@@@@@@@@@@
    .desc,
    .desc-small {
        bottom: 30px;
        padding: 0 20px 0 0;
        @extend %transition;
        h3 {
            position: relative;
            z-index: 3;
            font-weight: bold;
            h3:first-child {
                color: red;
            }
            &::after {
                position: absolute;
                z-index: 3;
                content: "";
                left: 0;
                bottom: -3px;
                width: 0%;
                height: 1px;
                background: black;
                @extend %transition;
            }
        }
        span {
            font-weight: bold;
            background: #e4e4e4;
            padding: 1px 4px;
        }
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //      button
    //  @@@@@@@@@@@@@@@@@@@@

    .buttons {
        bottom: -60px;
        @extend %transition;
        opacity: 0;
        button {
            &:first-of-type {
                border-right: none;
                &:hover {
                    background: black;
                    color: white;
                }
            }
            @extend %transition;
            border: 1px solid black;
            padding: 8px 13px;
            position: relative;
            z-index: 3;
            &.base-button {
                @include baseButton(
                    $afterTransition: transform 0.5s
                        cubic-bezier(0.59, 0.03, 0.2, 1)
                );
                &:hover {
                    border-color: black;
                }
            }
        }
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //      small screens buttons
    //  @@@@@@@@@@@@@@@@@@@@
    .buttons-small {
        width: 100%;
        position: static;
        opacity: 1;
        margin-bottom: 20px;
        button {
            background: white;
            border-width: 1px 0;
            border-color: rgba($color: black, $alpha: 0.2);
        }
        button:first-of-type {
            width: 35%;
        }
        button:last-of-type {
            width: 65%;
        }
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //      hovering
    //  @@@@@@@@@@@@@@@@@@@@
    &:hover {
        .img {
            img.img-2 {
                opacity: 1;
                transform: scale(1.1);
            }
        }
        .desc {
            bottom: 60px;
            h3::after {
                width: 100%;
            }
        }
        .buttons {
            bottom: 7px;
            opacity: 1;
        }
    }
    //  @@@@@@@@@@@@@@@@@@@@
    //      Media query
    //  @@@@@@@@@@@@@@@@@@@@
    @media #{$minMobile} {
        h3 {
            font-size: calc(0.78125vw + 14px);
        }
    }
    @media #{$maxMobile} {
        margin-bottom: 40px;
        h3 {
            font-size: 18px;
            font-weight: 400 !important;
        }
    }
}
</style>
