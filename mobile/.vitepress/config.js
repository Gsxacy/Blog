module.exports = {
  title: "Gsxacy",
  base: "/",
  description: "Keep on going never give up",
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  searchMaxSuggestions: 10,
  lastUpdated: true,
  themeConfig: {
    logo: "avatar.jpg",
    smoothScroll: true,
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "引导",
        items: [
          {
            text: "JS",
            link: "/docs/JS/",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/gsxacy",
        target: "_blank",
      },
      {
        text: "Gitee(码云)",
        link: "https://gitee.com/gsxacy",
        target: "_blank",
      },
    ],
    sidebar: [
      {
        text: "首页",
        link: "/",
        collapsable: false,
      },
      {
        text: "JS",
        link: "/docs/JS/index",
        children: [],
      },
    ],
  },
};
