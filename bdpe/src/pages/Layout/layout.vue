<template>
    <el-container style="height: 100%;">
        <el-header>
            <nav-header></nav-header>
        </el-header>
        <el-container>
            <nav-side></nav-side>
            <div style="flex: 1;">
                <breadcrumb></breadcrumb>
                <el-main>
                    <!-- <transition name="el-fade-in-linear"> -->
                    <transition>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </el-main>
            </div>
        </el-container>
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
        text-align: right;
        font-size: 12px;
        background-color: #eef1f6;
        color: #333;
        height: 60px;
        line-height: 60px;
    }
</style>

<style>
    .el-main {
        padding: 15px;
    }
</style>
