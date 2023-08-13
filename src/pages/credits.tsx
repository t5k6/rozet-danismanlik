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

function Credits() {
    const Head = () => <title>Credits</title>
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
                                <PostFullTitle className="post-full-title">Credits</PostFullTitle>
                            </PostFullHeader>

                            <PostFullContent className="post-full-content">
                                <div className="post-content">
                                    <p>
                                        {/* Based on <Link role="" to="https://github.com/scttcper/gatsby-casper" activeClassName="nav-current">gatsby-casper theme
                                        </Link>                                    </p> */}
                                        Powered by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener"
                                        >GatsbyJS</a>.
                                    </p>
                                    <p>
                                        Template by <a
                                            href="https://github.com/scttcper/gatsby-casper" target="_blank" rel="noreferrer noopener">gatsby-casper theme</a>.
                                    </p>
                                    <p>
                                        Built by <a href="https://github.com/t5k6" target="_blank" rel="noreferrer noopener">Tahsin Kocaman</a>.
                                    </p>
                                    <p>
                                        <h3>Photo Credits</h3><br />
                                        <p>
                                            <a href="/">Homepage</a>: <br />
                                            Photo by <a href="https://unsplash.com/@kulesh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stas Kulesh</a> on <a href="https://unsplash.com/photos/Lw8uFds0hj0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                                        </p>
                                        <p>
                                            <a href="/tags/hizmetlerimiz/">Services</a>: <br />
                                            Photo by <a href="https://unsplash.com/@element5digital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Element5 Digital</a> on <a href="https://unsplash.com/photos/OyCl7Y4y0Bk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br />
                                            Photo by <a href="https://unsplash.com/@benwhitephotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben White</a> on <a href="https://unsplash.com/photos/pV5ckb2HEVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br />
                                            Photo by <a href="https://unsplash.com/@goodmood77?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalya Zaritskaya</a> on <a href="https://unsplash.com/photos/SIOdjcYotms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br />
                                            Photo by <a href="https://unsplash.com/@michelenstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michelen Studios</a> on <a href="https://unsplash.com/photos/Q9nycOKHwJA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br />
                                        </p>
                                        {/* <a href="/yazar/zeliha-ozata/">Articles</a>: <br /> */}


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

export default Credits;
