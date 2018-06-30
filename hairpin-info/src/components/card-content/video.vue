<template>
    <div class="video-container">
        <div class="bilibili-video"
             v-if="videoData.desc.type == 8">
            <a target="_blank"
               :href="'https://www.bilibili.com/video/av' + videoData.aid">
                <div class="image-area"><img :src="videoData.item.cover"></div>
                <div class="text-area">
                    <div class="title">{{ videoData.item.title}}</div>
                    <div class="view-danmaku">
                        <div>
                            <i class="icon-font icon-play-a"></i>
                            <span class="view">播放 {{ videoData.item.stat.view }}</span>
                        </div>
                        <div>
                            <i class="icon-font icon-danmu-a"></i>
                            <span class="danmaku">弹幕 {{ videoData.item.stat.danmaku }}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="primary-video"
             v-if="videoData.desc.type == 16">
            <video :src="videoData.item.video_playurl"
                   controls="controls"
                   width="300"></video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-content-video',
    props: {
        videoData: {
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {
        getDynamicId(str) {
            str = str + ''
            let id = parseInt(str.substring(9)) - 2
            var res = 'http://t.bilibili.com/' + str.substring(0, 9) + id
            return res
        }
    },
    created() {},
    computed: {
        dynamic_id() {
            if (this.videoData && this.videoData.desc) {
                let str = this.videoData.desc.dynamic_id + ''
                let id = parseInt(str.substring(9)) - 2
                return str.substring(0, 9) + id
            }
        }
    },
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
    components: {}
}
</script>

<style scoped>
    .bilibili-video {
        height: 100px;
        background: #fff;
        border-radius: 4px;
        text-align: left;
        position: relative;
        border: 1px solid #e6e5ef;
        box-sizing: content-box;
        overflow: hidden;
        cursor: pointer;
    }
    .bilibili-video:hover {
        border: 1px solid #23ade5;
    }

    .bilibili-video:hover .text-area .title {
        color: #23ade5;
    }

    .bilibili-video .image-area,
    .bilibili-video .text-area {
        display: inline-block;
        vertical-align: top;
    }
    .bilibili-video .image-area {
        height: 100px;
        position: relative;
    }
    .bilibili-video .image-area img {
        height: 100px;
        border-radius: 0 4px 4px 0;
    }
    .bilibili-video .image-area .mask span {
        position: absolute;
        bottom: 8px;
        left: 8px;
        color: #fff;
        font-size: 12px;
    }
    .bilibili-video .text-area {
        width: 170px;
        margin-left: 5px;
    }
    .bilibili-video .text-area .title {
        transition: color 0.2s cubic-bezier(0.22, 0.58, 0.12, 0.98);
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        line-height: 19px;
        /* max-height: 2.714285714285714em; */
        color: #222;
        margin-top: 8px;
        height: 38px;
    }
    .bilibili-video .text-area .content {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        line-height: 19px;
        max-height: 3.166666666666667em;
        margin-top: 3px;
        color: #9aa3ab;
        height: 38px;
    }
    .bilibili-video .text-area .view-danmaku {
        font-size: 12px;
        margin-top: 20px;
        color: #99a2aa;
        line-height: 18px;
    }
    .bilibili-video .text-area .view-danmaku > div {
        width: 72px;
        display: inline-block;
    }

    .c-pointer {
        cursor: pointer;
    }
</style>
