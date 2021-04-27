import React from "react";
function Component() {
  return (
    <div>
      <div>
        <h1>个人博客</h1>
        <p>个人博客主要提供web基础知识、基础算法、web安全、webgl等相关文章</p>
        <a href="https://www.notion.so/kunsam624/6c731a59990b4daa99dee412aeea4658">
          点击访问
        </a>
      </div>

      <div style={{ marginTop: 10 }}>
        <h1>图形实验室</h1>
        <p>图形实验室主要展示一些图形、特效、3D实验性作品</p>
        <a href="https://svg-lab.vercel.app/production">点击访问</a>
      </div>
    </div>
  );
}
const AboutSlider4 = React.memo(Component);
export default AboutSlider4;
