/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Özel Rozet Aile Danışma Merkezi',
    description:
      'Özel Rozet Aile Danışma Merkezi’nde alanında uzman psikologlar tarafından, yetişkin danışmanlığı, aile ve çift danışmanlığı, çocuk ve ergen danışmanlığı, zeka ve gelişim testleri, okumayı güçlendirme ve dikkat geliştirme programı başta olmak üzere; kurumsal alanda danışmanlık ve eğitimler verilmektedir.',
    siteUrl: 'https://rozetdanismanlik.com', // full path to blog - no ending slash
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml.name',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 90,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://rozetdanismanlik.com',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { draft: { ne: true } } }
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Rozet Danışmanlık Blog',
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RozetDanismanlik',
        short_name: 'Rozet',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/content/img/rozet-logo.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-132364954-1',
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
  ],
};
