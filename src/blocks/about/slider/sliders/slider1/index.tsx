import React from "react";

function Component() {
  return (
    <div>
      <img
        src="/about/avatar.jpg"
        style={{
          width: 40,
          height: 40,
          borderRadius: "100%",
          marginRight: 10,
        }}
      />
      <h1>I'm kunsam</h1>
      <div style={{ paddingLeft: 20, paddingTop: 10, lineHeight: "26px" }}>
        <p style={{ marginBottom: 12 }}>
          我是前端工程师kunsam，主react应用、几何图形算法、web安全方向，现居于深圳
        </p>
        <p style={{ marginBottom: 12 }}>
          业务爱好跑步、篮球、摄影、视频剪辑、3D建模，热爱学习物理、哲学、几何学等学科
        </p>
      </div>
    </div>
  );
}

const AboutSlider1 = React.memo(Component);
export default AboutSlider1;
