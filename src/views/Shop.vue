<template>
    <div class="shop">
        <div class="shop-bg">
            <div class="text">
                <h1>Shop</h1>
                <div class="categories">
                    <div>
                        <router-link
                            to="/"
                            v-for="category in categories"
                            :key="category.id"
                            class="d-block d-lg-inline mb-2"
                        >
                            <img
                                :src="
                                    require(`@/assets/images/${category.icon}`)
                                "
                                :alt="category.name"
                            />
                            <span> {{ category.name }} </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="custom-container">
            <div class="shop-products">
                <aside></aside>
                <div class="products">
                    <div class="filters">
                        <select name="SortBy"
                            ><option value="title-ascending" selected="selected"
                                >Sort by position</option
                            ><option value="manual">Featured</option
                            ><option value="title-ascending"
                                >Alphabetically, A-Z</option
                            ><option value="title-descending"
                                >Alphabetically, Z-A</option
                            ><option value="price-ascending"
                                >Price, low to high</option
                            ><option value="price-descending"
                                >Price, high to low</option
                            ><option value="created-descending"
                                >Date, new to old</option
                            ><option value="created-ascending"
                                >Date, old to new</option
                            ></select
                        >
                        <button><span> Filters </span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["categories"])
    }
};
</script>

<style lang="scss" scoped>
.shop {
    background-color: white;
    .shop-bg {
        background: url(../assets/images/shop_bg.jpg) no-repeat center center;
        background-size: cover;
        text-align: center;
        padding: 140px;

        .text {
            transition: all 1s ease;
            .navigation {
                font-size: 25px;
                color: #8c8c8c;
            }
            h1 {
                margin: 0px 0 30px 0;
                font-size: 80px;
                font-weight: bold;
            }
            .categories {
                a {
                    font-size: 20px;
                    margin-right: 15px;
                }
                img {
                    max-height: 30px;
                    margin-right: 10px;
                }
                span {
                    font-weight: 500;
                    display: inline-block;
                    line-height: 1.2;
                    background-image: linear-gradient(
                            to top,
                            #000 0px,
                            #000 0px
                        ),
                        linear-gradient(
                            to top,
                            rgba(0, 0, 0, 0.1) 0px,
                            rgba(0, 0, 0, 0.1) 0px
                        );
                    background-position: right bottom, right bottom;
                    background-repeat: no-repeat, no-repeat;
                    background-size: 0 1px, 100% 1px;
                    transition: none 300ms ease-in-out;
                    transition-property: background-size, color;
                    &:hover {
                        background-position: left bottom, left bottom;
                        background-size: 100% 1px, 100% 1px;
                    }
                }
            }
        }
    }
    .shop-products {
        display: flex;
        aside {
            background: red;
            height: 300px;
            width: 300px;
        }
        .products {
            width: 100%;
            .filters {
                float: right;
                button {
                    position: relative;
                    height: 50px;
                    width: 100px;
                    font-size: 19px;
                    border: 2px solid #000;
                    @include baseButton();
                }
                select {
                    font-size: 16px;
                    outline: none;
                    height: 50px;
                    min-width: 50px;
                    padding: 7px 30px;
                    border: 2px solid #000;
                    border-right: none;
                }
            }
        }
    }
}
</style>
