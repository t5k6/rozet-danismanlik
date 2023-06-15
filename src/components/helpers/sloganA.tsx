import React from "react"
import { css } from '@emotion/core';

// https://jsfiddle.net/69z2wepo/130855/

const TextCarousel = css`
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 160px;
    overflow:hidden;
    
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    line-height: 40px;
    color: #ecf0f1;
    
    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 40px;
      padding: 0 40px;
      text-align: center;
  
      &:before {
        content: '[';
        left: 0;
      }
  
      &:after {
        content: ']';
        position: absolute;
        right: 0;
      }
  
      &:after, &:before {
        position: absolute;
        top: 0;
        
        color: #16a085;
        font-size: 42px;
        line-height: 40px;
        
        -webkit-animation-name: opacity;
        -webkit-animation-duration: 6s;
        -webkit-animation-iteration-count: infinite;
        animation-name: opacity;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }
  
      &__text {
        display: inline;
        float: left;
        margin: 0;
      }
  
      &__list {
        margin-top: 0;
        padding-left: 110px;
        text-align: left;
        list-style: none;
        
        -webkit-animation-name: change;
        -webkit-animation-duration: 10s;
        -webkit-animation-iteration-count: infinite;
        animation-name: change;
        animation-duration: 10s;
        animation-iteration-count: infinite;
  
        &__item {
          line-height:40px;
          margin:0;
        }
      }
    }
  }
  
  @-webkit-keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @-webkit-keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  
  @-o-keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @-o-keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  
  @-moz-keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @-moz-keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  
  @keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
`

class SloganA extends React.Component {
    render () {
        return (
        <div className="content" css={[TextCarousel]}>
            <div className="content__container">                
                <ul className="content__container__list">
                <li className="content__container__list__item">Rozet ile hayatınıza değer katın</li>
                <li className="content__container__list__item">Değişim bir adımla başlar</li>
                <li className="content__container__list__item">Yeteri kadar nedeniniz varsa, yapabilirsiniz!</li>
                <li className="content__container__list__item">Hedefini belirle hayatını değiştir</li>
                </ul>
            </div>
            </div>
        )
    }
}

export default SloganA