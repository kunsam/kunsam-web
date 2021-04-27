import React from "react";
function Component() {
  return (
    <div style={{ color: "white", padding: 10 }}>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>个人公众号</h1>
      <p style={{ textAlign: "left", marginBottom: 10 }}>
        个人公众号主要提供个人诗集、哲学漫谈文章等内容
      </p>
      <div style={{ textAlign: "center" }}>
        <img
          src="/about/qrcode_for_gh_1117163c5305_258.jpg"
          style={{ width: 120, height: 120 }}
        />
      </div>
      <p
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          fontFamily: "ui-serif",
          fontSize: 12
        }}
      >
        “我只知道一件事，就是我什么都不知道”
      </p>
    </div>
  );
}
const AboutSlider3 = React.memo(Component);
export default AboutSlider3;
