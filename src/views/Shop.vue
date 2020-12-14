<template>
    <div class="shop">
        <product-preview />
        <div class="shop-bg">
            <div class="text">
                <h1>Shop</h1>
                <div class="categories">
                    <div
                        v-for="category in categories"
                        :key="category.id"
                        class="d-inline"
                    >
                        <p class="d-block d-lg-inline mb-2">
                            <img
                                :src="
                                    require(`@/assets/images/${category.icon}`)
                                "
                                :alt="category.name"
                            />
                            <input
                                class="d-none"
                                type="radio"
                                :value="category.name"
                                v-model="catName"
                                :id="category.name"
                            />
                            <label
                                :for="category.name"
                                @click="clearSortNameWhenPressedOnCat()"
                                >{{ category.name }}
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="custom-container">
            <div class="shop-products">
                <aside class="d-lg-block d-none">
                    <div class="collections">
                        <!-- ****************************************** -->
                        <!-- Here are the collection links in the Aside -->
                        <!-- ****************************************** -->
                        <ul>
                            <li @click="clearCatAndSortFilter()">
                                All Products
                            </li>
                            <li
                                v-for="category in categories"
                                :key="category.id"
                            >
                                <input
                                    type="radio"
                                    :value="category.name"
                                    v-model="catName"
                                    :id="category.name"
                                />
                                <label
                                    :for="category.name"
                                    @click="clearSortNameWhenPressedOnCat()"
                                    >{{ category.name }}</label
                                >
                                <span>
                                    {{
                                        category.sorts
                                            ? category.sorts[0].products
                                                  .length +
                                              category.sorts[1].products.length
                                            : category.products.length
                                    }}
                                </span>
                                <!-- ****************************************** -->
                                <!-- Here are the sublinks (sorts) -->
                                <!-- ****************************************** -->
                                <ul v-if="category.sorts">
                                    <li
                                        v-for="sort in category.sorts"
                                        :key="sort.id"
                                        class="sort"
                                    >
                                        <input
                                            type="radio"
                                            :value="sort.name"
                                            v-model="sortName"
                                            :id="sort.name"
                                        />
                                        <label
                                            :for="sort.name"
                                            @click="
                                                putCatNameWhenPressedOnSorts(
                                                    sort
                                                )
                                            "
                                            >{{ sort.name }}</label
                                        >
                                        <span>{{ sort.products.length }}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- ****************************************** -->
                    <!-- Here are the price filters -->
                    <!-- ****************************************** -->
                    <div class="price-filters">
                        <h3>Filter by price</h3>
                        <div>
                            <input
                                @click="getDataMaxValue($event)"
                                type="radio"
                                v-model="price"
                                value="99"
                                id="filter_by_price_below-100"
                            />
                            <p class="label-wrapper">
                                <label for="filter_by_price_below-100"
                                    >below $100
                                </label>
                                <i
                                    @click="clearPriceFilter()"
                                    class="fa fa-times"
                                ></i>
                            </p>
                        </div>
                        <div>
                            <input
                                @click="getDataMaxValue($event)"
                                type="radio"
                                v-model="price"
                                value="100"
                                data-max="500"
                                id="filter_by_price_100-500"
                            />
                            <p class="label-wrapper">
                                <label for="filter_by_price_100-500"
                                    >$100 - $500
                                </label>
                                <i
                                    @click="clearPriceFilter()"
                                    class="fa fa-times"
                                ></i>
                            </p>
                        </div>
                        <div>
                            <input
                                @click="getDataMaxValue($event)"
                                type="radio"
                                v-model="price"
                                value="500"
                                data-max="1000"
                                id="filter_by_price_500-1000"
                            />
                            <p class="label-wrapper">
                                <label for="filter_by_price_500-1000"
                                    >$500 - $1000
                                </label>
                                <i
                                    @click="clearPriceFilter()"
                                    class="fa fa-times"
                                ></i>
                            </p>
                        </div>
                        <div>
                            <input
                                @click="getDataMaxValue($event)"
                                type="radio"
                                v-model="price"
                                value="1000"
                                data-max="1500"
                                id="filter_by_price_1000-1500"
                            />
                            <p class="label-wrapper">
                                <label for="filter_by_price_1000-1500"
                                    >$1000 - $1500
                                </label>
                                <i
                                    @click="clearPriceFilter()"
                                    class="fa fa-times"
                                ></i>
                            </p>
                        </div>
                        <div>
                            <input
                                @click="getDataMaxValue($event)"
                                type="radio"
                                v-model="price"
                                value="1500"
                                data-min="1500"
                                id="filter_by_price_1500"
                            />
                            <p class="label-wrapper">
                                <label for="filter_by_price_1500"
                                    >above $1500
                                </label>
                                <i
                                    @click="clearPriceFilter()"
                                    class="fa fa-times"
                                ></i>
                            </p>
                        </div>
                    </div>
                </aside>
                <div class="products">
                    <div class="filters-wrapper justify-content-between">
                        <!-- ****************************************** -->
                        <!-- Here is the appllied filters bar  -->
                        <!-- ****************************************** -->
                        <div>
                            <div
                                class="applied-filters"
                                v-if="
                                    this.catName.length > 1 ||
                                        this.price.length > 1
                                "
                            >
                                <span
                                    class="choosed-cat"
                                    v-if="this.catName.length > 1"
                                >
                                    <i
                                        @click="clearCatAndSortFilter()"
                                        class="fa fa-times"
                                    ></i>
                                    {{
                                        this.sortName.length > 1
                                            ? this.catName +
                                              " - " +
                                              this.sortName
                                            : this.catName
                                    }}
                                </span>
                                <span
                                    class="separator"
                                    v-if="
                                        this.price.length > 1 &&
                                            this.catName.length > 1
                                    "
                                >
                                    |
                                </span>
                                <span
                                    class="choosed-price"
                                    v-if="this.price.length > 1"
                                >
                                    <i
                                        @click="clearPriceFilter()"
                                        class="fa fa-times"
                                    ></i>

                                    <template v-if="this.dataMinValue">
                                        {{
                                            this.dataMinValue
                                                ? "Above $" + this.dataMinValue
                                                : ""
                                        }}
                                    </template>
                                    <template v-if="!this.dataMinValue">
                                        {{
                                            this.dataMaxValue
                                                ? "$" +
                                                  this.price +
                                                  " - " +
                                                  "$" +
                                                  this.dataMaxValue
                                                : "Below $100"
                                        }}
                                    </template>
                                </span>
                                <hr />
                            </div>
                        </div>
                        <!-- ****************************************** -->
                        <!-- Here are the alphabetical filters -->
                        <!-- ****************************************** -->
                        <div class="position-filters">
                            <select v-model="sortWay"
                                ><option value="default">By position</option
                                ><option value="title-ascending"
                                    >Alphabetically, A-Z</option
                                ><option value="title-descending"
                                    >Alphabetically, Z-A</option
                                ><option value="price-ascending"
                                    >Price, low to high</option
                                ><option value="price-descending"
                                    >Price, high to low</option
                                ></select
                            >
                            <button @click.prevent="isShow = !isShow">
                                <span> Filters </span>
                                <i
                                    :class="[
                                        isShow ? 'fas fa-minus' : 'fas fa-plus'
                                    ]"
                                ></i>
                            </button>
                        </div>
                    </div>

                    <!-- ****************************************** -->
                    <!-- Here are the small screens filters   -->
                    <!-- ****************************************** -->
                    <transition name="slide">
                        <div
                            class="row small-screens-filters d-flex align-items-baseline"
                            v-if="isShow"
                        >
                            <div class="col-6 text-center">
                                <div class="collections">
                                    <!-- ****************************************** -->
                                    <!-- Here are the collection links in the Aside -->
                                    <!-- ****************************************** -->
                                    <ul>
                                        <li @click="clearCatAndSortFilter()">
                                            All Products
                                        </li>
                                        <li
                                            v-for="category in categories"
                                            :key="category.id"
                                        >
                                            <input
                                                type="radio"
                                                :value="category.name"
                                                v-model="catName"
                                                :id="category.name"
                                            />
                                            <label
                                                :for="category.name"
                                                @click="
                                                    clearSortNameWhenPressedOnCat()
                                                "
                                                >{{ category.name }}</label
                                            >
                                            <span>
                                                {{
                                                    category.sorts
                                                        ? category.sorts[0]
                                                              .products.length +
                                                          category.sorts[1]
                                                              .products.length
                                                        : category.products
                                                              .length
                                                }}
                                            </span>
                                            <!-- ****************************************** -->
                                            <!-- Here are the sublinks (sorts) -->
                                            <!-- ****************************************** -->
                                            <ul v-if="category.sorts">
                                                <li
                                                    v-for="sort in category.sorts"
                                                    :key="sort.id"
                                                    class="sort"
                                                >
                                                    <input
                                                        type="radio"
                                                        :value="sort.name"
                                                        v-model="sortName"
                                                        :id="sort.name"
                                                    />
                                                    <label
                                                        :for="sort.name"
                                                        @click="
                                                            putCatNameWhenPressedOnSorts(
                                                                sort
                                                            )
                                                        "
                                                        >{{ sort.name }}</label
                                                    >
                                                    <span>{{
                                                        sort.products.length
                                                    }}</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 text-md-center">
                                <div class="price-filters text-center">
                                    <h3>Filter by price</h3>
                                    <div>
                                        <input
                                            @click="getDataMaxValue($event)"
                                            type="radio"
                                            v-model="price"
                                            value="99"
                                            id="filter_by_price_below-100"
                                        />
                                        <p class="label-wrapper">
                                            <label
                                                for="filter_by_price_below-100"
                                                >below $100
                                            </label>
                                            <i
                                                @click="clearPriceFilter()"
                                                class="fa fa-times"
                                            ></i>
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            @click="getDataMaxValue($event)"
                                            type="radio"
                                            v-model="price"
                                            value="100"
                                            data-max="500"
                                            id="filter_by_price_100-500"
                                        />
                                        <p class="label-wrapper">
                                            <label for="filter_by_price_100-500"
                                                >$100 - $500
                                            </label>
                                            <i
                                                @click="clearPriceFilter()"
                                                class="fa fa-times"
                                            ></i>
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            @click="getDataMaxValue($event)"
                                            type="radio"
                                            v-model="price"
                                            value="500"
                                            data-max="1000"
                                            id="filter_by_price_500-1000"
                                        />
                                        <p class="label-wrapper">
                                            <label
                                                for="filter_by_price_500-1000"
                                                >$500 - $1000
                                            </label>
                                            <i
                                                @click="clearPriceFilter()"
                                                class="fa fa-times"
                                            ></i>
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            @click="getDataMaxValue($event)"
                                            type="radio"
                                            v-model="price"
                                            value="1000"
                                            data-max="1500"
                                            id="filter_by_price_1000-1500"
                                        />
                                        <p class="label-wrapper">
                                            <label
                                                for="filter_by_price_1000-1500"
                                                >$1000 - $1500
                                            </label>
                                            <i
                                                @click="clearPriceFilter()"
                                                class="fa fa-times"
                                            ></i>
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            @click="getDataMaxValue($event)"
                                            type="radio"
                                            v-model="price"
                                            value="1500"
                                            data-min="1500"
                                            id="filter_by_price_1500"
                                        />
                                        <p class="label-wrapper">
                                            <label for="filter_by_price_1500"
                                                >above $1500
                                            </label>
                                            <i
                                                @click="clearPriceFilter()"
                                                class="fa fa-times"
                                            ></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <!-- ****************************************** -->
                    <!-- Here is the whole products   -->
                    <!-- ****************************************** -->
                    <div class="row">
                        <div
                            class="col-md-4 col-6"
                            v-for="(product, index) in priceFilterdProducts"
                            :key="index"
                        >
                            <product :product="product" />
                        </div>
                    </div>
                    <!-- ****************************************** -->
                    <!-- if the  htere is no products   -->
                    <!-- ****************************************** -->
                    <div
                        class="h-100 d-flex justify-content-center align-items-center"
                    >
                        <h6 class="h1" v-if="priceFilterdProducts.length == 0">
                            no products
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Product from "@/components/Product.vue";
import ProductPreview from "@/components/ProductPreview.vue";
import { EventBus } from "../main";

