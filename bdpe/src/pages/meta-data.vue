<template>
    <div>
        <el-table :data="tableData5"
                  @expand-change="expandChange"
                  style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table :data="props.row.colData"
                              border>
                        <el-table-column label="类名"
                                         prop="colName">
                        </el-table-column>
                        <el-table-column label="类型"
                                         prop="type">
                        </el-table-column>
                        <el-table-column label="长度"
                                         prop="length">
                        </el-table-column>
                        <el-table-column label="精度"
                                         prop="scale">
                        </el-table-column>
                        <el-table-column label="默认值"
                                         prop="defalut">
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column label="表名称"
                             prop="name">
            </el-table-column>
            <el-table-column label="数据源"
                             prop="dataSource">
            </el-table-column>
            <el-table-column label="用户"
                             prop="shop">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'meta-data',
    props: {},
    data() {
        return {
            tableData5: [
                {
                    id: '12987122',
                    name: 's_10010_yyyyMMdd',
                    dataSource: 'gbase',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: 'gbaseabs',
                    shopId: '10333',
                    colData: [
                        {
                            id: '12987122',
                            colName: 'agent_id',
                            type: 'string',
                            defalut: '',
                            length: 10,
                            scale: 0
                        },
                        {
                            id: '12987122',
                            colName: 'agent_name',
                            type: 'string',
                            defalut: '',
                            length: 15,
                            scale: 0
                        }
                    ]
                },
                {
                    id: '12987123',
                    name: 's_10011_yyyyMMdd',
                    dataSource: 'mysql',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: 'mysql',
                    shopId: '10333'
                },
                {
                    id: '12987125',
                    name: 'i_50040_yyyyMMdd',
                    dataSource: 'orale',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: 'scott',
                    shopId: '10333'
                },
                {
                    id: '12987126',
                    name: 'a_20024_yyyyMMdd',
                    dataSource: 'gbaseabs',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }
            ]
        }
    },
    methods: {
        expandChange(row, expandedRows) {},
        getDeatilData(row) {
            console.log(row)
        }
    },
    mounted() {},
    computed: {},
    components: {}
}
</script>

<style>
</style>
