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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active {
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 100%;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
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
