const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Joel Brubaker",
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
    ["link", { rel: "icon", href: "/favicon-64.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    ["link", { rel: "mask-icon", href: "/icon.svg", color: "#3eaf7c" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { name: "theme-color", content: "#1c64f2" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
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
    logo: "/icon.svg",
    smoothScroll: true,
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    algolia: {
      apiKey: "62821756a0d86466420279d42a3d31f2",
      indexName: "joelbrubaker",
    },
    nav: [
      {
        text: "About Me",
        link: "/about-me/",
      },
      {
        text: "Bookmarks",
        link: "/bookmarks/",
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
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true,
    },
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
  ],
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.config.js")],
  },
};
