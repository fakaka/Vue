<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index)  in levelList"
                                :key="index">
                <span v-if="index == levelList.length - 1">{{ item.name }}</span>
                <router-link v-else
                             :to="item.path">{{ item.name }}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'home',
    props: {},
    data() {
        return {
            levelList: null
        }
    },
    methods: {
        getBreadcrumb() {
            // console.log(this.$route.matched)
            let matched = this.$route.matched.filter(item => item.name)
            const first = matched[0]
            if (first && first.path !== '/home') {
                matched = [{ path: '/home', name: '主页' }].concat(matched)
            }
            this.levelList = matched
        }
    },
    created() {
        this.getBreadcrumb()
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    computed: {},
    components: {}
}
</script>

<style scoped>
    .el-breadcrumb {
        height: 45px;
        padding: 15px 12px;
        box-sizing: border-box;
        border-bottom: 1px solid #e6e6e6;
    }
</style>
