<template>
    <div class="card-content">
        <div class="description">{{ likeData.item.description }}</div>

        <card-repost :repostData="likeData"
                     v-if="likeData.desc.type == 1"></card-repost>
        <card-image :imgData="likeData"
                    v-if="likeData.desc.type == 2"></card-image>
        <card-video :videoData="likeData"
                    v-if="likeData.desc.type == 8 || likeData.desc.type == 16"></card-video>
        <card-music :musicData="likeData"
                    v-if="likeData.desc.type == 32"></card-music>
    </div>
</template>

<script>
import CardImage from './image'
import CardVideo from './video'
import CardMusic from './music'
import CardRepost from './repost'

/**
 * desc.type
 * 1 = 转发
 * 2 = 图片
 * 4 = 文字
 * 8 = 视频
 * 16= 小视频
 * 64= 文章
 */

export default {
    name: 'card-content',
    props: {
        likeData: {
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    filters: {},
    components: {
        CardImage,
        CardVideo,
        CardMusic,
        CardRepost
    }
}
</script>

<style>
    .repost {
        position: relative;
        padding: 8px 12px;
        border-radius: 8px;
        margin-left: -12px;
        background-color: #f4f5f7;
        line-height: 22px;
    }

    .repost .card-content {
        margin-top: 0;
        padding-bottom: 0;
    }
    .card-content {
        /* margin-top: 5px; */
        /* padding-bottom: 5px; */
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .description {
        display: inline-block;
        /* max-width: 100%; */
        max-height: 88px;
        line-height: 22px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        font-size: 14px;
        word-wrap: break-word;
        cursor: pointer;
        color: #222;
    }
    .description:hover {
        color: #23ade5;
    }
</style>
