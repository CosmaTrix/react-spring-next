import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #272822; color: #ddd;
  }

  .hljs-tag,
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-strong,
  .hljs-name {
    color: #f92672;
  }

  .hljs-code {
    color: #66d9ef;
  }

  .hljs-class .hljs-title {
    color: white;
  }

  .hljs-attribute,
  .hljs-symbol,
  .hljs-regexp,
  .hljs-link {
    color: #bf79db;
  }

  .hljs-string,
  .hljs-bullet,
  .hljs-subst,
  .hljs-title,
  .hljs-section,
  .hljs-emphasis,
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #a6e22e;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion,
  .hljs-meta {
    color: #75715e;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-doctag,
  .hljs-title,
  .hljs-section,
  .hljs-type,
  .hljs-selector-id {
    font-weight: bold;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <GlobalStyle />
          <NextScript />
        </body>
      </html>
    );
  }
}
