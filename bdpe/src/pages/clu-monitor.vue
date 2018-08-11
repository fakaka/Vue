<template>
    <div>
        <el-button @click="dialogVisible = true">新增Server</el-button>
        <el-button>新增Agent</el-button>
        <el-dialog :visible.sync="dialogVisible"
                   :before-close="handleClose">
            <el-steps :active="active"
                      finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
            </el-steps>
            <div v-if="active == 0">
                <el-form ref="form"
                         :model="sizeForm"
                         label-width="80px"
                         size="mini">
                    <el-form-item label="ip地址">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="用户">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="端口">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                </el-form>
            </div>

            <div v-if="active == 1">
                <el-button @click="dialogVisible = false">完成</el-button>
            </div>

            <el-button style="margin-top: 12px;"
                       @click="next">下一步</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'song',
    props: {},
    data() {
        return {
            dialogVisible: false,
            active: 0,
            sizeForm: {
                name: '',
                password: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        next() {
            if (this.active++ > 1) this.active = 0
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
        }
    },
    created() {},
    computed: {},
    components: {}
}
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: '';
    }

    .clearfix:after {
        clear: both;
    }
</style>
