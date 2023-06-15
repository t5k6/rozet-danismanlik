// tslint:disable:no-http-string
import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';
import Twitter from '../icons/twitter';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';

const HomeNavRaise = css`
  @media (min-width: 900px) {
    position: relative;
    top: -70px;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;
`;

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
  @media (max-width: 412px) {
    font-size: 1em;
    padding-left: 0;
  }
`;

const NavStyles = css`
  background: rgba(12, 14, 12, 0.64);
  padding: 0 1em;
  display: flex;
  margin: 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: #fff;
    opacity: 0.8;
    @media (max-width: 512px) {
      text-transform: capitalize;
      padding: 2px 3px;
    }
    @media (max-width: 360px) {
      font-size: 0.85em;
      margin: 0;
    }
  }

  li a:hover {
    text-decoration: none;
    color: orange;
    border-bottom: 1px solid orange;
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  a:last-of-type {
    padding-right: 20px;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  border: #fff 1px solid;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }
`;

interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNaveState {
  isOpen: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNaveState> {
  subscribe = React.createRef<SubscribeModal>();

  constructor(props: SiteNavProps) {
    super(props);
    this.state = { isOpen: false };
  }
  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    const { isHome = false } = this.props;
    return (
      <React.Fragment>
        <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
          <SiteNavLeft>
            {!isHome && <SiteNavLogo />}
            <ul css={NavStyles} role="menu">
              {/* TODO: mark current nav item - add class nav-current */}
              <li role="menuitem">
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li role="menuitem">
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              <li role="menuitem">
                <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
              </li>
              <li role="menuitem">
                <Link to="/ekibimiz">Ekibimiz</Link>
              </li>
              <li role="menuitem">
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </SiteNavLeft>
          <SiteNavRight>
            <SocialLinks>
              {config.facebook && (
                <a
                  css={SocialLink}
                  href={config.facebook}
                  target="_blank"
                  title="Facebook"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              )}
              {config.instagram && (
                <a
                  css={SocialLink}
                  href={config.instagram}
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              )}
              {config.twitter && (
                <a
                  css={SocialLink}
                  href={config.twitter}
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              )}
            </SocialLinks>
            {/*{config.showSubscribe && (
            <SubscribeButton onClick={this.openModal}>Abone ol</SubscribeButton>
          )}
          {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}*/}
          </SiteNavRight>
        </nav>
      </React.Fragment>
    );
  }
}

export default SiteNav;
