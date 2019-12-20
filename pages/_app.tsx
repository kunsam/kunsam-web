import App from "next/app";
import "../styles/app.less";
import * as React from "react";
import "antd/dist/antd.min.css";

export default class MyApp extends App<any, any, any> {
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      current: false
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <div className="app-main" style={{ padding: 10 }}>
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}
