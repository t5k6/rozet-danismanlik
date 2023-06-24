import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

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
    margin-top: 40px;
    background: #fff;
  }

  .post-title {
    padding: 40px 170px 20px;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function About() {
  const Head = () => <title>Hakkımızda</title>
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
              <PostFullHeader className="post-title">
                <PostFullTitle className="post-full-title">Hakkımızda</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>
                    Hayatınızı Dönüştürecek Uzman Rehberlik
                  </h5>
                  <p>
                    Özel Rozet Aile Danışma Merkezi, Uzman Klinik Psikolog Gökçin Çaylar ve Uzman
                    Psikolog Zeliha Özata tarafından 2018 yılında kurulmuştur. 2007 yılında yolları
                    Uludağ Üniversitesi Hastanesi’nde kesişen iki psikolog iki yıl aynı hastanede
                    çalışmışlardır. Yolları yıllar sonra aynı dönemde dünyaya getirdikleri çocukları ile
                    birlikte mesleki hayatlarına farklı bir yön verme isteklerinin ortaklığında tekrar
                    kesişmiştir.{' '}
                  </p>
                  <p>
                    Özel Rozet Aile Danışma Merkezi, aile danışmanlığı, bireysel danışmanlık ve kurumsal danışmanlık alanlarında güncel bilimsel bilgilerin ışığında hizmet verme amacı güder. Psikolojinin daha geniş kitlelere ulaşması için çaba sarf eder ve bireylere, ailelere ve kurumlara destek olur. Bizimle çalışan herkese profesyonel, saygılı ve güvenli bir danışmanlık deneyimi sunmak için çaba gösteririz.
                  </p>
                  <p>
                    Rozet Aile Danışma Merkezi olarak, her bireyin benzersiz olduğunu ve her durumun özgün olduğunu anlarız. Kişiselleştirilmiş yaklaşımlar kullanarak, her bir müşterinin ihtiyaçlarına uygun çözümler sunarız. Sizlere, güvenli bir ortamda destek olmak ve sağlıklı bir yaşam sürmeniz için araçlar sağlamak için buradayız.
                  </p>
                  <p>
                    Danışmanlık hizmetlerimizle ilgili daha fazla bilgi almak veya randevu almak için lütfen bizimle <Link to="/iletisim">iletişime</Link> geçin. Size yardımcı olmaktan memnuniyet duyarız.
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
