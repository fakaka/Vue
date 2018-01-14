<template>
    <div>
        <img :src="picUrl" height="650">
        <img :src="picUrl2" height="650" style="float:right">
    </div>
</template>

<script>

export default {
    name: 'home',
    props: {},
    data() {
        return {
            picUrl: '',
            picUrl2: '',
        }
    },
    methods: {
        setPic() {
            var p1 = parseInt(Math.random() * 29) + 1
            var p2 = parseInt(Math.random() * 29) + 1
            this.picUrl = `http://p2jbdn3yz.bkt.clouddn.com/girl%20%28${p1}%29.jpg`
            this.picUrl2 = `http://p2jbdn3yz.bkt.clouddn.com/girl%20%28${p2}%29.jpg`
            setTimeout(() => {
                this.setPic()
            }, 1000 * 60)
        }
    },
    created() {
        this.setPic()
    }
}
</script>

<style scoped>

</style>