export default {
    data() {
        return {
            price: [],
            dataMaxValue: "",
            dataMinValue: "",
            catName: [],
            sortName: [],
            sortWay: "default",
            isShow: false
        };
    },
    methods: {
        clearPriceFilter() {
            this.price = "";
        },
        clearCatAndSortFilter() {
            this.catName = "";
            this.sortName = "";
        },
        clearSortNameWhenPressedOnCat() {
            this.sortName = "";
        },
        putCatNameWhenPressedOnSorts(e) {
            this.catName = e.cat;
        },
        getDataMaxValue(e) {
            if (
                e.target.getAttribute("data-max") ||
                e.target.getAttribute("data-min")
            ) {
                this.dataMaxValue = e.target.getAttribute("data-max");
                this.dataMinValue = e.target.getAttribute("data-min");
            } else {
                this.dataMaxValue = "";
                this.dataMinValue = "";
            }
        }
    },
    computed: {
        ...mapState(["categories"]),
        ...mapGetters(["getAllProducts"]),
        computedProducts() {
            return this.getAllProducts.filter(item => {
                return (
                    (this.catName.length === 0 ||
                        this.catName.includes(item.cat)) &&
                    (this.sortName.length === 0 ||
                        this.sortName.includes(item.sort))
                );
            });
        },
        priceFilterdProducts() {
            return this.computedProducts
                .filter(item => {
                    if (this.price.length === 0 || this.dataMaxValue) {
                        return (
                            this.price.length === 0 ||
                            (item.price >= this.price &&
                                item.price <= this.dataMaxValue)
                        );
                    }
                    if (this.dataMinValue) {
                        return (
                            this.price.length === 0 ||
                            item.price >= this.dataMinValue
                        );
                    } else {
                        return (
                            this.price.length === 0 || item.price <= this.price
                        );
                    }
                })
                .sort((a, b) => {
                    if (this.sortWay === "title-ascending") {
                        let aName = a.name.toLowerCase(),
                            bName = b.name.toLowerCase();

                        if (aName < bName) {
                            return -1;
                        }
                    } else if (this.sortWay === "title-descending") {
                        let aName = a.name.toLowerCase(),
                            bName = b.name.toLowerCase();

                        if (aName > bName) {
                            return -1;
                        }
                    } else if (this.sortWay === "price-ascending") {
                        return a.price - b.price;
                    } else if (this.sortWay === "price-descending") {
                        return b.price - a.price;
                    } else {
                        return 0;
                    }
                });
        }
    },
    created() {
        EventBus.$on("addCatName", catName => {
            this.catName = catName;
        });
    },
    components: {
        Product,
        ProductPreview
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
                p {
                    font-size: 20px;
                    margin-right: 15px;
                }
                img {
                    max-height: 30px;
                    margin-right: 10px;
                }
                label {
                    font-weight: 500;
                    display: inline-block;
                    cursor: pointer;
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
            width: 250px;
        }
        aside .collections,
        .products .small-screens-filters .collections {
            ul {
                li {
                    &:first-of-type {
                        font-weight: bolder;
                        cursor: pointer;
                    }
                    font-size: 25px;
                    position: relative;
                    margin-bottom: 10px;
                    input {
                        display: none;
                    }
                    label {
                        font-weight: bold;
                        cursor: pointer;
                    }
                    span {
                        font-size: 16px;
                        position: absolute;
                        top: -3px;
                    }
                }
                li.sort {
                    font-size: 20px;
                    color: #7d7474;
                    padding-left: 30px;
                    margin-bottom: 5px;
                }
            }
        }
        aside .price-filters,
        .products .small-screens-filters .price-filters {
            margin-top: 60px;
            h3 {
                font-weight: bold;
                margin-bottom: 20px;
            }
            & > div {
                margin-left: 30px;
                margin-bottom: 0;
                font-size: 19px;
                input[type="radio"] {
                    display: none;
                    &:checked + label {
                        font-weight: bolder;
                    }
                    &:checked ~ p.label-wrapper i {
                        opacity: 1;
                    }
                }
                p.label-wrapper {
                    position: relative;
                    label {
                        cursor: pointer;
                        position: relative;
                        margin-bottom: 0;
                        &:hover {
                            &::after {
                                opacity: 1;
                            }
                        }
                        &::after {
                            content: "";
                            opacity: 0;
                            position: absolute;
                            left: -24px;
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            top: 50%;
                            background-color: #000;
                            transition: opacity 0.3s;
                            transform: translateY(-50%);
                        }
                    }
                    i {
                        opacity: 0;
                        position: absolute;
                        font-size: 20px;
                        left: -28px;
                        top: 50%;
                        transition: opacity 0.3s;
                        transform: translateY(-50%);
                        cursor: pointer;
                    }
                }
            }
        }
        .products {
            width: 100%;
            .position-filters {
                margin-bottom: 20px;
                button {
                    position: relative;
                    height: 50px;
                    width: 30%;
                    font-size: 19px;
                    border: 2px solid #000;
                    @include baseButton();
                    i {
                        vertical-align: middle;
                    }
                }
                select {
                    font-size: 16px;
                    outline: none;
                    height: 50px;
                    width: 70%;
                    padding: 7px 30px;
                    border: 2px solid #000;
                    border-right: none;
                }
            }
            .applied-filters {
                .separator {
                    margin: 0 10px;
                }
                span {
                    font-size: 20px;
                }
                i {
                    cursor: pointer;
                }
            }
            .small-screens-filters {
                .price-filters {
                    margin: 0;
                    p.label-wrapper {
                        display: inline-block;
                    }
                }
            }
        }
        @media #{$minLarge} {
            .products {
                .filters-wrapper {
                    display: flex !important;
                }
            }
        }
        @media #{$maxMedium} {
            .products {
                .filters-wrapper {
                    display: block !important;
                }
                .position-filters {
                    button {
                        width: 30%;
                    }
                    select {
                        width: 70%;
                    }
                }
            }
        }
        @media #{$maxMobile} {
            aside .collections,
            .products .small-screens-filters .collections {
                ul li {
                    font-size: 19px;
                    .sort {
                        font-size: 17px;
                    }
                }
            }
            aside .price-filters,
            .products .small-screens-filters .price-filters > div {
                font-size: 14px;
            }
            .products {
                .position-filters {
                    button {
                        width: 35%;
                    }
                    select {
                        width: 65%;
                    }
                }
            }
        }
    }
}
</style>
