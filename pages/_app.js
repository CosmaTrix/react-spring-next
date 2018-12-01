import React from "react";
import App, { Container } from "next/app";

import Menu from "../components/Menu";
import Page from "../components/Page";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Menu />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}
