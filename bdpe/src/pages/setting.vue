<template>
    <div>
        <el-row>
            <el-col span="4">
                <el-menu class="el-menu-vertical-demo"
                         style="min-height: 100%;"
                         :default-active="active"
                         unique-opened>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">job管理</span>
                        </template>
                        <el-menu-item index="user">用户管理</el-menu-item>
                        <el-menu-item index="song">歌曲管理</el-menu-item>
                        <el-menu-item index="blog">博客管理</el-menu-item>
                        <el-menu-item index="task">定时任务</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-download"></i>
                            <span slot="title">API</span>
                        </template>
                        <!-- <el-menu-item index="image">图床</el-menu-item> -->
                        <!-- <el-menu-item index="clawer">数据抓取</el-menu-item> -->
                        <el-menu-item index="weibo">微博管理</el-menu-item>
                        <el-menu-item index="doc">文案管理</el-menu-item>
                        <el-menu-item index="download">下载管理</el-menu-item>
                        <el-menu-item index="daily">每日任务</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span slot="title">开发</span>
                        </template>
                        <el-menu-item index="chart">图表展示</el-menu-item>
                        <el-menu-item index="icon">图标展示</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">数据源设置</span>
                        </template>
                        <el-menu-item index="ftp">ftp管理</el-menu-item>
                        <el-menu-item index="datasrc">数据源设置</el-menu-item>
                        <el-menu-item index="hadoop">Hadoop设置</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: 'setting',
    props: {},
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    components: {}
}
</script>

<style>
</style>