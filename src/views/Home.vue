<template>
    <div>
        <slider></slider>
        <showcase />
        <recent-products />
        <info />
        <product-preview />
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Showcase from "@/components/Showcase.vue";
import RecentProducts from "@/components/RecentProducts.vue";
import Info from "@/components/Info.vue";
import ProductPreview from "@/components/ProductPreview.vue";
export default {
    name: "Home",
    components: {
        Slider,
        Showcase,
        RecentProducts,
        Info,
        ProductPreview
    }
};
</script>

<style></style>
