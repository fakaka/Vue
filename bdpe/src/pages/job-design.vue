<template>
    <div>
        流程设计页面
    </div>

</template>

<script>
import DisplayTable from '@/components/display-table'

export default {
    name: 'job-design',
    props: {},
    data() {
        return {
            score: 0,
            form: {
                item: '',
                name: '',
                score: 0,
                createTime: ''
            },
            items: null,
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date())
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date()
                            date.setTime(date.getTime() - 3600 * 1000 * 24)
                            picker.$emit('pick', date)
                        }
                    }
                ]
            },
            tableType: [
                {
                    prop: 'id',
                    label: '编号',
                    width: 50
                },
                {
                    prop: 'name',
                    label: '内容'
                },
                {
                    prop: 'score',
                    label: '分数',
                    width: 100
                },
                {
                    prop: 'createTime',
                    label: '创建时间',
                    sortable: true
                }
            ],
            activeName: 'first'
        }
    },
    methods: {
        changeItem(value) {
            this.items.forEach(item => {
                if (item.id == value) {
                    this.form.name = item.name
                    this.form.score = item.score
                    return
                }
            })
        },
        onSubmit() {
            if (this.form.name == '') {
                this.$message.error('缺少描述')
                return
            }
            // console.log(this.form)
            this.$http.post('http://localhost:8088/api/goal/add', this.form).then(response => {
                if (response.body.code == 0) {
                    this.$message('添加成功')
                    this.$refs.table.refresh()
                    this._getScore()
                }
            })
        },
        _getItems() {
            this.$http.get('http://localhost:8088/api/goal/items').then(response => {
                if (response.body.code == 0) {
                    // console.log(response.body.data)
                    this.items = response.body.data
                }
            })
        },
        _getScore() {
            this.$http.get('http://localhost:8088/api/goal/score').then(response => {
                if (response.body.code == 0) {
                    // console.log(response.body.data)
                    this.score = response.body.data
                }
            })
        }
    },
    mounted() {
        this._getScore()
        this._getItems()
    },
    computed: {},
    components: { DisplayTable }
}
</script>

<style scoped>
</style>
