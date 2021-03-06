import React, { useEffect, useState } from "react";
import IRow from "../../../components/row";
interface Props {
  scrollTop: number;
}

const images = [
  "/stories/mental_health/stress/f1-view.png",
  "/stories/mental_health/stress/f1-au.png",
  "/stories/mental_health/stress/f1-smell.png",
  "/stories/mental_health/stress/f1-gus.png",
  "/stories/mental_health/stress/f1-body.png",
];

const imagesTexts = ["视觉", "听觉", "嗅觉", "味觉", "接触"];

function Component({ scrollTop }: Props) {
  const [transforms, settransforms] = useState<string[]>([]);
  const [showImages, setshowImages] = useState<boolean>(false);

  useEffect(() => {
    setshowImages(window.scrollY > scrollTop);
    const handler = () => {
      const y = window.scrollY;
      if (y <= scrollTop) {
        settransforms([]);
        setshowImages(false);
        return;
      }
      const delta = y - scrollTop;
      const transforms = new Array(images.length).fill("");
      const XMoveDistance = 150;
      const YMoveDistance = 150;
      images.forEach((_, i) => {
        const startOffset = i * 20;
        if (delta <= startOffset) {
          return;
        }
        if (delta <= XMoveDistance + startOffset) {
          const x = 800 - (800 * (delta - startOffset)) / XMoveDistance;
          transforms[i] = `translateX(${x}px) translateY(-100px)`;
          return;
        }
        if (delta <= XMoveDistance + startOffset + YMoveDistance) {
          const y =
            (100 * (delta - XMoveDistance - startOffset)) / YMoveDistance - 100;
          transforms[i] = `translateY(${y}px)`;
          return;
        }
        transforms[i] = `translateX(0px)`;
      });

      setshowImages(transforms.filter((a) => !!a).length === images.length);
      settransforms(transforms);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [images, scrollTop]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 500,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        4. 激发感觉
      </h2>
      <p style={{ marginBottom: 20 }}>
        视觉、听觉、味觉、嗅觉、肢体接触，一些能够带给你感官刺激或变化的行为可以帮助缓解压力。具体来说，比如听歌、逛公园、撸猫常见的休闲放松习惯，可以缓解压力产生的身体应激反应
      </p>
      <IRow
        style={{ opacity: showImages ? 1 : 0, justifyContent: "space-around" }}
      >
        {images.map((image, i) => (
          <div
            key={image}
            style={{ width: "15%", transform: transforms[i] || "" }}
          >
            <img src={image} style={{ width: "100%" }} />
            <span style={{ fontSize: 10 }}>{imagesTexts[i]}</span>
          </div>
        ))}
      </IRow>
    </div>
  );
}
const MentalHealthFeelings: React.FC<Props> = React.memo(Component);
export default MentalHealthFeelings;
