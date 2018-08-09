<template>
    <div class="location">
        <el-input placeholder="输入关键字进行过滤"
                  v-model="filterText">
        </el-input>
        <el-tree :props="defaultProps"
                 :load="loadNode1"
                 lazy
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
            defaultProps: {
                children: 'zones',
                isLeaf: 'leaf'
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
        },
        loadNode1(node, resolve) {
            if (node.level === 0) {
                return resolve([
                    {
                        label: '省经'
                    },
                    {
                        label: '接口'
                    },
                    {
                        label: '一经'
                    },
                    {
                        label: '位置'
                    }
                ])
            }
            if (node.level > 1) return resolve([])

            setTimeout(() => {
                let data = [
                    {
                        label: 'leaf',
                        leaf: true
                    },
                    {
                        label: 'zone'
                    }
                ]
                if (node.data.label == '省经') {
                    data = [
                        {
                            label: '精准营销',
                            leaf: true
                        },
                        {
                            label: '导出格式化',
                            leaf: true
                        }
                    ]
                }

                resolve(data)
            }, 500)
        }
    },
    created() {},
    computed: {},
    components: {}
}
</script>

<style scoped>
    .location {
        display: inline-block;
        width: 200px;
        height: 100%;
    }
</style>