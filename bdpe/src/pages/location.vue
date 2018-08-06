<template>
    <div style="width:200px">
        <el-input placeholder="输入关键字进行过滤"
                  v-model="filterText">
        </el-input>
        <el-tree :data="treeData"
                 :props="defaultProps"
                 ref="tree2"
                 :filter-node-method="filterNode">
        </el-tree>
    </div>

</template>

<script>
export default {
    name: 'location',
    props: {},
    data() {
        return {
            treeData: [
                {
                    label: '省经',
                    children: [
                        {
                            label: '我的临时任务',
                            children: [
                                {
                                    label: '鼓楼区'
                                },
                                {
                                    label: '玄武区'
                                },
                                {
                                    label: '秦淮区'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '接口',
                    children: [
                        {
                            label: 'Sdasdd',
                            children: [
                                {
                                    label: '三级 2-1-1'
                                }
                            ]
                        },
                        {
                            label: '二级 2-2',
                            children: [
                                {
                                    label: '三级 2-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '一经'
                },
                {
                    label: '位置'
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            filterText: ''
        }
    },
    watch: {
        filterText(val) {
            this.$refs.tree2.filter(val)
        }
    },
    methods: {
        filterNode(value, data) {
            if (!value) return true
            return data.label.indexOf(value) !== -1
        }
    },
    created() {},
    computed: {},
    components: {}
}
</script>

<style>
</style>