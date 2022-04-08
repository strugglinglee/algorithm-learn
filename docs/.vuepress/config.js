module.exports = {
  title: '算法学习',
  description: 'Just playing around',
  base: '/algorithm-learn/',
  configureWebpack: {
    resolve: {
      alias: {
        // "@alias": "path/to/some/dir",
      },
    },
  },
  // theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '了解更多',
        items: [
          { text: 'Github', link: 'https://github.com/strugglinglee' },
          {
            text: '博客',
            link: 'https://blog.strugglinglee.cn/',
          },
        ],
      },
    ],
    sidebar: [
    //   {
    //     title: 'JS基础',
    //     // path: '/JavaScript',
    //     collapsable: true,
    //     children: [],
    //   }
    ],
  },
};