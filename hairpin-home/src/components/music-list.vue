<template>
    <div>
        <!-- <h3>
            <span>云音乐热歌榜</span>
        </h3> -->
        <el-table :data="tableData" stripe style="width: 100%" @row-click="handleRowClick">
            <el-table-column type="index" width="40" />
            <el-table-column prop="name" label="标题" />
            <el-table-column prop="singer" label="歌手" width="120" :show-overflow-tooltip="true" />
            <el-table-column prop="duration" label="时长" width="70" />
            <el-table-column prop="date" label="专辑" width="180" />
        </el-table>
    </div>
</template>

<script>

export default {
    name: 'music-list',
    props: {
        tableData: {
            type: Array
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleRowClick(row, event, column) {
            // console.log(column.property, row[column.property])
            this.$emit('click-row', row, column.property, row[column.property])
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
