<template>
    <div>
        <slider></slider>
        <showcase />
        <recent-products />
        <info />
        <Footer />
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Showcase from "@/components/Showcase.vue";
import RecentProducts from "@/components/RecentProducts.vue";
import Info from "@/components/Info.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        Slider,
        Showcase,
        RecentProducts,
        Info,
        Footer
    }
};
</script>

<style></style>
