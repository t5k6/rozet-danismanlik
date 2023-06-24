import React from 'react';
import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import Grid from '../components/helper/grid'
import IndexLayout from '../layouts';
import {
    inner,
    outer,
    SiteArchiveHeader,
    SiteHeader,
    SiteMain,
    SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
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
`;

function About() {
    const Head = () => <title>iletişim</title>
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
                    <div css={inner}>
                        <article className="post page" css={[PostFull, NoImage]}>
                            <PostFullHeader className="post-full-header">
                                <PostFullTitle className="post-full-title">İletişim</PostFullTitle>
                            </PostFullHeader>

                            <PostFullContent className="post-full-content">
                                <div className="post-content" style={{ textAlign: 'center' }}>
                                    <iframe
                                        style={{ border: '0.5px groove grey', padding: '0.1em' }}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.6874019015136!2d28.893042599999998!3d40.216015999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11b494a5feeb%3A0xb8ee016bc75c6932!2sArkat%20Plaza%20Bursa!5e0!3m2!1sen!2str!4v1687090736710!5m2!1sen!2str"
                                        title="Bize ulaşın"
                                        width="100%"
                                        height="450"
                                        allowFullScreen
                                        sandbox="allow-scripts"
                                    />
                                    <br />
                                    <Grid
                                        width={320} gap={24} style={{ marginTop: '1em' }}>
                                        <div style={{ textAlign: 'left' }}>
                                            <strong>Açık Adresimiz: </strong>
                                            <p>
                                                <address>🏢 Yüzüncüyıl, Arkat Plaza Bursa, İzmir Yolu Cd 12. Blok A, No: 3, 16120 Nilüfer/Bursa</address>
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
                    </div>
                </main>
                <Footer />
            </Wrapper>
        </IndexLayout>
    );
}

export default About;
