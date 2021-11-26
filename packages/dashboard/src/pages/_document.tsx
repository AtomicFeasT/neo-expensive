import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* GOOGLE FONTS PRECONNECT */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          {/* Roboto */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <NextScript />
        </Head>

        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default AppDocument;