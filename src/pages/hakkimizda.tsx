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
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../content/photos/ILK_8490.jpg';
import img2 from '../content/photos/IMG_5969.jpg';
import img3 from '../content/photos/IMG_5971.jpg';
import img4 from '../content/photos/IMG_5977.jpg';
import img5 from '../content/photos/IMG_5983.jpg';
import { Link } from 'gatsby';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const rcard = css`
  .post-content {
    padding: 5px 5px;
    box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39,44,49,0.03) 1px 3px 8px;
  }
`;

class DemoCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={img1} />
          <p className="legend">Kurucularımız</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Resepsiyon</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">İç Mekan 1</p>
        </div>
        <div>
          <img src={img4} />
          <p className="legend">İç Mekan 2</p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">İç Mekan 3</p>
        </div>
      </Carousel>
    );
  }
}

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Hakkımızda</title>
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
            <PostFullTitle>Hakkımızda</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content" css={rcard}>
            <div className="post-content">
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
                Danışmanlık hizmetlerimizle ilgili daha fazla bilgi almak veya randevu almak için lütfen bizimle <Link to="/">iletişime</Link> geçin. Size yardımcı olmaktan memnuniyet duyarız.
              </p>
            </div>
            <DemoCarousel />
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
