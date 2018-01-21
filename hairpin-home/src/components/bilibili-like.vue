<template>
    <div style="like">
        <div class="card">
            <div class="main-content">
                <a href="//bangumi.bilibili.com/anime/timeline" target="_blank" class="dp-i-block type-label c-pointer">番剧</a>
                <p class="user-name yahei-16 dp-i-block">
                    <span class="c-pointer">魔卡少女樱 CLEAR CARD篇</span>
                </p>
                <p class="time">
                    <span>5小时前</span>
                    <span> 更新了</span>
                </p>
                <div class="card-content">
                    <div class="video-container">
                        <a target="_blank" href="https://bangumi.bilibili.com/anime/21421/play#172121">
                            <div class="image-area">
                                <img src="//i0.hdslb.com/bfs/archive/fa000121123db0d23eab3002cc7af1f4f610c436.jpg@406w_254h_1e_1c.webp">
                            </div>
                            <div class="text-area">
                                <div class="title">第3集 - 小樱的暴雨警报</div>
                                <div class="content"></div>
                                <div class="view-danmaku">
                                    <div>
                                        <i class="icon-font icon-play-a"></i>
                                        <span class="view">播放 25.6万</span>
                                    </div>
                                    <div>
                                        <i class="icon-font icon-danmu-a"></i>
                                        <span class="danmaku">弹幕 1.7万</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="user-head c-pointer" style="background-image: url(&quot;https://i0.hdslb.com/bfs/bangumi/07245c4bf4acb03a5819762fea3210c656aba66c.jpg&quot;); border-radius: 12px;">
            </div>
        </div>
        <div class="card">
            <div class="main-content">
                <p class="user-name yahei-16 dp-i-block">
                    <span class="c-pointer">木鱼水心</span>
                </p>
                <p class="time">
                    <a href="//t.bilibili.com/75660483191803960?tab=1" target="_blank" class="detail-link">17小时前</a>
                    <span></span>
                </p>
                <div class="card-content">
                    <div>
                        <div class="video">
                            <div class="description">
                                <div class="content">
                                    <div class="content-full hidden">【木鱼微剧场】《入殓师》无差别的匠人精神：影片讲述的是一种无差别的面对事业无比认真的匠人精神。在一个对自己事业存着热爱之心，愿意倾注努力的人眼中，并没有低贱的事业。因为他知道自己的事业创造了价值，从而时刻对它存着一份敬畏之心。一份事业，值得被认真对待，而且它在得到这样的对待后，也会回报人。</div>
                                </div>
                            </div>
                            <div class="video-container">
                                <a target="_blank" href="//www.bilibili.com/video/av18531892">
                                    <div class="image-area">
                                        <img src="//i1.hdslb.com/bfs/archive/9e25b4109247e030642ed24aad84a4799eb27d12.jpg@406w_254h_1e_1c.webp">
                                        <div class="mask">
                                            <span>18:30</span>
                                        </div>
                                    </div>
                                    <div class="text-area">
                                        <div class="title">【木鱼微剧场】《入殓师》无差别的匠人精神</div>
                                        <div class="content">影片讲述的是一种无差别的面对事业无比认真的匠人精神。在一个对自己事业存着热爱之心，愿意倾注努力的人眼中，并没有低贱的事业。因为他知道自己的事业创造了价值，从而时刻对它存着一份敬畏之心。一份事业，值得被认真对待，而且它在得到这样的对待后，也会回报人。</div>
                                        <div class="view-danmaku">
                                            <div>
                                                <i class="icon-font icon-play-a"></i>
                                                <span class="view">播放 15.9万</span>
                                            </div>
                                            <div>
                                                <i class="icon-font icon-danmu-a"></i>
                                                <span class="danmaku">弹幕 759</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-head c-pointer" style="background-image: url(&quot;https://i2.hdslb.com/bfs/face/696df59d35c78430f1a0bdb6184558e7b7eb4a6e.jpg&quot;); border-radius: 50%;">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'bilibili-like',
    props: {},
    data() {
        return {

        }
    },
    methods: {
    },
    created() { },
    computed: {},
    components: {

    }
}
</script>

<style scoped>

    .card {
      position: relative;
      width: 638px;
      background: #fff;
      border: 1px solid rgba(40, 158, 255, 0.5);
      margin-top: 10px;
      border-radius: 8px;
      box-shadow: 0 0 1px #00b5e5;
    }
    .card .main-content {
      width: 534px;
      padding-top: 20px;
      margin-left: 88px;
    }
    .card .main-content .user-name {
      color: #222;
    }
    .card .main-content .user-name span:hover {
      color: #00b5e5;
    }
    .card .main-content .time {
      padding-top: 4px;
      font-size: 12px;
    }
    .card .main-content .time .detail-link {
      -webkit-transition: color 0.3s ease;
      transition: color 0.3s ease;
    }
    .card .main-content .time .detail-link:hover {
      color: #ff85ad;
    }
    .card .user-head {
      position: absolute;
      width: 48px;
      height: 48px;
      top: 20px;
      left: 24px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .type-label {
      padding: 1px 4px;
      border-radius: 2px;
      margin-right: 8px;
      background: #fb7299;
      font-size: 12px;
      color: #fff;
      position: relative;
      top: -2px;
    }

    .card-content {
      margin-top: 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-bottom: 10px;
    }
    .description {
      max-width: 100%;
      display: inline-block;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 22px;
      word-wrap: break-word;
    }
    .description.active {
      color: #23ade5;
      cursor: pointer;
    }

    .video-container {
      width: 520px;
      height: 127px;
      background: #fff;
      border-radius: 4px;
      text-align: left;
      position: relative;
      border: 1px solid #e5e9ef;
      overflow: hidden;
      z-index: 1;
      cursor: pointer;
    }
    .video-container .image-area,
    .video-container .text-area {
      display: inline-block;
      vertical-align: top;
    }
    .video-container:hover .text-area .title {
      color: #23ade5;
    }
    .video-container .image-area {
      width: 203px;
      height: 127px;
      position: relative;
    }
    .video-container .image-area img {
      width: 100%;
      height: 100%;
      border-radius: 0 4px 4px 0;
    }
    .video-container .image-area .mask span {
      position: absolute;
      bottom: 8px;
      left: 8px;
      color: #fff;
      font-size: 12px;
    }
    .video-container .text-area {
      width: 289px;
      height: 100%;
      margin: 0 12px 0 16px;
      float: right;
    }
    .video-container .text-area .title {
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
      margin-top: 9px;
      height: 38px;
    }
    .video-container .text-area .content {
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
    .video-container .text-area .view-danmaku {
      font-size: 12px;
      margin-top: 16px;
      color: #99a2aa;
      line-height: 18px;
    }
    .video-container .text-area .view-danmaku > div {
      width: 72px;
      display: inline-block;
    }

    .c-pointer {
      cursor: pointer;
    }
    .yahei-16 {
      font-size: 16px;
      letter-spacing: 0;
    }
</style>
