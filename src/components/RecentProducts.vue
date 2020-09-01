<template>
    <div class="recent-products pt-5">
        <div class="text-center">
            <h2>Recent Products</h2>
            <p>Here you will find our most recent products</p>
        </div>
        <div class="custom-container">
            <div class="row">
                <div
                    v-for="product in getRecentProducts"
                    :key="product.id"
                    class="col-lg-3 col-md-4 col-6 "
                >
                    <product :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from "@/components/Product.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        Product
    },
    computed: {
        ...mapGetters(["getRecentProducts"])
    }
};
</script>

<style lang="scss" scoped>
.recent-products {
    background-color: white;
}
h2 {
    font-weight: bold;
}
p {
    font-size: 20px;
    color: #5f5b5b;
}
</style>
