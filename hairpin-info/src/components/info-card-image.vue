<template>
    <div>
        <img src="https://i0.hdslb.com/bfs/archive/738a382ddce86010549581cc344009733c2e7735.jpg@160w_100h.jpg"
             alt="">
    </div>
</template>

<script>
export default {
    name: 'info-card-image',
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {},
    mounted() {},
    computed: {},
    components: {}
}
</script>

<style scoped>
    .info-card {
        width: 100%;
        max-width: 400px;
        margin: 0 0 5px 0;
    }

</style>

<style>
    .el-card__header {
        padding: 10px 15px;
    }
    .el-card__body {
        padding: 15px;
    }
</style>
