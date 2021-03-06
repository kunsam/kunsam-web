import React from "react";
import { Parallax } from "react-parallax";

interface Props {
  scrollTop: number;
}

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
        2. 运动调节
      </h2>
      <p>提高身体活动水平是帮助您减轻压力，逐步感到舒适的一种策略</p>
      <p>
        由于压力大的人群可能可用的休息时间少，所以可以选取一些就近可操作的活动/运动，如走路，慢跑，跳舞等
      </p>

      <Parallax
        bgImage={"/stories/mental_health/stress/exercise.jpg"}
        strength={100}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <div style={{ height: 100 }}></div>
      </Parallax>

      <iframe
        src="//player.bilibili.com/player.html?aid=883266363&bvid=BV1hK4y1t7T4&cid=196445451&page=1"
        scrolling="no"
        frameBorder="no"
        allowFullScreen
        style={{ width: "100%", overflow: "scroll" }}
      />
      <a style={{ color: "blue", fontSize: 8 }}>
        10分钟结束放松伸展 | 新手友好 | 舒缓肌肉紧绷 | 帕老师带你运动燃脂
      </a>
    </div>
  );
}
const MentalHealthDoExercise: React.FC<Props> = React.memo(Component);
export default MentalHealthDoExercise;
