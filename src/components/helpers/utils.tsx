import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

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

const backgrounds = [
    "Hayatınıza değer katın",
    "Değişim bir adımla başlar",
    "Yeteri kadar nedeniniz varsa yapabilirsiniz!",
    "Hedefini belirle hayatını değiştir"
];

interface SloganProps {
    animDuration: number;
}

const Slogan: React.FC<SloganProps> = ({ animDuration }) => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(changeBackground, animDuration * 1000);
        return () => clearTimeout(timeout);
    }, [backgroundIndex]);

    const changeBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    return (
        <div css={TextCarousel} className="goo">
            {backgrounds[backgroundIndex]}
        </div>
    );
};

// rome-ignore lint/style/noNonNullAssertion: <explanation>
export const kebabCase = (str: string): string => str!.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!.join('-').toLowerCase();

export const replaceTurkishLetters = (text: string): string => {
    const replacements: { [key: string]: string } = {
        'ı': 'i',
        'ğ': 'g',
        'ü': 'u',
        'ş': 's',
        'ö': 'o',
        'ç': 'c',
        'İ': 'I',
        'Ğ': 'G',
        'Ü': 'U',
        'Ş': 'S',
        'Ö': 'O',
        'Ç': 'C'
    };

    return text.replace(/./g, function (char: string) {
        return replacements[char] || char;
    });
}


export default Slogan;