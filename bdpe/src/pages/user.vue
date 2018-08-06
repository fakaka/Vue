<template>
    <div>
        <div>
            目前的积分是
            <span style="color:red;font-size:30px">{{ score }}</span>
        </div>

        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="积分管理"
                         name="first">
                <el-row>
                    <el-col :span="15">
                        <display-table :cols="tableType"
                                       :show-detail="false"
                                       :show-delete="false"
                                       :toolbar="false"
                                       ref="table"
                                       url="http://localhost:8088/api/goal"></display-table>
                    </el-col>
                    <el-col :span="6"
                            :offset="1">
                        <el-form ref="form"
                                 :model="form"
                                 label-width="100px">
                            <el-form-item label="预设选项">
                                <el-select v-model="form.item"
                                           filterable
                                           @change="changeItem"
                                           style="width:220px"
                                           placeholder="选择预设积分">
                                    <div v-if="!(items == null)">
                                        <el-option v-for="item in items"
                                                   :key="item.id"
                                                   :label="item.name"
                                                   :value="item.id"></el-option>
                                    </div>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="积分描述">
                                <el-input v-model="form.name"
                                          style="width:220px"></el-input>
                            </el-form-item>
                            <el-form-item label="积分变换">
                                <el-input-number v-model="form.score"
                                                 :min="-20"
                                                 :max="30"
                                                 style="width:220px"
                                                 label="积分"></el-input-number>
                            </el-form-item>
                            <el-form-item label="发生时间">
                                <el-date-picker type="datetime"
                                                placeholder="选择日期"
                                                style="width:220px"
                                                value-format="yyyy-MM-dd HH:mm:ss"
                                                :picker-options="pickerOptions1"
                                                v-model="form.createTime"></el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary"
                                           @click="onSubmit">立即创建</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="积分历史"
                         name="second">积分历史</el-tab-pane>
            <el-tab-pane label="角色管理"
                         name="third">角色管理</el-tab-pane>
        </el-tabs>

    </div>

</template>

<script>
import DisplayTable from '@/components/display-table'

export default {
    name: 'user',
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
            activeName:'first'
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
