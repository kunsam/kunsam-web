import React from "react";
import { Parallax } from "react-parallax";

interface Props {}
function Component({}: Props) {
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
        3. 寻求倾诉
      </h2>
      <p>
        当您不安或焦虑不安时，一次简单的面对面交流能够触发激素的分泌以减少压力，简单的话语交流或者友好的对视能够帮助你放松紧张的神经系统。有人认为社交可能会产生压力，但是和合适的人增加社交联系有助于压力的缓解。
      </p>
      <Parallax
        bgImage={"/stories/mental_health/stress/talk.jpg"}
        strength={100}
        style={{ marginTop: 20 }}
      >
        <div style={{ height: 150 }}></div>
      </Parallax>
      <p style={{ marginTop: 20, marginBottom: 20 }}>
        如果您无法向身边的人诉诸苦恼，或者社交圈子小，也可以寻找陌生人进行真诚的沟通，说不定还能找到人生的真爱
      </p>
      <iframe
        src="//player.bilibili.com/player.html?aid=373636876&bvid=BV1Go4y1o7xH&cid=284243371&page=1"
        scrolling="no"
        frameBorder="no"
        allowFullScreen
        style={{ width: "100%", overflow: "scroll" }}
      />
      <a style={{ color: "blue", fontSize: 8 }}>
        【苏星河】我竟从恋爱软件里…悟出了人生的真谛
      </a>
    </div>
  );
}
const MentalHealthTaleHelp: React.FC<Props> = React.memo(Component);
export default MentalHealthTaleHelp;
