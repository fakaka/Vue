<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="正在运行"
                         name="running">
                正在运行的定时任务
            </el-tab-pane>
            <el-tab-pane label="任务管理"
                         name="first">
                <display-table :cols="tableType"
                               url="http://localhost:8088/job"
                               :toolbar="true">
                </display-table>
            </el-tab-pane>
            <el-tab-pane label="任务历史"
                         name="second">定时任务历史</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import DisplayTable from '@/components/display-table'

export default {
    name: 'crontask',
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
            testData: {
                code: 0,
                message: '成功',
                data: {
                    content: [
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
                        },
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
                    totalElements: 9,
                    totalPages: 1,
                    last: true,
                    number: 0,
                    size: 10,
                    sort: [
                        {
                            direction: 'ASC',
                            property: 'id',
                            ignoreCase: false,
                            nullHandling: 'NATIVE',
                            ascending: true,
                            descending: false
                        }
                    ],
                    first: true,
                    numberOfElements: 9
                }
            }
        }
    },
    methods: {},
    mounted() {},
    computed: {},
    components: {
        DisplayTable
    }
}
</script>

<style scoped>
</style>
