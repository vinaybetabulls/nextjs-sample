import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import getConfig from "next/config";
import React from "react";

const { serverRuntimeConfig } = getConfig();
const buildTag = `${serverRuntimeConfig.buildNum} | ${serverRuntimeConfig.buildDate} | ${serverRuntimeConfig.buildEnv}`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={serverRuntimeConfig.siteLocale}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div
            dangerouslySetInnerHTML={{
              __html: `<!-- ${buildTag} -->`,
            }}
          />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  // console.log(`renderPage - pathname:[${ctx?.pathname}] asPath:[${ctx?.asPath}]`)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  // console.log(`getInitialProps - pathname:[${ctx?.pathname}] asPath:[${ctx?.asPath}]`)
  const start = Date.now();
  try {
    // Add a random delay
    if (process.env.SSG_THROTTLE_DELAY) {
      await randomDelay(process.env.SSG_THROTTLE_DELAY || 0);
    }

    const initialProps = await Document.getInitialProps(ctx);
    console.log(
      `getInitialProps complete in ${Date.now() - start}ms for [${ctx?.asPath}]`
    );

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  } catch (e) {
    console.error(
      `getInitialProps failed in ${Date.now() - start}ms for [${ctx?.asPath}]`,
      e
    );
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomDelay = (maxDelayMs) =>
  delay(Math.floor(Math.random() * maxDelayMs));
