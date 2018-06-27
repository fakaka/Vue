<template>
    <div>
        <el-card class="info-card">
            <div slot="header"
                 class="card-header clearfix">
                <span>微博消息 {{ item.num }}</span>
                {{read}}
                <el-button @click="changeRead"
                           style="float: right; padding: 3px 0"
                           type="text">标为已读</el-button>
            </div>
            <div class="card-content">
                <bilibili-like :likeData="likeData"
                               v-if="item.num == 1"></bilibili-like>
            </div>
            <div class="card-footer">
                <div style="flex-grow:1">
                    <i class="el-icon-edit"></i>
                </div>
                <div style="flex-grow:1">
                    <i class="el-icon-delete"></i>
                </div>
                <div style="flex-grow:1">
                    <i class="el-icon-share"></i>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import InfoCardImage from '@/components/info-card-image'
import BilibiliLike from '@/components/bilibili-like'

var baseUrl = 'http://localhost:3003/bilibili'

export default {
    name: 'info-card',
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            read: false,
            likeData: {}
        }
    },
    methods: {
        refresh() {},
        changeRead() {
            // 发送请求
            this.read = !this.read
        },
        _getLikeData(uid = '259333', idx = 0) {
            this.$http.get(baseUrl + '/user/space?uid=' + uid).then(resp => {
                // console.log(resp.body)
                if (resp.body.code == 0) {
                    var card = resp.body.data.cards[idx].card
                    var cardData = JSON.parse(card)
                    cardData.type = resp.body.data.cards[idx].desc
                    console.log(cardData)
                    this.likeData = cardData
                }
            })
        }
    },
    mounted() {
        this._getLikeData()
    },
    computed: {},
    components: {
        InfoCardImage,
        BilibiliLike
    }
}
</script>

<style scoped>
    .info-card {
        width: 100%;
        max-width: 400px;
        margin: 0 0 5px 0;
    }
    .card-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* margin-top: 5px;
        border-top: 1px solid #ebeef5;
        padding: 5px; */
    }
</style>

<style>
    .el-card__header {
        padding: 10px 15px;
    }
    .el-card__body {
        padding: 15px;
        padding-bottom: 10px;
    }
</style>
