import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-HX4G9E1V2Q'
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          };
          gtag('js', new Date());

          gtag('config', 'G-HX4G9E1V2Q');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
