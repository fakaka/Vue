<template>
    <div>
        <h3>
            <span>云音乐热歌榜</span>
        </h3>
        <el-table :data="tableData" stripe style="width: 100%" @row-click="handleRowClick">
            <el-table-column type="index" width="40"></el-table-column>
            <el-table-column prop="name" label="标题"></el-table-column>
            <el-table-column prop="singer" label="歌手" width="100" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="duration" label="时长" width="70"></el-table-column>
            <el-table-column prop="date" label="专辑" width="180"></el-table-column>
        </el-table>
        <h3>
            <span>我喜欢</span>
        </h3>
        <el-table :data="tableData2" stripe style="width: 100%" @row-click="handleRowClick">
            <el-table-column type="index" width="40"></el-table-column>
            <el-table-column prop="name" label="标题"></el-table-column>
            <el-table-column prop="singer" label="歌手" width="100" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="duration" label="时长" width="70"></el-table-column>
            <el-table-column prop="date" label="专辑" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>

export default {
    name: 'music-list',
    props: {},
    data() {
        return {
            tableData: [{
                date: '说散就散',
                name: '说散就散',
                duration: '04:02',
                singer: '袁娅维'
            }, {
                date: 'BINGBIAN病变',
                name: 'BINGBIAN病变',
                duration: '04:01',
                singer: 'Cubi / BRGang / Aydo$'
            }, {
                date: '广东十年爱情故事',
                name: '广东十年爱情故事',
                duration: '03:34',
                singer: '广东雨神'
            }, {
                date: '空空如也',
                name: '空空如也',
                duration: '03:33',
                singer: '任然'
            }],
            tableData2: [{
                date: '--',
                name: '讲真的',
                duration: '03:58',
                singer: '曾惜'
            }, {
                date: '--',
                name: '干物女',
                duration: '04:01',
                singer: '萧忆情'
            }, {
                date: '广东十年爱情故事',
                name: '追光者',
                duration: '03:34',
                singer: '岑宁儿'
            }]
        }
    },
    methods: {
        handleRowClick(row, event, column) {
            console.log(column.property, row[column.property])
        }
    },
    created() { },
    computed: {},
    components: {

    }
}
</script>

<style scoped>
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      width: 48%;
    }
</style>
