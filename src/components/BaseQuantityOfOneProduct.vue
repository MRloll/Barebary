<template>
    <div
        class="product-number d-flex align-items-center justify-content-center"
    >
        <span @click="removeProduct()" class="holder">
            <i class="fas fa-minus"></i>
            <span class="shadow"></span>
        </span>
        <p class="m-0">
            <mark><slot></slot></mark>
        </p>
        <span @click="addProduct()" class="holder">
            <i class="fas fa-plus"></i>
            <span class="shadow"></span>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        addProduct() {
            this.$emit("addOneProduct");
        },
        removeProduct() {
            this.$emit("removeOneProduct");
        }
    }
};
</script>

<style lang="scss" scoped>
div.product-number {
    min-width: 100px;
    span.holder {
        position: relative;
        transition: color 0.4s ease;
        cursor: pointer;
        i {
            position: relative;
            z-index: 1;
            margin: 0 10px;
        }
        span.shadow {
            position: absolute;
            width: 16px;
            height: 16px;
            top: 2px;
            right: 9px;
            transform: scale(0);
            border-radius: 50%;
            background-color: #000;
            transition: transform 0.4s ease;
        }
        &:hover {
            color: white;
            span {
                transform: scale(1.5);
            }
        }
    }
}
</style>
