import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="my-0 mx-auto h-screen w-full max-w-screen-xl px-5 lg:px-20">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
