<template>
    <div>
        <div class="search">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                    <el-option label="百度" value="1">
                        <span style="float: left; margin-right: 20px;">
                            <i class="el-icon-warning"></i>
                        </span>
                        <span style="color: #8492a6; font-size: 14px">百度</span>
                    </el-option>
                    <el-option label="360" value="2"></el-option>
                    <el-option label="谷歌" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
        </div>

        <div class="hot">热门词
            <el-button type="text" plain>成功按钮</el-button>
            <el-button type="text" plain>信息按钮</el-button>
            <el-button type="text">警告按钮</el-button>
            <el-button type="text">危险按钮</el-button>
            <a href="http://www.baidu.com">百度</a>
        </div>

        <div class="like">
            <el-row>
                <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
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
                <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
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
    name: 'nav',
    props: {},
    data() {
        return {
            input5: '',
            select: '百度',
        }
    },
    methods: {
        search() {
            console.log(this.input5 + " with " + this.select)
            // 跳转到相应的搜索引擎页面 ，暂时是网站搜索

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
      width: 60%;
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
</style>
