// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前言',
    link: '/preface/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '学习文章',
        items: [
          { text: '学习路径', link: '/pages/7ba074/' },
        ],
      },
      {
        text: '暖心群',
        items: [
          { text: '暖心群问题', link: '/pages/cc3a2a/' },
        ],
      },
    ],
  },
  {
    text: '初识YonBIP',
    link: '/firstknow/',
    items: [
      { text: '产品总体介绍', link: '/pages/69c2f5/' },
      { text: 'YonBuilder低代码开发介绍', link: '/pages/6821c2/' },
      { text: '原厂开发介绍', link: '/pages/10c797/' },
      { text: '数字化工作台介绍', link: '/pages/c3b245/' },
      { text: '开发者中心介绍', link: '/pages/511d9d/' },
    ],
  },
  {
    text: '基于YonBIP的开发',
    link: '/development/',
    items: [
      { text: '自建应用开发', link: '/pages/5dbb4a/' },
      { text: '原厂扩展开发', link: '/pages/e1c7b0/' },
      { text: '集成开发', link: '/pages/30d426/' },
      { text: '门户开发', link: '/pages/323fc8/' },
      { text: '环境迁移', link: '/pages/514609/' },
      { text: '移动开发(原生)', link: '/pages/6dbaaf/' },
    ],
  },
  {
    text: 'YonBIP实现原理',
    link: '/principle/',
    // items: [
    //   { text: '学习', link: '/pages/f2a556/' },
    //   { text: '面试', link: '/pages/aea6571b7a8bae86/' },
    //   { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
    //   { text: '实用技巧', link: '/pages/baaa02/' },
    //   { text: '友情链接', link: '/friends/' },
    // ],
  },
  // { text: '关于', link: '/about/' },
  // {
  //   text: '收藏',
  //   link: '/pages/beb6c0bd8a66cea6/',
  //   // items: [
  //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
  //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
  //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
  //   // ],
  // },
  // {
  //   text: '索引',
  //   link: '/archives/',
  //   items: [
  //     { text: '分类', link: '/categories/' },
  //     { text: '标签', link: '/tags/' },
  //     { text: '归档', link: '/archives/' },
  //   ],
  // },
]
