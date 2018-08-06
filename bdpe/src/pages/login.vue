<template>
    <div class="login_page fillcontain">
        <transition name="form-fade"
                    mode="in-out">
            <section class="form_contianer">
                <el-form :model="loginForm"
                         :rules="rules"
                         ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username"
                                  placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                  placeholder="密码"
                                  v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"
                                   @click="submitForm('loginForm')"
                                   class="submit_btn"
                                   :loading="loading">登 录</el-button>
                    </el-form-item>
                </el-form>
                <p class="tip">温馨提示：直接登录 </p>
            </section>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            devMode: true,
            loading: false
        }
    },
    methods: {
        submitForm() {
            this.loading = true
            if (this.devMode) {
                localStorage.setItem('isLogin', true)
                this.loading = false
                this.$router.push('/home')
                return
            }
            this.$http
                .post('http://localhost:8088/user/login', this.loginForm)
                .then(resp => {
                    // console.log(resp)
                    if (resp.body.code == 0) {
                        if (resp.body.data) {
                            localStorage.setItem('isLogin', true)
                            console.log('token: ', resp.body.data)
                            this.$router.push('/home')
                        } else {
                            this.$message({
                                title: 'login',
                                message: '登录失败密码账号有误',
                                type: 'error'
                            })
                        }
                    }
                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
                })
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../style/mixin';

    .form_contianer {
        .wh(320px, 210px);
        .ctp(320px, 210px);
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        .submit_btn {
            width: 100%;
            font-size: 16px;
        }
    }

    .tip {
        font-size: 12px;
        color: red;
    }

    .form-fade-enter-active,
    .form-fade-leave-active {
        transition: all 1s;
    }

    .form-fade-enter,
    .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>
