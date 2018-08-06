<template>
    <div>
        <display-table :cols="tableType"
                       url="http://localhost:8088/api/doc"
                       :toolbar="true"></display-table>
    </div>
</template>

<script>
import DisplayTable from '@/components/display-table'

export default {
    category: 'doc',
    props: {},
    data() {
        return {
            tableType: [
                {
                    prop: 'id',
                    label: 'id',
                    width: 50
                    // sortable: true
                },
                {
                    prop: 'content',
                    label: '内容'
                },
                {
                    prop: 'category',
                    label: '分类',
                    status: 'tag',
                    width: 60
                },
                {
                    prop: 'tag',
                    label: '标签',
                    status: 'tag',
                    width: 60
                }
            ]
        }
    },
    methods: {},
    created() {},
    computed: {},
    components: {
        DisplayTable
    }
}
</script>

<style>
</style>
