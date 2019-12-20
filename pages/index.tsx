import React from "react";
import fetch from "isomorphic-unfetch";

class HelloUA extends React.Component<any, any> {
  static async getInitialProps({ req }) {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    const { stars } = this.props;
    return <div style={{ textAlign: "center" }}>我是首页</div>;
  }
}

export default HelloUA;
