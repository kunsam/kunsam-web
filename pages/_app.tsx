import App from "next/app";
import * as React from "react";
import "swiper/css/swiper.css"

export default class MyApp extends App<any, any, any> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <div className="app-main">
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}
