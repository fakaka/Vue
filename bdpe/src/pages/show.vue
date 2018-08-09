<template>
    <el-container>
        <el-aside>
            <nav-side></nav-side>
        </el-aside>
        <el-main>
            <test></test>
        </el-main>
    </el-container>
</template>

<script>
import Test from '@/pages/test'
import Github from '@/components/github'
import NavSide from './Layout/nav-side'

export default {
    name: 'home',
    props: {},
    directives: {},
    data() {
        return {
            chartData1: {
                columns: ['日期', 'commits'],
                rows: [
                    { 日期: '1-14', commits: 4 },
                    { 日期: '1-15', commits: 1 },
                    { 日期: '1-16', commits: 2 },
                    { 日期: '1-17', commits: 1 },
                    { 日期: '1-18', commits: 3 },
                    { 日期: '1-19', commits: 1 },
                    { 日期: '1-20', commits: 1 }
                ]
            },
            toolbox1: {
                show: true,
                feature: {
                    saveAsImage: {
                        type: 'jpg'
                    },
                    restore: {}
                }
            }
        }
    },
    methods: {},
    created() {},
    computed: {},
    components: {
        Github,
        Test,
        NavSide
    }
}
</script>

<style scoped>
    .app-container {
        position: relative;
    }
</style>
