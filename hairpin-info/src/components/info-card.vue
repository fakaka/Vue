<template>
    <div class="info-card">
        <div class="info-card__header clearfix">
            <div class="user-head"
                 :style="'background-image: url(' + (item.user.head_url) + ');'"></div>
            <div style="width: 230px; padding-left: 8px;">
                <div class="user-name">
                    <span class="c-pointer">{{ item.user.name }}</span>
                </div>
                <div class="publish-time">
                    <a :href="'http://h.bilibili.com/' + item.item.id"
                       target="_blank"
                       class="detail-link">{{ item.item.upload_time | formatDate('YY-MM-DD') }}</a>
                </div>
            </div>
            <div class="card-oper">
                <el-button @click="changeRead"
                           style="float: right;"
                           type="text">{{read}} 标为已读</el-button>
            </div>
        </div>

        <div class="info-card__body">
            <card-content :likeData="item"></card-content>
        </div>

        <div class="info-card__footer">
            <div>
                <i class="el-icon-edit"></i>
            </div>
            <div style="border-left: 1px solid #ebeef5;border-right: 1px solid #ebeef5">
                <i class="el-icon-share"></i>
            </div>
            <div>
                <i class="el-icon-delete"></i>
            </div>
        </div>
    </div>
</template>

<script>
import CardContent from '@/components/card-content'

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
        }
    },
    mounted() {},
    computed: {},
    filters: {
        formatDate(val) {
            val = parseInt(val + '000')
            var d = new Date(val)
            var year = d.getFullYear()
            var month = d.getMonth() + 1
            var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
            var hour = d.getHours()
            var minutes = d.getMinutes()
            var seconds = d.getSeconds()
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
        }
    },
    components: {
        CardContent
    }
}
</script>

<style scoped>
    .info-card {
        width: 100%;
        max-width: 400px;
        margin: 0 0 5px 0;
        border-top: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: 0.3s;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    @media only screen and (min-width: 600px) {
        .info-card {
            max-width: 540px;
        }
    }

    .info-card__header {
        padding: 10px 10px 8px;
        border-bottom: 1px solid #ebeef5;
        box-sizing: border-box;
        display: flex;
    }

    .info-card__body {
        padding: 10px 13px;
    }

    .info-card__footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px solid #ebeef5;
        box-sizing: border-box;
        /* padding: 5px; */
    }

    .info-card__footer > div {
        flex-grow: 1;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .user-name {
        padding-top: 1px;
        font-size: 13px;
        font-weight: bolder;
        color: #ff85ad;
        letter-spacing: 0;
    }

    .publish-time {
        display: inline-block;
        padding-top: 1px;
        font-size: 12px;
    }
    .publish-time .detail-link {
        color: #23ade5;
        -webkit-transition: color 0.3s ease;
        transition: color 0.3s ease;
    }
    .publish-time .detail-link:hover {
        color: #ff85ad;
    }
    .user-head {
        /* position: absolute; */
        display: inline-block;
        width: 40px;
        height: 40px;
        top: 20px;
        left: 24px;
        border-radius: 50%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .card-oper {
        line-height: 44px;
    }
</style>
