import React from 'react';

const Favicon = (): JSX.Element => {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <meta name="apple-mobile-web-app-title" content="Snippit" />
            <meta name="application-name" content="Rozet" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="theme-color" content="#ffffff" />
        </>
    );
}

export default Favicon;