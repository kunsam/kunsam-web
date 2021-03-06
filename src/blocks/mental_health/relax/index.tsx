import React from "react";
function Component() {
  return (
    <div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 500,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        5. 改变心态
      </h2>
      <p>
        你可能无法消去压力，但是你可以控制压力对你的影响程度。放松技巧包括瑜伽，冥想或者深呼吸等能够帮助您获得身心愉悦的行为。
        规律的练习和使用，可以每天都减少你的压力水平并且获得平静或愉悦感
      </p>

      <p style={{ marginTop: 20, marginBottom: 20 }}>
        没有压力的生活既不可能，也可能会让生活毫无乐趣，提高对压力的抵抗力，乐观面对压力，能够使你的生活更加健康快乐，就像身体免疫力抵抗疾病那样，压力将你变得更加强大
      </p>

      <iframe
        src="//player.bilibili.com/player.html?aid=501957656&bvid=BV1eN41197of&cid=304667262&page=1"
        scrolling="no"
        frameBorder="no"
        allowFullScreen
        style={{ width: "100%", overflow: "scroll" }}
      ></iframe>
      <a style={{ color: "blue", fontSize: 8 }}>
        励志短片 —— “你是小丑吗？Cheems”
      </a>
    </div>
  );
}
const MentalHealRelax = React.memo(Component);
export default MentalHealRelax;
