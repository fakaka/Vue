<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex" mode="horizontal" router>
                    <el-menu-item v-for="(item, index) in menuData" :key="index" :index="item.index">
                        <span slot="title">{{ item.name }}</span>
                    </el-menu-item>
                </el-menu>
            </el-header>

            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
            
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            activeIndex: '',
            menuData: [{
                index: 'home',
                name: '主页'
            }, {
                index: 'search',
                name: '页面导航'
            }, {
                index: 'bilibili',
                name: '哔哩哔哩'
            }, {
                index: 'music',
                name: '音乐'
            }, {
                index: 'news',
                name: '新闻'
            }, {
                index: 'todo',
                name: '待办'
            }, {
                index: 'test',
                name: '测试'
            }
            ]
        }
    },
    method: {

    },
    mounted() {
        this.activeIndex = this.$route.name || 'home'
    }
}
</script>

<style lang="less">
    @import "./style/common";
    .el-main {
      width: 80%;
      margin: 0 auto;
      padding-top: 10px;
    }
</style>
