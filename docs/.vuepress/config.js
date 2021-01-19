const navConf = require('./navConf.js');
// const sidebarConf = require('./config/sidebarConf.js');

module.exports = {
  title: '天文 wiki 知识库',
  description: '学习笔记',
  plugins: ['@vuepress/back-to-top',
            '@vuepress/last-updated',
            'vuepress-plugin-mathjax',
            {
              target: 'chtml',
              macros: {
                '*': '\\times',
              },
            },
  ],
  base: '/Astro/',
  repo: 'iScottMark/Astro',
  themeConfig: {
    nav: navConf,
    displayAllHeaders: false,
    lastUpdated: '最后更新于',
    sidebarDepth: 2,
    collapsable: true,
    
    // 侧边栏 （又臭又长）
    sidebar: {
      // 先导
      '/intro/': [
      '',
      'TODO',
      ],
      /* ------------ */
      
    }
  }
}
