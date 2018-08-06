<template>
    <div>
        <div class="card">
            <ve-line :data="chartData1" :toolbox="toolbox1"></ve-line>
        </div>
        <div class="card">
            <ve-line :data="chartData2" :settings="chartSettings2"></ve-line>
        </div>
        <div class="card">
            <ve-histogram :data="chartData3" :settings="chartSettings3"></ve-histogram>
        </div>
        <div class="card">
            <ve-histogram :data="chartData4" :settings="chartSettings4"></ve-histogram>
        </div>

    </div>
</template>

<script>

export default {
    name: 'chart',
    props: {},
    data() {
        return {
            chartData1: {
                columns: ['日期', 'commits'],
                rows: [
                    { '日期': '1-14', 'commits': 4 },
                    { '日期': '1-15', 'commits': 1 },
                    { '日期': '1-16', 'commits': 2 },
                    { '日期': '1-17', 'commits': 1 },
                    { '日期': '1-18', 'commits': 3 },
                    { '日期': '1-19', 'commits': 1 },
                    { '日期': '1-20', 'commits': 1 },
                ]
            },
            toolbox1: {
                show: true,
                feature: {
                    saveAsImage: {
                        type: 'jpg'
                    },
                    restore: {},
                }
            },
            chartData2: {
                columns: ['日期', '成本', '利润', '占比', '其他'],
                rows: [
                    { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
                    { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
                    { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
                    { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 },
                    { '日期': '1月5日', '成本': 3123, '利润': 1523, '占比': 0.12, '其他': 100 },
                    { '日期': '1月6日', '成本': 7123, '利润': 1523, '占比': 0.65, '其他': 100 }
                ]
            },
            chartSettings2: {
                stack: { '售价': ['成本', '利润'] },
                area: true
            },
            chartData3: {
                columns: ['日期', '成本', '利润', '占比', '其他'],
                rows: [
                    { '成本': 1523, '日期': '1月1日', '利润': 1523, '占比': 0.12, '其他': 100 },
                    { '成本': 1223, '日期': '1月2日', '利润': 1523, '占比': 0.345, '其他': 100 },
                    { '成本': 2123, '日期': '1月3日', '利润': 1523, '占比': 0.7, '其他': 100 },
                    { '成本': 4123, '日期': '1月4日', '利润': 1523, '占比': 0.31, '其他': 100 }
                ]
            },
            chartSettings3: {
                metrics: ['成本', '利润'],
                dimension: ['日期']
            },
            chartData4: {
                columns: ['日期', '成本', '利润', '占比', '其他'],
                rows: [
                    { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
                    { '日期': '1月2日', '成本': 1223, '利润': 1921, '占比': 0.345, '其他': 100 },
                    { '日期': '1月3日', '成本': 2123, '利润': 5523, '占比': 0.7, '其他': 100 },
                    { '日期': '1月4日', '成本': 4123, '利润': 6523, '占比': 0.31, '其他': 100 }
                ]
            },
            chartSettings4: {
                metrics: ['成本', '利润'],
                stack: { '单价': ['成本', '利润'] }
            }
        }
    },
    methods: {
    },
    created() { },
    computed: {},
    components: {

    }
}
</script>

<style scoped>
    .card {
      float: left;
      width: 50%;
    }
</style>
