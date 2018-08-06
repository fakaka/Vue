<template>
    <div v-if="url || testData">
        <div v-if="toolbar"
             style='margin-bottom:5px;'
             class="table-toolbar">
            <el-button-group>
                <el-button type="danger"
                           icon="el-icon-plus"
                           size="medium"
                           @click="addOne">新增</el-button>
                <el-button type="primary"
                           icon="el-icon-download"
                           size="medium"
                           @click="handleDownload">下载</el-button>
                <el-button type="primary"
                           icon="el-icon-refresh"
                           size="medium"
                           @click="refresh">
                </el-button>
            </el-button-group>
            <slot></slot>

        </div>
        <div class="table_content">
            <el-table :data="list"
                      stripe
                      border
                      size="small"
                      :highlight-current-row="true"
                      @sort-change="sortChange"
                      style="width: 100%;"
                      v-loading="listLoading">
                <el-table-column prop="index"
                                 v-if="showDetail"
                                 align="center"
                                 width="35">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)"
                                   type="text"
                                   size="small"
                                   icon="el-icon-info">
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column v-for="(item, index) in cols"
                                 :key="index"
                                 :prop="item.prop"
                                 :label="item.label"
                                 :width="item.width"
                                 :align="item.align"
                                 :sortable="item.sortable">
                    <!-- <template slot-scope="scope"
                              v-if="item.status">
                        <div v-if="item.status == 'tag' && scope.row.tag ">
                            <el-tag type="success">{{ scope.row[item.prop] }}</el-tag>
                        </div>
                    </template> -->
                </el-table-column>
                <el-table-column prop="index"
                                 v-if="showDelete"
                                 width="60">
                    <template slot-scope="scope">
                        <el-button type="danger"
                                   @click="handleDelete(scope.row)"
                                   circle
                                   size="mini"
                                   icon="el-icon-delete">
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div class="block"
             style="margin-top:15px;">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           background
                           :current-page="page.currentPage"
                           :page-size="listQuery.size"
                           layout="total, prev, pager, next"
                           :total="page.total" />
        </div>

        <el-dialog title="Detail"
                   :visible.sync="dialogVisible">
            <el-form ref="dataForm"
                     :model="temp"
                     label-position="left"
                     label-width="70px"
                     style='width: 400px; margin-left:50px;'>
                <el-form-item label="id"
                              prop="id">
                    {{ temp.id }}
                </el-form-item>
                <el-form-item label="content"
                              prop="content">
                    {{ temp.content }}
                </el-form-item>
                <el-form-item label="tag"
                              prop="tag">
                    {{ temp.tag }}
                </el-form-item>
                <el-form-item label="level"
                              prop="level">
                    {{ temp.level }}
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <el-button @click="dialogVisible = false">关闭</el-button>
            </div>
        </el-dialog>

        <el-dialog title="删除"
                   :visible.sync="deleteDialogVisible"
                   width="30%">
            <span>这是一段信息</span>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="deleteDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="deleteDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    category: 'display-table',
    props: {
        testData: {
            type: Object
        },
        url: {
            type: String,
            default: null
        },
        showDetail: {
            type: Boolean,
            default: true
        },
        showDelete: {
            type: Boolean,
            default: true
        },
        cols: {
            type: Array
        },
        toolbar: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            list: [],
            listLoading: false,
            listQuery: {
                size: 10,
                page: 0,
                sort: 'id'
            },
            page: {
                currentPage: 0,
                total: 0
            },
            dialogVisible: false,
            deleteDialogVisible: false,
            temp: {},
            showPopover: false
        }
    },
    methods: {
        getList() {
            if (!this.url) {
                return
            }
            this.listLoading = true
            this.$http
                .get(this.url + '/list', { params: this.listQuery })
                .then(response => {
                    // console.log(response.body)
                    if (response.body.code == 0) {
                        this._formatData(response.body.data)
                    }
                    this.listLoading = false
                })
                .catch(err => {
                    this.listLoading = false
                })
        },
        handleSizeChange(val) {
            this.listQuery.size = val
            this.getList()
        },
        handleCurrentChange(val) {
            this.listQuery.page = val - 1
            this.getList()
        },
        handleClick(row) {
            this.dialogVisible = true
            this.temp = row
        },
        addOne(){
            console.log('addOne')
        },
        handleDelete(row) {
            alert('删除')
            // this.$http.get(this.url + '/delete/' + row.id).then(response => {
            //     // console.log(response.body)
            //     if (response.body.code == 0) {
            //         // this.showPopover = false
            //         this.$message('删除成功')
            //         this.getList()
            //     }
            // })
        },
        refresh() {
            // 验证效果
            this.listLoading = true
            setTimeout(() => {
                this.getList()
            }, 500)
        },
        sortChange(sort) {
            if (sort.prop) {
                this.listQuery.sort = sort.prop
                if (sort.order == 'descending') {
                    this.listQuery.sort += ',desc'
                }
                this.getList()
            }
        },
        _formatData(data) {
            this.list = data.content
            this.page.currentPage = data.number + 1
            this.page.total = data.totalElements
        },
        handleDownload() {
            import('@/vendor/Export2Excel').then(excel => {
                if (this.list) {
                    const tHeader = []
                    const filterVal = []
                    this.cols.forEach(item => {
                        tHeader.push(item.label)
                        filterVal.push(item.prop)
                    })
                    const list = this.list
                    const data = this._formatJson(filterVal, list)
                    excel.export_json_to_excel(tHeader, data, 'data')
                } else {
                    this.$message('无数据')
                }
            })
        },
        _formatJson(filterVal, jsonData) {
            return jsonData.map(v =>
                filterVal.map(j => {
                    return v[j]
                })
            )
        }
    },
    mounted() {
        if (this.url) {
            this.getList()
        } else {
            console.log(this.testData.data)
            this.list = this.testData.data.content
            this.page.currentPage = this.testData.data.number + 1
            this.page.total = this.testData.data.totalElements
        }
    },
    computed: {},
    components: {}
}
</script>

<style>
</style>
