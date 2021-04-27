import React from "react";
function Component() {
  return (
    <div
      style={{
        color: "white",
        padding: 10,
        paddingLeft: 20,
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>微信号</h1>
      <p style={{ textAlign: "left", marginBottom: 12 }}>
        “谈笑有鸿儒，往来无白丁”，很高兴认识新朋友，我们可以聊天、互相学习，有需要时可以进行商业合作
      </p>
      <div style={{ textAlign: "center" }}>
        <img
          src="/about/WechatIMG43.jpeg"
          style={{ width: 120, height: 120, margin: "0 auto" }}
        />
      </div>
    </div>
  );
}
const AboutSlider2 = React.memo(Component);
export default AboutSlider2;
