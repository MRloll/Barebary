<template>
    <div id="app">
        <base-nav-bar />
        <router-view> </router-view>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getCategories");
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
