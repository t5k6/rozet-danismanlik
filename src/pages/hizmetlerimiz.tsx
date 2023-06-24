import React from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import type { PageContext } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
  .post-full-header {
    text-align: center;
  }
`;

export type IndexProps = {
  children: React.ReactNode;
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: any;
    header: any;
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
};

function About(props: IndexProps) {
  const Head = () => <title>Hizmetlerimiz</title>
  return (
    <IndexLayout>
      <Head />
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Hizmetlerimiz</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <blockquote>
                  <p>
                    Özel Rozet Aile Danışma Merkezi’nde alanında uzman psikologlar tarafından, yetişkin danışmanlığı, aile ve çift danışmanlığı, çocuk ve ergen danışmanlığı, zeka ve gelişim testleri, okumayı güçlendirme ve dikkat geliştirme programı başta olmak üzere; kurumsal alanda danışmanlık ve eğitimler verilmektedir.
                  </p>
                </blockquote>
              </div>
            </PostFullContent>
          </article>
          <div css={inner}>
            <div css={[PostFeed, PostFeedRaise]}>
              {props.data.allMarkdownRemark.edges.map(post => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} />
                  )
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int, $limit: Int) {
    logo: file(relativePath: { eq: "img/logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    header: file(relativePath: { eq: "img/stas-kulesh-55191-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, quality: 100, layout: FIXED, formats: [AUTO, WEBP, AVIF])
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: {
        draft: { ne: true },
        type: { eq: "page"}
      }}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            date
            tags
            draft
            excerpt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
              }
            }
            author {
              name
              bio
              avatar {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, breakpoints: [40, 80, 120])
                }
              }
            }
          }
          excerpt
          fields {
            readingTime {
              text
            }
            layout
            slug
          }
        }
      }
    }
  }
`;

