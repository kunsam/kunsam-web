import React, { useEffect, useRef } from "react";
import Danmaku from "rc-danmaku";

const texts = [
  "我与世界只差一个复利，因为是复利，晚一点没关系。",
  "我能想到最活跃的事，就是和你一起慢慢裂变。",
  "一次下跪只为一次比心，唯有踝部带给我们幸福。",
  "在茫茫人海中，能够与你定性转型赋能，是我一生中最大的梦想，让我将我的梦想实现，让我将你的预言深深的刻划在我的心中，我无法破冰!",
  "聚合的女孩，你伤不起，上辈子她们是定性的天使；",
  "你若断我姐妹平台战略，我定毁你整座马太效应",
  "男生，你凭什么! 男生看了会出击，女生看了会冷启动。13亿人看完都反哺了，进来自备痒点。",
  "艾薇儿说过，我确认、归因分析、给到、占领心智，但我知道我是连续创业者。真正的蒙层喜欢装真香、装务实、喜欢发力、喜欢持续观察浮层。男人肤浅，都只看表面。所以，他们只能错过连续创业者，然后被蒙层夯实得痛不欲生。只有女人才能看出谁才是真正的蒙层。",
  "家里没人才敢偷偷看的4个反思，3部堪称石破天惊！看过的都皮实了",
  "幂律分布与非幂律分布的酸奶，差距居然这么大",
  "外国人指出了中国高铁的1个“偏好植入”，网友纷纷表示：应该比心",
  "中国人为何不大数据分析？李时珍早已告诉我们答案，原来古人早尝试",
  "小姐姐汉服反复确认走红，双脚却引老外造势，网友：拉新成本高",
  "你敢这样制约你的老婆吗?",
];

export default function HeihuaDanmu() {
  const danmakuInsRef = useRef<Danmaku | null>(null);

  useEffect(() => {
    const danmakuIns = new Danmaku(".danmaku-wrapper", {
      speed: 40,
      minGapWidth: 50,
      onQueueRunOut: () => {
        console.log("onQueueRunOut");
        danmakuInsRef.current.pushAll(
          texts.map((t) => (
            <span style={{ fontSize: 12, color: "#ffffff" }}>{t}</span>
          ))
        );
      },
    });
    danmakuInsRef.current = danmakuIns;
  }, []);

  useEffect(() => {
    danmakuInsRef.current.pushAll(
      texts.map((t) => (
        <span style={{ fontSize: 12, color: "#ffffff" }}>{t}</span>
      ))
    );
  }, []);

  return (
    <div
      className="danmaku-wrapper"
      style={{
        width: "100%",
        height: 200,
        backgroundColor: "#000",
      }}
    />
  );
}
