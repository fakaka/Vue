<template>
    <div>
        <div class="imagesbox">
            <img v-if="imgData.item.pictures.length == 1"
                 :src="imgData.item.pictures[0].img_src"
                 width="200">
            <ul class="img-list"
                v-else-if="imgData.item.pictures.length > 1">
                <li class="img-card"
                    v-for="(item, index) in imgData.item.pictures"
                    :key="index">
                    <img :src="item.img_src + '@104w_104h_1e_1c.webp'">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-content-image',
    props: {
        imgData: {
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {
        getDynamicId(str) {
            str = str + ''
            let id = parseInt(str.substring(9)) - 2
            var res = 'http://t.bilibili.com/' + str.substring(0, 9) + id
            return res
        }
    },
    created() {},
    computed: {},
    filters: {
        formatDate(val) {
            val = parseInt(val + '000')
            var d = new Date(val)
            var year = d.getFullYear()
            var month = d.getMonth() + 1
            var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
            var hour = d.getHours()
            var minutes = d.getMinutes()
            var seconds = d.getSeconds()
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
        }
    },
    components: {}
}
</script>

<style scoped>
    .imagesbox {
        /* width: 521px; */
        /* text-align: center; */
        /* border: 1px solid #e6e5ef; */
        /* border-radius: 6px; */
    }

    .imagesbox .img-list {
        line-height: 0;
        text-align: left;
        vertical-align: top;
        margin: 0;
        /* padding: 5px; */
    }

    .imagesbox .img-list .img-card {
        position: relative;
        display: inline-block;
        width: 104px;
        height: 104px;
        vertical-align: top;
        overflow: hidden;
        margin: 0 10px 10px 0;
        border-radius: 3px;
    }
    .imagesbox .img-list .img-card:hover {
        box-shadow: 0 0 4px rgba(0, 160, 214, 0.7);
    }
</style>
