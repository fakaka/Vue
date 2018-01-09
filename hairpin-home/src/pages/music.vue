<template>
    <div>
        music
        <div class="rank">排行榜</div>
        <div class="like">我喜欢</div>
        <div class="fm">FM</div>
        <div class="fm">{{ someData }}</div>
    </div>
</template>

<script>

export default {
    name: 'music',
    props: {},
    data() {
        return {
            someData: ''
        }
    },
    methods: {
        _getApi() {
            this.$http.get('http://localhost:8088/api').then(response => {
                console.log(response.body)
                this.someData = response.body.name
            })
        }
    },
    mounted() {
        this._getApi()
    },
    computed: {},
    components: {

    }
}
</script>

<style>

</style>
