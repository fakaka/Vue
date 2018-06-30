<template>
    <div>
        <mu-paper :z-depth="1"
                  class="demo-loadmore-wrap">
            <mu-appbar color="primary">
                <mu-button icon
                           slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                LoadMore
                <mu-button icon
                           slot="right"
                           @click="refresh()">
                    <mu-icon value="refresh"></mu-icon>
                </mu-button>
            </mu-appbar>
            <mu-container ref="container"
                          class="demo-loadmore-content">
                <mu-load-more @refresh="refresh"
                              :refreshing="refreshing"
                              :loading="loading"
                              :loaded-all="true"
                              @load="load">
                    <mu-list>
                        <info-card v-for="(item, index) in likeDatas"
                                   :key="index"
                                   :item="item"></info-card>
                        <div v-if="likeDatas == null || likeDatas.length == 0">
                            暂无数据
                        </div>
                    </mu-list>
                </mu-load-more>
            </mu-container>
        </mu-paper>
        <mu-container class="bottom-nav">
            <mu-bottom-nav>
                <mu-bottom-nav-item title="Recents"
                                    icon="restore"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Favorites"
                                    icon="favorite"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="设置"
                                    icon="location_on"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
import InfoCard from '@/components/info-card'
import { getLikeInfo } from '@/api/api'

var n = 0

export default {
    name: 'home',
    props: {},
    data() {
        return {
            items: [],
            num: 5,
            refreshing: false,
            loading: false,
            text: 'List',
            likeDatas: []
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
                } else {
                    done()
                }
            }, 1500)
        },
        refresh() {
            this._getLikeData()
        },
        load() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.num += 10
            }, 2000)
        },
        _getLikeData() {
            getLikeInfo('259333').then(data => {
                // console.log(data)
                this.likeDatas = data
            })
        }
    },
    mounted() {
        for (var i = 1; i <= 20; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.top = 1
        this.bottom = 20

        this._getLikeData()
    },
    computed: {},
    components: {
        InfoCard
    }
}
</script>

<style scoped>
    .info-container {
        margin-top: 56px;
        margin-bottom: 50px;
    }
    @media only screen and (min-width: 600px) {
        .info-container {
            margin-top: 64px;
        }
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: '';
    }
    .clearfix:after {
        clear: both;
    }

    .bottom-nav {
        position: fixed;
        bottom: 0;
    }

    .demo-loadmore-wrap {
        margin-bottom: 52px;
    }
</style>

<style>
    .container {
        padding: 0;
    }
</style>
