import React from "react";

function Component() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>社交平台</h1>
      <p style={{ marginBottom: 12 }}>分享个人生活、摄影练习作品等内容</p>
      <h2>抖音号：kunsam624</h2>
      <h2>B站：喵和西瓜丶</h2>

      <div>
        <h2>ins号：</h2>
        <img src="/about/WechatIMG44.jpg" style={{ width: 120, height: 120 }} />
      </div>
    </div>
  );
}

const AboutSlider5 = React.memo(Component);
export default AboutSlider5;
