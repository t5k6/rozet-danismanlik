const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Özel Rozet Aile Danışma Merkezi',
    description: 'Özel Rozet Aile Danışma Merkezi’nde alanında uzman psikologlar tarafından, yetişkin danışmanlığı, aile ve çift danışmanlığı, çocuk ve ergen danışmanlığı, zeka ve gelişim testleri, okumayı güçlendirme ve dikkat geliştirme programı başta olmak üzere; kurumsal alanda danışmanlık ve eğitimler verilmektedir.',
    siteUrl: 'https://rozetdanismanlik.com', // full path to blog - no ending slash
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1170,
              quality: 90,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://rozetdanismanlik.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-feed',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-132364954-1',
        // change this with env value
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rozet Danışmanlık",
        short_name: "Rozet",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/fav.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
