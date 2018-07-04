
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
    },
    render(h) {
        let temp = (
            <div class="card-content">
                <div class="description">{this.likeData.item.description}</div>
            </div>
        )
        let type = this.likeData.desc.type
        if (type == 2) {
            temp.children.push(<card-image imgData={this.likeData} />)
        }
        if (type == 8) {
            temp.children.push(<card-video videoData={this.likeData} />)
        }

        return temp
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
