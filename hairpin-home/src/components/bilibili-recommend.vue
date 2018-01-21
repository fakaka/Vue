<template>
    <div>
        <h3>推荐</h3>
        <div class="recommend-module">
            <!---->
            <div v-for="(o, index) in 8 " :key="index + 12" class="groom-module home-card">
                <a href="https://www.bilibili.com/video/av18466648" target="_blank" title="【紫罗兰永恒花园】官方你再不播片头，我就自己做一个">
                    <img src="//i2.hdslb.com/bfs/archive/d41f82384aab788d8a375c88fce0ab474163e7b6.jpg@160w_100h.jpg" alt="【紫罗兰永恒花园】官方你再不播片头，我就自己做一个" width="160" height="100">
                    <div class="card-mark">
                        <p class="title">【紫罗兰永恒花园】官方你再不播片头，我就自己做一个</p>
                        <p class="author">up主：狂气小米瓜</p>
                        <p class="play">播放：8.88888888万</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'bilibili-recommend',
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

    .recommend-module {
      position: relative;
      width: 800px;
      height: 100%;
      overflow: hidden;
    }
    .recommend-module .groom-module {
      float: left;
      margin: 10px 20px 10px 0;
    }
    .groom-module {
      width: 160px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      background: #fff;
    }
    .groom-module img {
      width: 160px;
      height: 100px;
    }
    .groom-module .card-mark {
      position: absolute;
      left: 0;
      top: 68px;
      width: 150px;
      height: 100%;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      padding: 10px 5px;
      overflow: hidden;
      background: #000;
      background: -webkit-linear-gradient(
        transparent,
        rgba(0, 0, 0, 0.1) 20%,
        rgba(0, 0, 0, 0.2) 35%,
        rgba(0, 0, 0, 0.6) 65%,
        rgba(0, 0, 0, 0.9)
      );
      background: -o-linear-gradient(
        transparent,
        rgba(0, 0, 0, 0.1) 20%,
        rgba(0, 0, 0, 0.2) 35%,
        rgba(0, 0, 0, 0.6) 65%,
        rgba(0, 0, 0, 0.9)
      );
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        color-stop(20%, rgba(0, 0, 0, 0.1)),
        color-stop(35%, rgba(0, 0, 0, 0.2)),
        color-stop(65%, rgba(0, 0, 0, 0.6)),
        to(rgba(0, 0, 0, 0.9))
      );
      background: linear-gradient(
        transparent,
        rgba(0, 0, 0, 0.1) 20%,
        rgba(0, 0, 0, 0.2) 35%,
        rgba(0, 0, 0, 0.6) 65%,
        rgba(0, 0, 0, 0.9)
      );
    }
    .groom-module .card-mark .title {
      color: #fff;
      height: 40px;
      overflow: hidden;
      margin-bottom: 5px;
      word-break: break-all;
      word-wrap: break-word;
    }
    .groom-module .card-mark .author,
    .groom-module .card-mark .play {
      opacity: 0;
      color: #99a2aa;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    .groom-module:hover .card-mark {
      top: 0;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
    .groom-module:hover .card-mark .author,
    .groom-module:hover .card-mark .play {
      opacity: 1;
    }
</style>
