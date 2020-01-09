import React from "react";
import PageContainer from "../src/page_container/my_poem/my_poem";

export default class Page extends React.Component<any, any> {
  // static async getInitialProps({ query }) {
  //   fetch("https://kunsam-web-1257032883.cos.ap-guangzhou.myqcloud.com");


  // }
  render() {
    return <PageContainer />;
  }
}
