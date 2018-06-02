const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
    title: 'Hairpin Document',
    description: 'hairpin 文档',
    dest: 'vuepress',
    base,
    head: [['link', { rel: 'icon', href: `/logo.png` }]],
    port: 3005,
    serviceWorker: true,
    themeConfig: {
        repo: 'fakaka/Vue',
        docsDir: 'docs',
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: '学习笔记',
                link: '/note/'
            },
            {
                text: 'API',
                link: '/data/'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started',
                        'basic-config',
                        'assets',
                        'markdown',
                        'using-vue',
                        'custom-themes',
                        'deploy'
                    ]
                }
            ]
        }
    }
}
