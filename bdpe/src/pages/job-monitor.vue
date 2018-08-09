<template>
    <div>
        <el-form :inline="true"
                 :model="formInline"
                 class="demo-form-inline">
            <el-form-item label="job名称">
                <el-input v-model="formInline.user"
                          placeholder="job名称"></el-input>
            </el-form-item>
            <el-form-item label="分组名">
                <el-select v-model="formInline.region"
                           placeholder="分组名">
                    <el-option label="分组一"
                               value="notify"></el-option>
                    <el-option label="分组二"
                               value="sign"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="content"
                  border
                  v-loading="loading"
                  stripe>
            <el-table-column prop="id"
                             label="编号"
                             width="50">
            </el-table-column>
            <el-table-column prop="jobName"
                             label="job名称"
                             width="180">
            </el-table-column>
            <el-table-column prop="groupName"
                             label="分组名"
                             width="180">
            </el-table-column>
            <el-table-column prop="cronExp"
                             label="cron表达式">
            </el-table-column>
            <el-table-column align="center"
                             label="操作"
                             width="230"
                             class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary"
                               size="mini"
                               @click="handleUpdate(scope.row)">edit</el-button>
                    <el-button size="mini"
                               type="danger"
                               @click="handleModifyStatus(scope.row,'deleted')">delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="block"
             style="margin-top:15px;">
            <el-pagination @current-change="handleCurrentChange"
                           background
                           :current-page="curPage"
                           :page-size="5"
                           layout="total, prev, pager, next"
                           :total="9" />
        </div>

        <el-dialog title="编辑"
                   :visible.sync="dialogFormVisible">
            <el-form ref="dataForm"
                     :model="temp"
                     label-position="left"
                     label-width="70px"
                     style='width: 400px; margin-left:50px;'>
                <el-form-item label="分组名"
                              prop="groupName">
                    <el-select class="filter-item"
                               v-model="temp.groupName"
                               placeholder="Please select">
                        <el-option key="notify"
                                   label="notify"
                                   value="notify">
                        </el-option>
                        <el-option key="sign"
                                   label="sign"
                                   value="sign">
                        </el-option>
                        <el-option key="gift"
                                   label="gift"
                                   value="gift">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="date"
                              prop="timestamp">
                    <el-date-picker v-model="temp.timestamp"
                                    type="datetime"
                                    placeholder="Please pick a date">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="title"
                              prop="jobName">
                    <el-input v-model="temp.jobName"></el-input>
                </el-form-item>
                <el-form-item label="cronExp"
                              prop="cronExp">
                    <el-input v-model="temp.cronExp"></el-input>
                </el-form-item>

                <!-- 
                <el-form-item :label="$t('table.status')">
                    <el-select class="filter-item"
                               v-model="temp.status"
                               placeholder="Please select">
                        <el-option v-for="item in  statusOptions"
                                   :key="item"
                                   :label="item"
                                   :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('table.importance')">
                    <el-rate style="margin-top:8px;"
                             v-model="temp.importance"
                             :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                             :max='3'></el-rate>
                </el-form-item>
                <el-form-item :label="$t('table.remark')">
                    <el-input type="textarea"
                              :autosize="{ minRows: 2, maxRows: 4}"
                              placeholder="Please input"
                              v-model="temp.remark">
                    </el-input>
                </el-form-item> -->
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <el-button @click="dialogFormVisible = false">cancel</el-button>
                <el-button type="primary"
                           @click="updateData">confirm</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import DisplayTable from '@/components/display-table'

export default {
    name: 'job-monitor',
    props: {},
    data() {
        return {
            tableType: [
                {
                    prop: 'id',
                    label: 'id',
                    width: 60,
                    sortable: true,
                    align: 'center'
                },
                {
                    prop: 'groupName',
                    label: '组名',
                    width: 80,
                    sortable: true
                },
                {
                    prop: 'jobName',
                    label: '任务名',
                    width: 120,
                    sortable: true
                },
                {
                    prop: 'description',
                    label: '任务描述'
                },
                {
                    prop: 'cronExp',
                    label: 'cron 表达式'
                },
                {
                    prop: 'className',
                    label: '类名'
                }
            ],
            activeName: 'first',
            content: [],
            content1: [
                {
                    id: 1,
                    groupName: 'notify',
                    jobName: 'music_rank',
                    description: null,
                    cronExp: '0 0 9 * * 4 ',
                    className: null,
                    param: ''
                },
                {
                    id: 2,
                    groupName: 'sign',
                    jobName: 'weibo_topic',
                    description: null,
                    cronExp: '0 0 12 0 0 * *',
                    className: null,
                    param: null
                },
                {
                    id: 3,
                    groupName: 'sign',
                    jobName: 'bilibili_live',
                    description: null,
                    cronExp: '0 0 12 0 0 * *',
                    className: null,
                    param: null
                },
                {
                    id: 4,
                    groupName: 'gift',
                    jobName: 'douyu',
                    description: null,
                    cronExp: '0 0 12 0 0 * *',
                    className: null,
                    param: null
                },
                {
                    id: 5,
                    groupName: 'gift',
                    jobName: 'bilibili_live',
                    description: null,
                    cronExp: '0 0 12 * * ? *',
                    className: null,
                    param: null
                }
            ],
            content2: [
                {
                    id: 6,
                    groupName: 'notify',
                    jobName: 'news',
                    description: 'osc 资讯',
                    cronExp: '0 0 12 * * ? *',
                    className: 'com.mj.hairpin.job.NewsJob',
                    param: null
                },
                {
                    id: 7,
                    groupName: 'notify',
                    jobName: 'weibo',
                    description: null,
                    cronExp: '0 0/5 * * * ? ',
                    className: null,
                    param: 'lyt'
                },
                {
                    id: 8,
                    groupName: 'notify',
                    jobName: 'ins',
                    description: null,
                    cronExp: '0 0/5 * * * ? ',
                    className: null,
                    param: 'lyt'
                },
                {
                    id: 9,
                    groupName: 'notify',
                    jobName: 'before_work',
                    description: null,
                    cronExp: '0 0 9 * * * ',
                    className: null,
                    param: null
                }
            ],
            curPage: 0,
            formInline: {
                user: '',
                region: ''
            },
            loading: false,
            dialogFormVisible: false,
            temp: {}
        }
    },
    methods: {
        onSubmit() {
            this.$message('过滤')
        },
        handleCurrentChange(page) {
            this.loading = true
            setTimeout(() => {
                if (page == 1) {
                    this.content = this.content1
                } else {
                    this.content = this.content2
                }
                this.loading = false
            }, 1000)
        },
        handleUpdate(row) {
            this.temp = Object.assign({}, row) // copy obj
            this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData() {
            const tempData = Object.assign({}, this.temp)
            // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            tempData.timestamp = +new Date(tempData.timestamp)
            for (const v of this.content) {
                if (v.id === this.temp.id) {
                    const index = this.content.indexOf(v)
                    console.log(this.temp)
                    this.content.splice(index, 1, this.temp)
                    break
                }
            }
            this.dialogFormVisible = false
            this.$notify({
                title: '成功',
                message: '更新成功',
                type: 'success',
                duration: 2000
            })
        }
    },
    mounted() {
        this.content = this.content1
    },
    computed: {},
    components: {
        DisplayTable
    }
}
</script>

<style scoped>
</style>
