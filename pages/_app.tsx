import App from "next/app";
import * as React from "react";
import "../src/layouts/mainapp/mainapp.scss";
import "swiper/css/swiper.css";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";

export default class MyApp extends App<any, any, any> {
  componentDidMount() {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="stylesheet" href={`/css/global.css`} />
        </Head>
        <div className="app-main">
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}
