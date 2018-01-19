import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Search from '@/pages/search'
import Bilibili from '@/pages/bilibili'
import Music from '@/pages/music'
import News from '@/pages/news'
import Todo from '@/pages/todo'
import Test from '@/pages/test'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/music',
            name: 'music',
            component: Music
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/bilibili',
            name: 'bilibili',
            component: Bilibili
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/todo',
            name: 'todo',
            component: Todo
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        
    ]
})
