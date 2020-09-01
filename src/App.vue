<template>
    <div id="app">
        <base-nav-bar />
        <router-view> </router-view>
        <footering />
    </div>
</template>

<script>
import Footering from "@/components/Footer.vue";

export default {
    created() {
        this.$store.dispatch("getCategories");
    },
    components: {
        Footering
    }
};
</script>

<style lang="scss">
#app {
    position: relative;
    z-index: 1;
}
@media #{$maxMedium} {
    body {
        padding-top: 64px;
    }
}
</style>
