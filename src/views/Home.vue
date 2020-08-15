<template>
    <div>
        <slider></slider>
        <showcase />
        <recent-products />
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Showcase from "@/components/Showcase.vue";
import RecentProducts from "@/components/RecentProducts.vue";
export default {
    components: {
        Slider,
        Showcase,
        RecentProducts
    }
};
</script>

<style></style>
