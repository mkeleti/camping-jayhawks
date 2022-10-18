import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

// eslint-disable-next-line @typescript-eslint/naming-convention
export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
            <Html>
                <Head>
                    <link
                      href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
                      rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
    );
  }
}
