<template>
    <div class="app-container">
        <!-- <nav-side></nav-side> -->
        <el-tabs :tab-position="'left'">
            <el-tab-pane label="流程设计">
                <job-design></job-design>
            </el-tab-pane>
            <el-tab-pane label="调度配置">
                <location></location>
            </el-tab-pane>
            <el-tab-pane label="流程管理">
                <el-col :span="4">
                    <location></location>
                </el-col>
                <el-col :span="20">
                    <weibo></weibo>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="流程监控">
                <el-col :span="4">
                    <location></location>
                </el-col>
                <el-col :span="20">
                    <job-monitor></job-monitor>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="集群监控">
                <clu-monitor></clu-monitor>
            </el-tab-pane>
            <el-tab-pane label="日志管理">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import NavSide from './Layout/nav-side'
import JobDesign from '@/pages/job-design'
import Location from '@/pages/location'
import Weibo from '@/pages/weibo'
import JobMonitor from '@/pages/job-monitor'
import CluMonitor from '@/pages/clu-monitor'

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
        JobDesign,
        Location,
        Weibo,
        JobMonitor,
        CluMonitor
    }
}
</script>

<style scoped>
</style>
