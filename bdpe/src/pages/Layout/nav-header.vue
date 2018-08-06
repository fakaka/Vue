<template>
    <div class="nav-header">
        <!-- <a href="/hairpin-admin/home"> -->
            <!-- <img class="logo"
                 src="../../assets/logo.png"
                 alt="logo"
                 title="首页"
                 height="50px">  -->
        <!-- </a> -->
        <!-- <img src="../../assets/logo.png"
             alt=""
             width="20"> -->
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3"
                          disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
                <a href="https://www.ele.me"
                   target="_blank">订单管理</a>
            </el-menu-item>
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
        return {}
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
    .logo {
        position: absolute;
        left: 5px;
    }
    .msg-btn {
        position: relative;
        display: inline-block;
        line-height: 32px;
        margin-right: 10px;
    }

    .el-icon--right {
        margin-left: 0px;
    }
    .el-dropdown-menu {
        padding: 10px 0 5px;
    }
</style>
