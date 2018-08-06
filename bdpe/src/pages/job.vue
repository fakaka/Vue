<template>
    <div class="app-container">
        <!-- <nav-side></nav-side> -->
        <el-tabs :tab-position="'left'">
            <el-tab-pane label="调度设计">
                <user></user>
            </el-tab-pane>
            <el-tab-pane label="调度配置">
                <location></location>
            </el-tab-pane>
            <el-tab-pane label="调度管理" style="display:flex">
                <location></location>
                <weibo></weibo>
            </el-tab-pane>
            <el-tab-pane label="调度监控">定时任务补偿</el-tab-pane>
            <el-tab-pane label="集群监控">定时任务补偿</el-tab-pane>
            <el-tab-pane label="日志管理">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import NavSide from './Layout/nav-side'
import User from '@/pages/user'
import Location from '@/pages/location'
import Weibo from '@/pages/weibo'

export default {
    name: 'job',
    props: {},
    directives: {},
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    components: {
        NavSide,
        User,
        Location,
        Weibo
    }
}
</script>

<style scoped>
</style>
