import * as React from 'react';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';

import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import Grid from '../components/helpers/grid'
import { PostFullContent } from '../components/PostContent';
import IndexLayout from '../layouts';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const Contact: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>İletişim</title>
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
            <PostFullTitle>İletişim</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content" css={[SiteMain, outer]}>
            <div className="post-content" style={{ textAlign: 'center' }}>
              <iframe
                style={{ border: '0.5px groove grey', padding: '0.1em' }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d633.0311410991918!2d28.931704293439847!3d40.21665046369536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd93b77779235c7ea!2s%C3%96zel+Rozet+Aile+Dan%C4%B1%C5%9Fma+Merkezi!5e1!3m2!1sen!2str!4v1564662761367!5m2!1sen!2str"
                title="Bize ulaşın"
                width="100%"
                height="450"
                allowFullScreen
                sandbox="allow-scripts"
              />
              <br />
              <Grid
                width={320} gap={24} style={{ marginTop: '1em'}}>
                <div  style={{ textAlign: 'left' }}>
                  <strong>Açık Adresimiz: </strong>
                  <p>
                    <address>🏢 Altınşehir Mahallesi 210. Sokak No:8 Nilüfer, Bursa</address>
                  </p>
                  <strong>Email:</strong><p> <span>📧 info</span>
                  <span>@</span>
                  <span>rozetdanismanlik.com</span></p>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong>Çalışma Saatleri: </strong>
                  <p>Haftaiçi: 🕘 09:00 - 🕕 18:00 
                  <br />
                  Haftasonu: 🕘 09:00 - 🕓 16:00 
                  <br /></p>
                  <strong>Telefon Numaramız: </strong><p><a href="tel:+905432201816">📞 0543 220 18 16</a></p>

                </div>
              
              </Grid>               
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Contact;
