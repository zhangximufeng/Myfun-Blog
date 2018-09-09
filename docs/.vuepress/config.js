module.exports = {
  // 启用自定义的主题
  theme: 'yubisaki',
  title: 'Myfun',
  description: 'MuFeng Blog',
  head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  port: 3000,
  // Google Analytics ID
  ga: 'UA-125456610-1',
  // PWA support
  serviceWorker: true,
  // fuck IE
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)
    }
  },
  // 主题的一些配置
  themeConfig: {
    // 博客背景图片
    background: `/background/path`,
    // github card
    github: 'zhangximufeng',
    // 博客的 logo
    logo: '/logo/path',
    // 定制文章标题颜色
    accentColor: '#ac3e40',
    // 每页显示的文章数量
    per_page: 5,
    // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd',
    // 开启标签功能
    tags: true,
    // gitalk 的配置项, 不支持 flipMoveOptions
    comment: {
      clientID: 'b60281f91fb7db642a5c',
      clientSecret: 'f1ae3e088a2556f63d64a9eb99a322be7890c84a',
      repo: 'GitHub repo',
      owner: 'GitHub repo owner',
      admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
      perPage: 5,
      // id: location.pathname,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    },
    // 和 vuepress 默认主题一样, 定制导航栏上的链接
    nav: [
        { text: 'HOME', link: '/', root: true }, // 指定它为博客根目录
        { text: 'TAGS', link: '/tags/', tags: true }, // 指定它为标签目录
        { text: 'GITHUB', link: 'https://github.com/zhangximufeng' },
        { text: '关于我', link: '/about/' },
    ]
  }
}
