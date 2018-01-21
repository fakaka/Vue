<template>
    <div>
        <el-row >
            <el-col v-for="(o, idx) in 4" :key="idx" :span="6">
                <div class="box">
                    <a href="https://github.com/fakaka" target="_blank">
                        <div class="tile-logo"> <img src="../assets/thumb.png" style="height: 146px;">
                            <div class="tile-tit" title="fakaka (hairpin)">
                                <span> fakaka (hairpin)</span>
                            </div>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>
        <el-row >
            <el-col v-for="(o, idx) in 4" :key="idx + 4" :span="6">
                <div class="box">
                    <a href="https://github.com/fakaka" target="_blank">
                        <div class="tile-logo"> <img src="../assets/thumb.png" style="height: 146px;">
                            <div class="tile-tit" title="fakaka (hairpin)">
                                <span>fakaka (hairpin)</span>
                            </div>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>
        <el-row >
            <el-col v-for="(o, idx) in 4" :key="idx + 8" :span="6">
                <div class="box">
                    <a href="https://github.com/fakaka" target="_blank">
                        <div class="tile-logo"> <img src="../assets/thumb.png" style="height: 146px;">
                            <div class="tile-tit" title="fakaka (hairpin)">
                                <span>fakaka (hairpin)</span>
                            </div>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>

export default {
    name: 'nav-grid',
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
    .box {
      height: 146px;
      width: 242px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
      margin: 10px 8px;
    }
    .tile-logo {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .box .tile-logo img {
      width: 100%;
      height: 100%;
    }
    .box,
    .tile-logo img {
      border-radius: 5px;
    }
    .tile-tit {
      height: 30px;
      line-height: 30px;
      position: absolute;
      bottom: -30px;
      background: rgba(0, 0, 0, 0.45);
      width: 100%;
      border-radius: 0 0 4px 4px;
      font-size: 14px;
    }
    .tile-tit span {
      margin: 0 42px 0 8px;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tile-logo:not(:hover) .tile-tit {
      bottom: 0;
      opacity: 1;
      background: rgba(255, 255, 255, 0.85);
      box-shadow: none;
      color: #505050;
    }
</style>
