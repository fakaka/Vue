<template>
    <div class="info-card">
        <div class="info-card__header clearfix">
            <span>微博消息</span>
            {{read}}
            <el-button @click="changeRead" style="float: right; padding: 3px 0" type="text">标为已读</el-button>
        </div>
        <div class="info-card__body">
            <bilibili-like :likeData="item"></bilibili-like>
        </div>
        <div class="info-card__footer">
            <div style="flex-grow:1">
                <i class="el-icon-edit"></i>
            </div>
            <div style="flex-grow:1">
                <i class="el-icon-share"></i>
            </div>
            <div style="flex-grow:1">
                <i class="el-icon-delete"></i>
            </div>
        </div>
    </div>
</template>

<script>
import InfoCardImage from '@/components/info-card-image'
import BilibiliLike from '@/components/bilibili-like'

export default {
    name: 'info-card',
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            read: false,
            likeData: {}
        }
    },
    methods: {
        refresh() {},
        changeRead() {
            // 发送请求
            this.read = !this.read
        }
    },
    mounted() {
        
    },
    computed: {},
    components: {
        InfoCardImage,
        BilibiliLike
    }
}
</script>

<style scoped>

    .info-card {
        width: 100%;
        max-width: 400px;
        margin: 0 0 5px 0;
        border-top: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: 0.3s;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .info-card__header {
        padding: 10px 15px;
        border-bottom: 1px solid #ebeef5;
        box-sizing: border-box;
    }

    .info-card__body {
        padding: 15px;
    }

    .info-card__footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px solid #ebeef5;
        box-sizing: border-box;
        padding: 5px; 
    }
</style>
