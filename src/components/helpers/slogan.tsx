import React from "react"
import { css } from '@emotion/core'
import Typist from 'react-typist';

const TextCarousel = css`
  .goo {
    font-size: 3rem;
    line-height: 1.35;
    display: inline;
    box-decoration-break: clone;
    background: #fff;
    padding: 0.5rem 1rem;
    filter: url('#goo');
  }

  .goo:focus {
    outline: 0;
  }
`

// https://jsfiddle.net/69z2wepo/130855/

class Slogan extends React.Component {
	constructor(props) {
  	super(props)
    // this.backgrounds = ["https://i.imgur.com/Y0iI6Mxb.jpg", "https://i.imgur.com/qWP4aRSb.jpg", "https://i.imgur.com/flTzFAib.jpg"]
        this.backgrounds = [
            "Rozet ile hayatınıza değer katın",
            "Değişim bir adımla başlar",
            "Yeteri kadar nedeniniz varsa, yapabilirsiniz!",
            "Hedefini belirle hayatını değiştir"]
    this.state = { backgroundIndex: 0 }
    
    this.changeBackground = this.changeBackground.bind(this)
  }

  componentDidMount () {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    )
  }
  
  componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  }

  changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.props.animDuration * 1000
      )
    })
  }

  render () {
    return (
      <div style={{TextCarousel}} className="goo">{this.backgrounds[this.state.backgroundIndex]}</div>
    )
  }
}

export default Slogan