<template>
    <div class="app-container">
        <github></github>
        <clipboard></clipboard>
        <br>
        <el-button v-waves
                   type="primary">水波纹效果</el-button>
        <br>
        <br>
        <a class="btn"
           @click="toggleShow">设置头像</a>
        <my-upload field="img"
                   @crop-success="cropSuccess"
                   @crop-upload-success="cropUploadSuccess"
                   @crop-upload-fail="cropUploadFail"
                   v-model="show"
                   :width="300"
                   :height="300"
                   url="/upload"
                   :params="params"
                   :headers="headers"
                   img-format="png"></my-upload>
        <img :src="imgDataUrl"
             height="60"
             style="border-radius: 50%">
    </div>
</template>

<script>
import Clipboard from '@/components/clipboard'
import Github from '@/components/github'
import MyUpload from 'vue-image-crop-upload'

import waves from '@/directive/waves/index.js' // 水波纹指令

export default {
    name: 'test',
    props: {},
    directives: {
        waves
    },
    data() {
        return {
            show: false,
            params: {
                token: '123456798',
                name: 'avatar'
            },
            headers: {
                smail: '*_~'
            },
            imgDataUrl: '', // the datebase64 url of created image,
            star: 5
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        },
        /**
         * crop success
         *
         * @param imgDataUrl
         * @param field
         */
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------')
            this.imgDataUrl = imgDataUrl
        },
        /**
         * upload success
         *
         * [param] jsonData  server api return data, already json encode
         * [param] field
         */
        cropUploadSuccess(jsonData, field) {
            console.log('-------- upload success --------')
            console.log(jsonData)
            console.log('field: ' + field)
        },
        /**
         * upload fail
         *
         * [param] status    server api return error status, like 500
         * [param] field
         */
        cropUploadFail(status, field) {
            console.log('-------- upload fail --------')
            console.log(status)
            console.log('field: ' + field)
        }
    },
    created() {},
    computed: {},
    components: {
        Clipboard,
        Github,
        MyUpload
    }
}
</script>

<style scoped>
    .app-container {
        position: relative;
    }
    .ve-line {
        width: 90%;
    }
</style>
