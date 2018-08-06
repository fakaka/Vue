<template>
    <el-container style="height: 100%;">
        <el-header>
            <nav-header></nav-header>
        </el-header>
        <el-main>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
    </el-container>
</template>

<script>
import NavHeader from './nav-header'
import NavSide from './nav-side'
import Breadcrumb from './breadcrumb'

export default {
    name: 'layout',
    props: {},
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    components: {
        NavHeader,
        NavSide,
        Breadcrumb
    }
}
</script>

<style scoped>
    .el-header {
        /* text-align: right; */
        font-size: 12px;
        background-color: #eef1f6;
        color: #333;
        height: 60px;
        line-height: 60px;
        overflow: hidden;
        /* border-bottom: 1px solid #000; */
    }
</style>

<style>
    .el-main {
        padding: 15px;
    }
</style>
