/* eslint-disable @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-var-requires */
const path = require('path');
const readingTime = require('reading-time');
const { createFilePath } = require('gatsby-source-filesystem');

// import kebabCase from ('./src/components/helpers/utils.tsx');
const replaceTurkishLetters = text => {
  const replacements = {
    ı: 'i',
    ğ: 'g',
    ü: 'u',
    ş: 's',
    ö: 'o',
    ç: 'c',
    İ: 'I',
    Ğ: 'G',
    Ü: 'U',
    Ş: 'S',
    Ö: 'O',
    Ç: 'C',
  };

  return text.replace(/./g, function (char) {
    return replacements[char] || char;
  });
};

const kebabCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  // eslint-disable-next-line default-case
  if (node.internal.type === 'MarkdownRemark') {
    const { permalink, layout, primaryTag } = node.frontmatter;
    const slug = permalink || createFilePath({ node, getNode });

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // Used to determine a page layout.
    createNodeField({
      node,
      name: 'layout',
      value: layout || '',
    });

    createNodeField({
      node,
      name: 'primaryTag',
      value: primaryTag || '',
    });

    createNodeField({
      node,
      name: 'readingTime',
      value: readingTime(node.rawMarkdownBody),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 2000
        sort: { frontmatter: { date: ASC } }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              type
              title
              tags
              date
              draft
              excerpt
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
              author {
                name
                bio
                avatar {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                  }
                }
              }
            }
            fields {
              readingTime {
                minutes
              }
              layout
              slug
            }
          }
        }
      }
      allAuthorYaml {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  // Create post pages
  const posts = result.data.allMarkdownRemark.edges;

  // Create paginated index
  // TODO: new pagination
  const postsPerPage = 1000;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve('./src/templates/index.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach(({ node }, index) => {
    const { slug, layout } = node.fields;
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `post`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'post'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
        prev,
        next,
        primaryTag: node.frontmatter.tags ? node.frontmatter.tags[0] : '',
      },
    });
  });

  // Create tag pages
  const tagTemplate = path.resolve('./src/templates/tags.tsx');
  const tags = result.data.allMarkdownRemark.edges.reduce((allTags, { node }) => {
    const { tags } = node.frontmatter;
    return tags ? allTags.concat(tags) : allTags;
  }, []);
  const uniqueTags = [...new Set(tags)];

  uniqueTags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });

  // Create author pages
  const authorTemplate = path.resolve('./src/templates/author.tsx');
  result.data.allAuthorYaml.edges.forEach(({ node }) => {
    createPage({
      path: decodeURIComponent(`/yazar/${kebabCase(replaceTurkishLetters(node.name))}/`),
      component: authorTemplate,
      context: {
        author: node.name,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // adds sourcemaps for tsx in dev mode
  if (stage === 'develop' || stage === 'develop-html') {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    });
  }
};
