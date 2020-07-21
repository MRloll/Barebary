<template>
    <div id="app">
        <base-nav-bar />
        <slider></slider>
        <router-view />
    </div>
</template>
<script>
import Slider from "@/components/Slider.vue";
export default {
    components: {
        Slider
    }
};
</script>
<style lang="scss">
@media #{$maxMedium} {
    body {
        padding-top: 64px;
    }
}
</style>
