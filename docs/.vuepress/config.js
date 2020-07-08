const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "joelbrubaker.com",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "About Me",
        link: "/about-me/",
      },
      {
        text: "Bookmarks",
        link: "/bookmarks/",
      },
      // {
      //   text: "Published Thoughts",
      //   link: "/published-thoughts/",
      // },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/joelbrubaker/",
      },
      {
        text: "Medium",
        link: "https://medium.com/@joelbrubaker",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/JoelBrubaker",
      },
      {
        text: "GitHub",
        link: "https://www.github.com/thebrubaker",
      },
    ],
    sidebar: {
      // "/published-thoughts/": [
      //   {
      //     title: "Published Thoughts",
      //     collapsable: false,
      //     sidebarDepth: 2,
      //     children: [["", "Introduction"]],
      //   },
      // ],
      // "/about-me/": [
      //   {
      //     title: "About Me",
      //     collapsable: false,
      //     sidebarDepth: 2,
      //     children: [
      //       ["", "Introduction"],
      //       ["resume", "Work Experience"],
      //       ["tech-stack", "Tech Stack"],
      //     ],
      //   },
      // ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
