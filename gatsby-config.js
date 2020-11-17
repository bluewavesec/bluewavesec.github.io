module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-numbered-footnotes-patched",
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: ["png", "jpg"],
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve: "gatsby-remark-highlight-code",
            options: {
              lineNumbers: true
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/../bluewave-content/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/../bluewave-content/assets`
      }
    }
  ],
}
