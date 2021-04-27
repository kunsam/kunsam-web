import React from "react";
import Message from "rc-message";
import "rc-message/assets/index.css"

function Component() {
  return (
    <div style={{ position: "relative" }}>
      <h1 style={{ fontSize: 20, marginTop: 60 }}>
        无敌（喝茶后）← 虚弱（喝茶前）
      </h1>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <img
          src={"/health_tea/55i55g.jpeg"}
          style={{ width: "80vw", objectFit: "cover" }}
        />
      </div>

      <div style={{ marginTop: 100, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            borderRadius: 4,
            width: 300,
            textAlign: "center",
            height: 60,
            lineHeight: "60px",

            backgroundColor: "darkorange",
          }}
          onClick={() => {
            Message.success({
              content: "加我微信18818275878免费请你喝！",
            });
          }}
        >
          <span style={{ color: "white", textShadow: "none", fontSize: 24 }}>
            立刻来一杯
          </span>
        </div>
      </div>
    </div>
  );
}
const HealthTeaSlider4 = React.memo(Component);
export default HealthTeaSlider4;
