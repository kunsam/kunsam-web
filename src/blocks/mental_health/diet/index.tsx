import React from "react";
import { Parallax } from "react-parallax";

interface Props {
  scrollTop: number;
}

const insideStyles: React.CSSProperties = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const insideStyles2: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.2)",
  position: "absolute",
  top: 10,
  left: 10,
};

function Component({ scrollTop }: Props) {
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
        6. 健康饮食
      </h2>
      <p style={{ marginBottom: 10 }}>
        日常选择的饮食对于身体和情绪非常重要，方便食品，大量的碳水化合物，过甜的小吃，会加重压力的症状。
      </p>
      <Parallax
        bgImage={"/stories/mental_health/stress/food3.jpg"}
        strength={300}
      >
        <div style={{ height: 300 }}>
          <div style={insideStyles}>
            <img
              src="/stories/mental_health/stress/ban-icon.png"
              style={{ width: 80 }}
            />
          </div>
        </div>
      </Parallax>

      <Parallax
        bgImage={"/stories/mental_health/stress/food2.jpg"}
        strength={300}
        style={{ marginTop: 20 }}
      >
        <div style={{ height: 300 }}>
          <div style={insideStyles}>
            <img
              src="/stories/mental_health/stress/ban-icon.png"
              style={{ width: 80 }}
            />
          </div>
        </div>
      </Parallax>

      <p style={{ marginTop: 20, marginBottom: 20 }}>
        水果蔬菜、优质蛋白、含omega-3 fatty
        acids类食物可以使您获得更健康的生物系统，应对生活的上下起伏
      </p>

      <Parallax
        bgImage={"/stories/mental_health/stress/food1.jpg"}
        strength={300}
        style={{ marginTop: 20 }}
      >
        <div style={{ height: 300 }}>
          <div style={insideStyles2}>
            <img
              src="/stories/mental_health/stress/good.png"
              style={{ width: 40 }}
            />
          </div>
        </div>
      </Parallax>

      <Parallax
        bgImage={"/stories/mental_health/stress/food4.jpg"}
        strength={300}
        style={{ marginTop: 20 }}
      >
        <div style={{ height: 300 }}>
          <div style={insideStyles2}>
            <img
              src="/stories/mental_health/stress/good.png"
              style={{ width: 40 }}
            />
          </div>
        </div>
      </Parallax>

      <p style={{ marginTop: 20, marginBottom: 20 }}>
        健康的饮食，不仅可以减少压力，对保证身体健康，预防疾病大有裨益
      </p>

      <img
        src="/stories/mental_health/stress/diet1.jpg"
        style={{ width: "100%" }}
      />
    </div>
  );
}
const MentalHealthDiet: React.FC<Props> = React.memo(Component);
export default MentalHealthDiet;
