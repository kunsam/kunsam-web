import React, { useEffect, useState } from "react";
interface Props {
  scrollTop: number;
}
function Component({ scrollTop }: Props) {
  const [clipXPercent, setclipX] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (y <= scrollTop) {
        setclipX(0);
        return;
      }
      const delta = y - scrollTop;
      if (delta > 150) {
        setclipX(100);
        return;
      }
      const x = (delta * 100) / 150;
      setclipX(x);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [scrollTop]);

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
        7. 充足睡眠
      </h2>
      <p>
        睡眠是个复杂的机制，长期的压力可能会打乱你的睡眠规律。压力会导致睡眠困难，睡眠困难会增加压力感，这是一个严重的恶性循环。
        想办法调整睡眠做到适度的休息是减少压力的重要方法
      </p>

      <div
        style={{
          width: "100%",
          height: 250,
          marginTop: 10,
          position: "relative",
        }}
      >
        <img
          src={"/stories/mental_health/stress/sleep1.jpg"}
          style={{
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        />
        <img
          src={"/stories/mental_health/stress/sleep2.jpg"}
          style={{
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 11,
            clipPath: `inset(0px 0px 0px ${100 - clipXPercent}%)`,
          }}
        />
      </div>

      <p>很多改善睡眠的方法和调节压力的方法是相同的</p>

      <ul>
        <li>与您的身体生物钟尽可能的同步</li>
        <li>降低睡眠环境亮度</li>
        <li>每日锻炼</li>
        <li>健康的吃喝</li>
        <li>放松并清空大脑</li>
        <li>提升睡眠环境</li>
      </ul>

      <p style={{ marginTop: 20, marginBottom: 20 }}>
        您也可以参考专业的资料/书籍提高睡眠质量，因为睡眠机理十分复杂
      </p>

      <img
        src="/stories/mental_health/stress/book3.jpg"
        style={{ width: "100%" }}
      />
      <a
        style={{ fontSize: 10, color: "blue", textAlign: "center" }}
        href="https://www.health.harvard.edu/staying-healthy/improving-sleep-a-guide-to-a-good-nights-rest"
      >
        链接 - Improving Sleep: A guide to a good night's rest
      </a>
    </div>
  );
}
const MentalHealthSleep: React.FC<Props> = React.memo(Component);
export default MentalHealthSleep;
