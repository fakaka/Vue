<template>
    <div class="bilibili">
        <div class="banner" style="margin-left: -50%;">
            <img src="http://i0.hdslb.com/bfs/archive/450d278df2828057095f071cd63e95bed50e5892.png@.webp" alt="">
        </div>
        <div class="recommend">
            <bilibili-recommend></bilibili-recommend>
        </div>
        <div class="rank">
            <el-tabs tab-position="left" style="height: 700px;">
                <el-tab-pane label="动画">
                    <bilibili-rank :rankData="rankData"></bilibili-rank>
                </el-tab-pane>
                <el-tab-pane label="舞蹈">
                    <bilibili-rank :rankData="rankData"></bilibili-rank>
                </el-tab-pane>
            </el-tabs>

        </div>
        <bilibili-like></bilibili-like>
    </div>
</template>

<script>
import BilibiliRank from "@/components/bilibili-rank"
import BilibiliRecommend from "@/components/bilibili-recommend"
import BilibiliLike from "@/components/bilibili-like"

export default {
    name: 'bilibili',
    props: {},
    data() {
        return {
            rankData: {
                "code": 0,
                "data":
                    [{
                        "aid": "17955634",
                        "typename": "电视剧相关",
                        "title": "【Aliga】恋爱循环❤️给你小心心",
                        "subtitle": "",
                        "play": 92190,
                        "review": 284,
                        "video_review": 490,
                        "favorites": 420,
                        "mid": 17171565,
                        "author": "矮乐多Aliga",
                        "description": "创作类型: 翻跳\r\n编舞出处: av4640232\r\n摄影: 李老师\r\n后期: B_N_Death/哀子\r\n简介: 第一支学会的宅舞终于正式录了，新年给你比心心噢嘿嘿，衣服出自小乔的同人服，不过袖子老打到脸其实不是很适合跳舞_(:з」∠)_然后还有个小动作自己一直做不顺所以改了一下，望见谅！",
                        "create": "2017-06-26 04:39",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 509,
                        "duration": "9: 5",
                        "badgepay": false,
                        "pts": 91778
                    }, {
                        "aid": "11597020",
                        "typename": "电视剧相关",
                        "title": "女奥特曼与其他特摄中的巨大娘合集，不做封面党",
                        "subtitle": "",
                        "play": 851,
                        "review": 348,
                        "video_review": 2845,
                        "favorites": 1919,
                        "mid": 1604778,
                        "author": "オロカメン",
                        "description": "并没有黄暴内容，请放心",
                        "create": "2017-06-25 14:20",
                        "pic": "http://i0.hdslb.com/bfs/archive/d65f51d23526e26f51698ebc09d4e040e6b69730.jpg",
                        "coins": 802,
                        "duration": "47: 6",
                        "badgepay": false,
                        "pts": 88537
                    }, {
                        "aid": "11606395",
                        "typename": "电视剧相关",
                        "title": "【SKAM】小天使ins发糖了！",
                        "subtitle": "",
                        "play": 68744,
                        "review": 131,
                        "video_review": 86,
                        "favorites": 1687,
                        "mid": 33080370,
                        "author": "大嘴梦游",
                        "description": "继续秀吧，不要停！bgm：Alone(Matt Palmer)",
                        "create": "2017-06-25 10:18",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 356,
                        "duration": "0:30",
                        "badgepay": false,
                        "pts": 68375
                    }, {
                        "aid": "11590392",
                        "typename": "电视剧相关",
                        "title": "【哇萨比抓马】解读恐怖美剧《迷雾》第一集 史蒂芬金经典恐怖小说再次搬上电视荧幕",
                        "subtitle": "",
                        "play": 58554,
                        "review": 373,
                        "video_review": 369,
                        "favorites": 171,
                        "mid": 68412710,
                        "author": "哇萨比抓马",
                        "description": "目前看来节奏挺快，也挺精彩的，为什么评分会那么低呢~~我已经敏锐的发现里面有几个作死的角色了",
                        "create": "2017-06-24 19:38",
                        "pic": "http://i1.hdslb.com/bfs/archive/1dae4d5f68fae4a693a3bca1b95fc1e2b11967f1.jpg",
                        "coins": 590,
                        "duration": "6:28",
                        "badgepay": false,
                        "pts": 58245
                    }, {
                        "aid": "11604412",
                        "typename": "连载剧集",
                        "title": "【挪威】SKAM 第四季 第十集 Part8 Dear Sana【欣慰的是至少有Evak】【英字】",
                        "subtitle": "",
                        "play": 58345,
                        "review": 212,
                        "video_review": 1596,
                        "favorites": 1202,
                        "mid": 28196582,
                        "author": "_YiDra",
                        "description": "Part1：https://www.youtube.com/watch?v=zDn9jY1oaAQ\nPart2：https://www.youtube.com/watch?v=zyRE0IpuILA\n均来自油管主Feudly\n第四季无字及英字合辑：av9870349\n结束了这就？虚无的感觉。",
                        "create": "2017-06-25 08:05",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 119,
                        "duration": "18:17",
                        "badgepay": false,
                        "pts": 57937
                    }, {
                        "aid": "11636287",
                        "typename": "电视剧相关",
                        "title": "【迪丽热巴】丽姬传3分钟长片花首发",
                        "subtitle": "",
                        "play": 46046,
                        "review": 460,
                        "video_review": 678,
                        "favorites": 557,
                        "mid": 15639667,
                        "author": "我戳戳我",
                        "description": "网络\n电视剧丽姬传首款片花来袭！ 绝美丽姬迪丽热巴 为爱独赴深宫，与霸气秦王张彬彬 “红枣定情”。“你从来就不是我的王”，看着超虐心[泪]李泰 刘畅 乱世之中为爱守候。偷偷告诉泥萌，胖迪的眼神超有戏，还有小秀香肩哦~",
                        "create": "2017-06-26 11:21",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 75,
                        "duration": "2:42",
                        "badgepay": false,
                        "pts": 45558
                    }, {
                        "aid": "11622869",
                        "typename": "电视剧相关",
                        "title": "【哎呀猫片】豆瓣高分排名第一的韩剧，只因为拍了这个",
                        "subtitle": "",
                        "play": 49280,
                        "review": 236,
                        "video_review": 727,
                        "favorites": 443,
                        "mid": 97335574,
                        "author": "哎呀大联盟",
                        "description": "豆瓣 请回答1988 韩剧 神剧 青春 热门 韩国 高分 回忆 搞笑 电视剧",
                        "create": "2017-06-25 22:17",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 48,
                        "duration": "5:45",
                        "badgepay": false,
                        "pts": 42307
                    }, {
                        "aid": "11656824",
                        "typename": "电视剧相关",
                        "title": "【作为一个人类】迪迦奥特曼VS伽鲁拉",
                        "subtitle": "",
                        "play": 40566,
                        "review": 198,
                        "video_review": 785,
                        "favorites": 244,
                        "mid": 28573582,
                        "author": "德比西魔虫",
                        "description": "来自网络资源\n《迪迦奥特曼》第39集片段",
                        "create": "2017-06-27 02:13",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 21,
                        "duration": "11: 2",
                        "badgepay": false,
                        "pts": 38671
                    }, {
                        "aid": "11636170",
                        "typename": "电视剧相关",
                        "title": "《丽姬传》首曝超长高清片花&amp;迪丽热巴&amp;张彬彬&amp;爱原来在这里",
                        "subtitle": "",
                        "play": 37656,
                        "review": 242,
                        "video_review": 348,
                        "favorites": 395,
                        "mid": 51024171,
                        "author": "大溪囧自频道",
                        "description": "优酷视频\n电视剧《丽姬传》",
                        "create": "2017-06-26 11:11",
                        "pic": "https://i1.hdslb.com/bfs/archive/c0c0e95abd1cfbd0e9b7487310faa8afac30c8e2.jpg",
                        "coins": 30,
                        "duration": "2:47",
                        "badgepay": false,
                        "pts": 37330
                    }
                    ],
                "message": "",
                "ttl": 1
            }
        }
    },
    methods: {

    },
    computed: {
    },
    mounted() {
    },
    components: {
        BilibiliRank, BilibiliRecommend, BilibiliLike
    }
}
</script>

<style scoped>
    .rank {
      float: right;
      padding-top: 8px;
      padding-right: 8px;
    }
    .el-tab-pane {
      padding-top: 5px;
      padding-left: 8px;
    }
</style>
