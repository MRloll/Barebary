<template>
    <div class="showcase">
        <div class="custom-container">
            <div class="row">
                <div
                    v-for="category in categories"
                    :key="category.id"
                    class="col-lg-3 col-6"
                    @click="addCatName(category.name)"
                >
                    <router-link
                        :to="{
                            name: 'shop'
                        }"
                    >
                        <div class="cat">
                            <div class="img">
                                <img
                                    :src="
                                        require(`@/assets/images/${category.cover}`)
                                    "
                                    :alt="category.name"
                                    class="img-fluid"
                                />
                            </div>
                            <div class="desc">
                                <span
                                    >{{
                                        category.sorts
                                            ? category.sorts[0].products
                                                  .length +
                                              category.sorts[1].products.length
                                            : category.products.length
                                    }}
                                    products</span
                                >
                                <div class="desc-name">
                                    <h2>{{ category.name }}</h2>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { EventBus } from "../main";

export default {
    methods: {
        addCatName(catName) {
            EventBus.$emit("addCatName", catName);
        }
    },
    computed: {
        ...mapState(["categories"])
    }
};
</script>

<style lang="scss" scoped>
.showcase {
    div[class^="col-"] {
        padding: 0;
    }
    .cat {
        position: relative;
        .img {
            overflow: hidden;
            img {
                transition: transform 2s cubic-bezier(0, 0, 0.44, 1.18);
            }
        }
        .desc {
            position: absolute;
            bottom: 30px;
            left: 20px;
            .desc-name {
                h2 {
                    position: relative;
                    &::after {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        content: "";
                        width: 0%;
                        height: 1px;
                        background: #000;
                        transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                }
            }
        }
        &:hover {
            img {
                transform: scale(1.1);
            }
            .desc-name h2::after {
                width: 100%;
            }
        }
    }
    @media #{$maxMobile} {
        .cat .desc {
            position: initial;
            margin-bottom: 20px;
            span {
                font-size: 17px;
                font-weight: 200;
            }
            .desc-name {
                h2 {
                    font-size: 25px;
                    &::after {
                        content: none;
                    }
                }
            }
        }
    }
}
</style>
