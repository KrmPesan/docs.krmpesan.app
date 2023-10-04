// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs KrmPesan",
  tagline: "Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.krmpesan.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KrmPesan", // Usually your GitHub org/user name.
  projectName: "docs.krmpesan.app", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Documentation",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "tutorial/intro",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "doc",
            docId: "video/tutorial-01",
            position: "left",
            label: "Video Tutorial",
          },
          {
            type: "doc",
            docId: "api/intro",
            position: "left",
            label: "API",
          },
          {
            type: "doc",
            docId: "sdk/intro",
            position: "left",
            label: "SDK",
          },
          {
            type: "doc",
            docId: "changelog",
            position: "left",
            label: "Changelog",
          },
          {
            href: "https://github.com/KrmPesan/docs.krmpesan.app",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/tutorial/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/KrmPesan/docs.krmpesan.app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KrmPesan. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "1C7SNO2BZZ",

        // Public API key: it is safe to commit it
        apiKey: "0597fbe9cca408c46e1f786b1baff6d5",

        indexName: "krmpesan",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
