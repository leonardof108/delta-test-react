import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <title>Delta Global Teste</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
