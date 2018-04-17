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
        repo: 'vuejs/vuepress',
        docsDir: 'docs',
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'Config Reference',
                link: '/config/'
            },
            {
                text: 'Default Theme Config',
                link: '/default-theme-config/'
            },
            {
                text: 'Data',
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
