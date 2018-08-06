<template>
    <div>
        <div class="app-container">
            <el-input style='width:340px;'
                      :placeholder="'excel.xlsx/excel.zip'"
                      prefix-icon="el-icon-document"
                      v-model="filename"></el-input>
            <el-button style='margin-bottom:20px;'
                       type="primary"
                       icon="document"
                       @click="handleDownload">excel.xlsx</el-button>
            <el-button style='margin-bottom:20px;'
                       type="primary"
                       icon="document"
                       @click="handleDownloadZip">excel.zip</el-button>
            <el-table :data="list"
                      border
                      fit
                      highlight-current-row>
                <el-table-column align="center"
                                 label='Id'
                                 width="95">
                    <template slot-scope="scope">
                        {{scope.$index}}
                    </template>
                </el-table-column>
                <el-table-column label="Title">
                    <template slot-scope="scope">
                        {{scope.row.title}}
                    </template>
                </el-table-column>
                <el-table-column label="Author"
                                 width="110"
                                 align="center">
                    <template slot-scope="scope">
                        <el-tag>{{scope.row.author}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="Readings"
                                 width="115"
                                 align="center">
                    <template slot-scope="scope">
                        {{scope.row.pageviews}}
                    </template>
                </el-table-column>
                <el-table-column align="center"
                                 label="Date"
                                 width="220">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span>{{ scope.row.timestamp }}</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weibo',
    props: {},
    data() {
        return {
            list: [
                {
                    id: '1',
                    title: '1',
                    author: '1',
                    pageviews: '1',
                    timestamp: '1'
                }
            ],
            listLoading: true,
            downloadLoading: false,
            filename: ''
        }
    },
    methods: {
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                if (this.list) {
                    const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
                    const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
                    const list = this.list
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel(tHeader, data, this.filename)
                }
                this.downloadLoading = false
            })
        },
        handleDownloadZip() {
            this.downloadLoading = true
            import('@/vendor/Export2Zip').then(zip => {
                const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
                const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
                const list = this.list
                const data = this.formatJson(filterVal, list)
                zip.export_txt_to_zip(tHeader, data, this.filename, this.filename)
                this.downloadLoading = false
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v =>
                filterVal.map(j => {
                    if (j === 'timestamp') {
                        return v[j]
                    } else {
                        return v[j]
                    }
                })
            )
        }
    },
    created() {},
    computed: {},
    components: {}
}
</script>

<style>

</style>
