import { graphql } from 'gatsby';
import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import {
  PostFeed,
  PostFeedRaise,
  SiteDescription,
  SiteHeaderContent,
  SiteTitle,
} from '../styles/shared';
import { PageContext } from '../templates/post';
import PostCard from '../components/PostCard';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

export interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: PageContext;
      }[];
    };
  };
}


const About: React.FunctionComponent<IndexProps> = props => {
  return (
    <IndexLayout>
      <Helmet>
        <title>Hizmetlerimiz</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header css={[outer, SiteHeader]}>
          <div css={inner}>
            <SiteNav />
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>Hizmetlerimiz</PostFullTitle>
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
};

export default About;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "page" } }
      },
      limit: 1000, sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            type
            title
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
