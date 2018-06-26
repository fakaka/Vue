<template>
    <div>
        <mu-paper :z-depth="1"
                  class="demo-loadmore-wrap">
            <mu-appbar color="teal">
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
                        <info-card v-for="(item, index) in num"
                                   :key="index"
                                   :item="{num:item}"></info-card>
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
                <mu-bottom-nav-item title="Nearby"
                                    icon="location_on"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
import InfoCard from '@/components/info-card'

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
            text: 'List'
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
                } else {
                    done()
                }
            }, 1500)
        },
        refresh() {
            this.refreshing = true
            this.$refs.container.scrollTop = 0
            setTimeout(() => {
                this.refreshing = false
                this.text = this.text === 'List' ? 'Menu' : 'List'
                this.num = 10
            }, 2000)
        },
        load() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.num += 10
            }, 2000)
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

    .info-card {
        width: 100%;
        max-width: 400px;
        margin: 0 0 5px 0;
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
