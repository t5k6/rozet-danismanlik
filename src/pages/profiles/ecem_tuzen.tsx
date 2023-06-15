import IndexLayout from '../../layouts';
import Wrapper from '../../components/Wrapper';
import SiteNav from '../../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../../styles/shared';
import React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../../templates/post';
import { PostFullContent } from '../../components/PostContent';
import Footer from '../../components/Footer';
import Helmet from 'react-helmet';

import AccordionGokcin from '../cv_content/accordion_content_gokcin';
import AccordionZeliha from '../cv_content/accordion_content_zeliha';

import * as TeamPhoto from '../../content/photos/ILK_8490.jpg';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
  .post-full-content {
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
      'user1'
      'user2';
  }
  .user1 {
    grid-area: user1;
  }
  .user2 {
    grid-area: user2;
  }
  .username {
    margin: 0 0 12px 0;
    padding: 0;
  }
  @media only screen and (min-width: 980px) {
    .post-full-content {
      grid-gap: 1em;
      grid-template-columns: 45% 45%;
      grid-template-areas: 'user1 user2';
    }
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Ekibimiz - Ecem Tüzen</title>
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
            <PostFullTitle>Ecem Tüzen</PostFullTitle>
          </PostFullHeader>
          <div style={{ textAlign: 'center', marginBottom: '2em' }}>
            <img
              src={TeamPhoto}
              alt="Gokçin ve Zeliha"
              style={{ maxWidth: '75%', textAlign: 'center' }}
            />
          </div>
          <PostFullContent className="post-full-content">
            <div className="user">
              <h5 className="username">Gökçin Çaylar</h5>
              <AccordionGokcin />
            </div>

            <div className="user">
              <h5 className="username">Zeliha Özata</h5>
              <AccordionZeliha />
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
