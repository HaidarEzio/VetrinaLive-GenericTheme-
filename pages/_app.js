import { CssBaseline } from "@material-ui/core";
import App from "next/app";
import Head from "next/head";
import { withRouter } from "next/router";
import React from "react";
import CustomThemeProvider from "src/Context/CustomThemeProvider";

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Academy exams</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CustomThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </CustomThemeProvider>
      </>
    );
  }
}

export default withRouter(MyApp);
