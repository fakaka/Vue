import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/pages/404'
import Login from '@/pages/login'
import Layout from '@/pages/Layout/layout'

import Job from '@/pages/job'

// 管理模块
import Home from '@/pages/Home'
import User from '@/pages/user'
import Song from '@/pages/song'
import Blog from '@/pages/blog'
import Task from '@/pages/crontask'

// API
import Weibo from '@/pages/weibo'
import Doc from '@/pages/doc'
import Download from '@/pages/download'

// 开发
import Chart from '@/pages/chart'
import Icon from '@/pages/svg-icons'

// 设置
import Setting from '@/pages/setting'
import System from '@/pages/system'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    base: '/hairpin-admin/',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '*', redirect: '/404' },
        { path: '/404', component: NotFound },
        {
            path: '/',
            name: '登录',
            component: Login
        },

        {
            path: '/admin',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: '/home',
                    name: '主页',
                    component: Home
                },
                {
                    path: '/job',
                    component: Job
                },
                {
                    path: '/user',
                    name: '用户管理',
                    component: User
                },
                {
                    path: '/song',
                    name: '歌曲管理',
                    component: Song
                },
                {
                    path: '/blog',
                    name: '博客管理',
                    component: Blog
                },
                {
                    path: '/weibo',
                    name: '微博管理',
                    component: Weibo
                },
                {
                    path: '/task',
                    name: '定时任务',
                    component: Task
                },
                {
                    path: '/doc',
                    name: '文案管理',
                    component: Doc
                },
                {
                    path: '/download',
                    name: '下载管理',
                    component: Download
                },
                {
                    path: '/icon',
                    name: 'Icon',
                    component: Icon
                },
                {
                    path: '/chart',
                    name: '图表',
                    component: Chart
                },
                {
                    path: '/setting',
                    name: '基本设置',
                    component: Setting
                },
                {
                    path: '/system',
                    name: '系统设置',
                    component: System
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        next()
    }
    if (localStorage.getItem('isLogin') == 'true') {
        next()
    } else {
        next('/')
    }
})

router.afterEach((to, from) => {
    let title = to.name ? '管理后台 - ' + to.name : 'hairpin - 管理后台'
    document.title = title
})

export default router
