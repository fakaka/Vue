<template>
    <div class="info-container">
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
            <el-card v-for="(item, index) in items" :key="index" class="row">
                {{ item }}
            </el-card>
        </scroller>
    </div>
</template>

<script>
var n = 0
export default {
    name: 'home',
    props: {},
    data() {
        return {
            items: []
        }
    },
    methods: {
        refresh(done) {
            var self = this
            setTimeout(function() {
                var start = self.top - 1
                for (var i = start; i > start - 10; i--) {
                    self.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
                }
                self.top = self.top - 10
                // done()
                self.$refs.my_scroller.finishInfinite()
            }, 1500)
        },
        infinite: function(done) {
            var self = this
            setTimeout(function() {
                var start = self.bottom + 1
                for (var i = start; i < start + 10; i++) {
                    self.items.push(i + ' - keep walking, be 2 with you.')
                }
                self.bottom = self.bottom + 10
                n++
                console.log(n)
                if (n > 1) {
                    self.$refs.my_scroller.finishInfinite(true)
                }else{
                    done()
                }
            }, 1500)
        }
    },
    mounted() {
        for (var i = 1; i <= 20; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.top = 1
        this.bottom = 20
    },
    computed: {},
    components: {}
}
</script>

<style scoped>
    .aaaa {
        width: 100%;
        max-width: 400px;
        float: left;
        margin: 5px 0;
    }
    li {
        /* height: 50px; */
    }
</style>

<style>
    .info-item .el-card__body {
        padding: 15px;
    }
</style>
