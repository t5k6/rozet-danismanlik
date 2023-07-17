import React from 'react';
import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
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
                    <div css={inner}>
                        <article className="post page" css={[PostFull, NoImage]}>
                            <PostFullHeader className="post-full-header">
                                <PostFullTitle className="post-full-title">Hizmetlerimiz</PostFullTitle>
                            </PostFullHeader>

                            <PostFullContent className="post-full-content">
                                <div className="post-content">
                                    <h5>
                                        A starter template for Gatsby <br /> GitHub:{' '}
                                        <a href="https://github.com/scttcper/gatsby-casper">scttcper/gatsby-casper</a>
                                    </h5>
                                    <p>
                                        Rozet Danışmanlık, Uzman Klinik Psikolog Gökçin Çaylar ve Uzman
                                        Psikolog Zeliha Özata tarafından 2018 yılında kurulmuştur. 2007 yılında yolları
                                        Uludağ Üniversitesi Hastanesi’nde kesişen iki psikolog iki yıl aynı hastanede
                                        çalışmışlardır. Yolları yıllar sonra aynı dönemde dünyaya getirdikleri çocukları ile
                                        birlikte mesleki hayatlarına farklı bir yön verme isteklerinin ortaklığında tekrar
                                        kesişmiştir.{' '}
                                    </p>
                                    <p>
                                        Rozet Danışmanlık, psikolojinin daha geniş kitlelere yayılması için
                                        aile danışmanlığı, bireysel danışmanlık ve kurumsal danışmanlık alanlarında güncel
                                        bilimsel bilgilerin ışığında hizmet vermeyi amaçlamaktadır.
                                    </p>
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
