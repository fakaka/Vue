<template>
    <div>
        <div class="block">
            <el-carousel trigger="click" height="350px" :interval="4000" :autoplay="false">
                <el-carousel-item v-for="item in items" :key="item">
                    <img :src="item" alt="item" title="img">
                </el-carousel-item>
            </el-carousel>
        </div>
        <music-list></music-list>
    </div>
</template>

<script>
import MusicList from "@/components/music-list";

export default {
    name: 'music',
    props: {},
    data() {
        return {
            items: [
                'http://p1.music.126.net/pXK6K_3UQMRCm8M1LdRMBQ==/109951163111294398.jpg',
                'http://p1.music.126.net/1uWIQxcgunObfR76YLofHg==/109951163111295860.jpg',
                'http://p1.music.126.net/56rJnp0_26R2Aj0LufKaRw==/109951163111320482.jpg',
            ]
        }
    },
    methods: {
        _getApi() {
            // this.$http.get('http://localhost:8088/api').then(response => {
            //     console.log(response.body)
            //     this.someData = response.body.name
            // })
        }
    },
    mounted() {
        this._getApi()
    },
    computed: {},
    components: {
        MusicList
    }
}
</script>

<style scoped>
    .el-carousel__item {
      background-color: #d3dce6;
    }

    .el-carousel__item img {
      /* opacity: 0.9; */
      height: 350px;
      line-height: 350px;
      width: 70%;
      margin: 0 15%;
    }

</style>
