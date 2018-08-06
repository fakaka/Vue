<template>
    <div class="app-container">
        <test></test>
        <github></github>
    </div>
</template>

<script>
import Test from '@/pages/test'
import Github from '@/components/github'

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
        Test
    }
}
</script>

<style scoped>
    .app-container {
        position: relative;
    }
</style>
