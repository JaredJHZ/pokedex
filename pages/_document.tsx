import Document, { DocumentContext } from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'
import {CssBaseline} from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps;
  }

  render() {
      return(
        <Html>
            <Head>
                {CssBaseline.flush()}
                <title>Hola mundo</title>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        </Html>
      );
  }
}

export default MyDocument