const navConf = require('./navConf.js');
// const sidebarConf = require('./config/sidebarConf.js');

module.exports = {
  title: '天文 wiki 知识库',
  description: '学习笔记',
  head: [
    ['link', {rel:'shortcut icon', href:'/favicon.ico'}] 
  ],
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
      '/intro/': introSidebarConf(),  // 先导
      '/learn/': learnSidebarConf(),  // 学习路线
      '/spectroscopy/concepts/': conceptsSidebarConf(),
      '/spectroscopy/spectra_process/': spSidebarConf(),
    }
  }
}

function introSidebarConf() {
  return [
    '',
    'TODO',
  ];
}

function learnSidebarConf() {
  return [
    '',
    
  ];
}

function spSidebarConf() {
  return [
    '',
    '1-degrade_resolution',
  ];
}

function conceptsSidebarConf() {
  return [
    '',
  ];
}
