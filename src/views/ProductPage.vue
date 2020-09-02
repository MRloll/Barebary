<template>
    <div>
        <h1>{{ this.$route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: [
                { date: new Date("2020-12-29T20:44:36.043Z").toJSON() },
                { date: new Date("2020-12-30T20:44:36.043Z").toJSON() },
                { date: new Date("2020-08-02T20:44:36.043Z").toJSON() },
                { date: new Date("2020-01-02T20:44:36.043Z").toJSON() },
                { date: new Date("2020-03-02T20:44:36.043Z").toJSON() },
                { date: new Date("2020-10-02T20:44:36.043Z").toJSON() },
                { date: new Date().toJSON() }
            ]
        };
    },
    computed: {
        product() {
            return this.date
                .map(function(e) {
                    return e.date;
                })
                .sort()
                .reverse();
        }
    }
};
</script>

<style lang="scss" scoped></style>
