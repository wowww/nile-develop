import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-MFZBL8E909" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || []
              function gtag() {window.dataLayer.push(arguments);}
              gtag('js', new Date())
              gtag('config', 'G-MFZBL8E909')
            `}
          </Script>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/NILE_192.png" />
          <link rel="apple-touch-icon" href="/NILE_180.png" />
          {/* 22.11.10 수정 start: OG 이미지 추가 URL 풀 주소로 들어가야 합니다. 현재 도메인 기준으로 작성해뒀는데, 배포 시 경로가 안맞다면 수정 부탁드립니다. */}
          <meta name="description" content="NILE is a life platform of DAO and NFT based on the WEMIX3.0 mainnet." />
          <meta property="og:url" content="https://www.nile.io" />
          <meta property="og:site_name" content="NILE" />
          <meta property="og:title" content="NILE" />
          <meta property="og:description" content="NILE is a life platform of DAO and NFT based on the WEMIX3.0 mainnet." />
          <meta property="og:image" content="https://nile.io/NILE_OGTag.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {/* 22.11.10 수정 end: OG 이미지 추가 URL 풀 주소로 들어가야 합니다. 현재 도메인 기준으로 작성해뒀는데, 배포 시 경로가 안맞다면 수정 부탁드립니다. */}
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
