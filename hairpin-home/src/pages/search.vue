<template>
    <div>
        <div class="search">
            <el-input placeholder="请输入关键字" v-model.trim="q" class="input-with-select">
                <el-select v-model="selectEngine" slot="prepend" style="width: 80px;">
                    <el-option label="百度" value="1"></el-option>
                    <el-option label="360 " value="2"></el-option>
                    <el-option label="谷歌" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
        </div>

        <div class="hot">
            <span>热门词 </span> |
            <el-button type="text">养生</el-button>
            <el-button type="text">可怕</el-button>
            <el-button type="text">震惊</el-button>
            <a href="">66</a>
        </div>

        <div class="like">
            <el-row>
                <el-col class="card" :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../assets/hamburger.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>

export default {
    name: 'search',
    props: {},
    data() {
        return {
            q: '',
            selectEngine: '百度',
            hotKeyValue: 'xxx'
        }
    },
    methods: {
        search() {
            let word = this.q
            if (word == '') {
                this.$message.warning(' 请输入关键字')
                return
            }

            let searchEngine = this.selectEngine
            switch (searchEngine) {
                case '百度':
                case '1': // 百度
                    window.open('https://www.baidu.com/s?wd=' + word)
                    break;
                case '2': // 360
                    window.open('https://www.so.com/s?q=' + word)
                    break;
                case '3': // Google
                    // 新加坡节点
                    window.open('https://www.google.co.id/search?q=' + word)
                    break;
                default:
                    this.$message.error('错了哦，这是一条错误消息')
                    break;
            }
        }


    },
    created() { },
    computed: {},
    components: {

    }
}
</script>

<style scoped>
    .search {
      margin: 0 auto;
      width: 70%;
    }
    .hot {
      margin: 5px auto;
      width: 61%;
    }
    .hot > span {
      color: rgb(182, 51, 84);
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }

    .el-card:hover {
      box-shadow: 0 2px 5px 3px rgba(0,0,0,.1);
    }
</style>
