<template>
    <div>
        <p class="h4" v-if="product[0]">{{ product[0].description }}</p>
    </div>
</template>

<script>
export default {
    name: "product-decription",
    props: ["product"]
};
</script>

<style lang="scss" scoped>
p {
    max-width: 1300px;
    line-height: 1.7;
    margin: auto;
    color: #3a3a3a;
}
@media #{$maxMobile} {
    p {
        font-size: 21px;
    }
}
</style>
