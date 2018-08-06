<template>
    <div>
        <el-input v-model="inputData" placeholder="请输入内容" style='width:400px;'></el-input>
        <el-button type="primary" icon="document" @click='handleCopy(inputData, $event)'>点击复制</el-button>
        <!-- <el-input v-model="inputData" placeholder="请输入内容" style='width:400px;'></el-input> -->
        <!-- <el-button type="primary" icon="document" v-clipboard:copy='inputData' v-clipboard:success='clipboardSuccess'>copy</el-button> -->
    </div>
</template>

<script>
import clip from '@/utils/clipboard'

export default {
    name: 'home',
    props: {},
    data() {
        return {
            inputData: 'https://github.com/fakaka/hairpin-admin'
        }
    },
    methods: {
        handleCopy(text, event) {
            clip(text, event)
        }
    },
    created() {

    },
    computed: {},
    components: {

    }
}
</script>

<style>

</style>