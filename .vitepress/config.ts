import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kenja Docs",
  description: "Documentation for Kenja",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "https://kenja.app" },
      { text: "Docs", link: "/" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Bot", link: "/bot" },
          { text: "Data", link: "/data" },
          { text: "Widget", link: "/widget" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/egoit/kenja-docs" },
    ],
  },
});
