<template>
    <div>
        <div class="block">
            <el-carousel trigger="click" height="350px" :interval="4000" :autoplay="false">
                <el-carousel-item v-for="item in items" :key="item">
                    <img :src="item" alt="item" title="img">
                </el-carousel-item>
            </el-carousel>
        </div>
        <el-tabs tab-position="left" type="border-card" style="height: 800px;">
            <el-tab-pane label="云音乐热歌榜">
                <music-list :tableData="tableData" @click-row="clickRow"></music-list>
            </el-tab-pane>
            <el-tab-pane label="我喜欢">
                <music-list :tableData="tableData2"></music-list>
            </el-tab-pane>
            <el-tab-pane label="每日推荐">{{ today }} 每日推荐
                <music-list :tableData="tableData3"></music-list>
            </el-tab-pane>
            <el-tab-pane label="轻音乐">轻音乐
                <music-list :tableData="tableData4"></music-list>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import MusicList from "@/components/music-list"

export default {
    name: 'music',
    props: {},
    data() {
        return {
            items: [
                'http://p1.music.126.net/pXK6K_3UQMRCm8M1LdRMBQ==/109951163111294398.jpg',
                'http://p1.music.126.net/1uWIQxcgunObfR76YLofHg==/109951163111295860.jpg',
                'http://p1.music.126.net/56rJnp0_26R2Aj0LufKaRw==/109951163111320482.jpg',
            ],
            tableData: [
                {
                    date: '说散就散',
                    name: '说散就散',
                    duration: '04:02',
                    singer: '袁娅维'
                }, {
                    date: 'BINGBIAN病变',
                    name: 'BINGBIAN病变',
                    duration: '04:01',
                    singer: 'Cubi / BRGang / Aydo$'
                }, {
                    date: '广东十年爱情故事',
                    name: '广东十年爱情故事',
                    duration: '03:34',
                    singer: '广东雨神'
                }, {
                    date: '空空如也',
                    name: '空空如也',
                    duration: '03:33',
                    singer: '任然'
                }],
            tableData2: [
                {
                    date: '--',
                    name: '讲真的',
                    duration: '03:58',
                    singer: '曾惜'
                }, {
                    date: '--',
                    name: '干物女',
                    duration: '04:01',
                    singer: '萧忆情'
                }, {
                    date: '广东十年爱情故事',
                    name: '追光者',
                    duration: '03:34',
                    singer: '岑宁儿'
                }],
            tableData3: [
                {
                    date: '--',
                    name: '天真',
                    duration: '03:58',
                    singer: '李艺彤'
                }
            ],
            tableData4: [
                {
                    date: '--',
                    name: 'II quiet romance (杀人考察(前))',
                    duration: '02:26',
                    singer: '梶浦由記'
                }
            ],
            today: new Date().getDate()
        }
    },
    methods: {
        _getApi() {
            // this.$http.get('http://localhost:8088/api').then(response => {
            //     console.log(response.body)
            //     this.someData = response.body.name
            // })
        },
        clickRow(a, b, c) {
            console.log(a, b, c)
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
