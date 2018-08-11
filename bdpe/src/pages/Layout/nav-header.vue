<template>
    <div class="nav-header">
        <div class="logo">
            <a href="/hairpin-admin/home">
                <img src="../../assets/logo.png"
                     alt="logo"
                     title="首页"
                     height="60">
            </a>
        </div>
        <el-menu background-color="#eef1f6"
                 style="flex-grow: 2"
                 mode="horizontal"
                 :activeIndex="activeIndex"
                 router>
            <el-menu-item index="job">任务调度</el-menu-item>
            <el-menu-item index="2">数据质量</el-menu-item>
            <el-menu-item index="meta">元数据</el-menu-item>
            <el-menu-item index="setting">系统设置</el-menu-item>
            <el-menu-item index="show">展示页面</el-menu-item>
        </el-menu>
        <div class="msg-btn">
            <el-badge :value="3">
                <el-button size="small"
                           icon="el-icon-message"
                           type="text">消息</el-button>
            </el-badge>
        </div>
        <el-dropdown trigger="click"
                     @command="handleCommand">
            <span class="el-dropdown-link">
                <span>
                    <svg-icon icon-class="user" /> 白发卡
                </span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">个人中心</el-dropdown-item>
                <el-dropdown-item command="setting">设置</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'nav-header',
    props: {},
    data() {
        return {
            activeIndex: 'job'
        }
    },
    methods: {
        handleCommand(command) {
            this.$message('click on item ' + command)
        }
    },
    created() {},
    computed: {},
    components: {}
}
</script>

<style scoped>
    .nav-header {
        display: flex;
    }
    .logo {
        display: inline-block;
        line-height: 60px;
        height: 60px;
        margin-right: 120px;
    }
    .msg-btn {
        position: relative;
        display: inline-block;
        /* line-height: 32px; */
        margin-right: 10px;
    }

    .el-icon--right {
        margin-left: 0px;
    }
    .el-dropdown-menu {
        padding: 10px 0 5px;
    }

    .el-menu--horizontal {
        border-right: none;
        border: 0;
    }
</style>
