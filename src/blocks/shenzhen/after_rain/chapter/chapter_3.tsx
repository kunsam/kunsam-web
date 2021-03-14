import React from "react";
import { AfterRainAnimationKeyFrames } from "../model";
import styles from "../index.module.scss";

interface Props {
  touchTotalY: number;
}

function Component({ touchTotalY }: Props) {
  const delta =
    touchTotalY -
    AfterRainAnimationKeyFrames[AfterRainAnimationKeyFrames.length - 2];
  let clipXPercent = 0;
  if (delta >= 0) {
    if (delta >= 400) {
      clipXPercent = 100;
    } else {
      clipXPercent = (delta * 100) / 400;
    }
  } else {
    return null;
  }

  return (
    <>
      <p
        style={{
          marginBottom: 12,
          width: "100%",
          textAlign: "center",
        }}
        className={styles.chapterTitle}
      >
        是否还有未完待续
      </p>
      <div
        style={{
          position: "relative",
          height: 405,
          margin: "0 auto",
          width: 304,
          display: "block",
          overflow: "hidden",
        }}
      >
        <img
          src={"/stories/shenzhen/IMG_20210306_181508.jpg"}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            top: 0,
            zIndex: 10,
          }}
        />
        <img
          src={"/stories/shenzhen/IMG_20210306_181510.jpg"}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            top: 0,
            zIndex: 11,
            clipPath: `inset(0px 0px 0px ${100 - clipXPercent}%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 2,
            backgroundColor: "aquamarine",
            height: "100%",
            left: `${100 - clipXPercent}%`,
            zIndex: 12,
          }}
        />
      </div>
    </>
  );
}
const AfterRainCharpter3: React.FC<Props> = React.memo(Component);
export default AfterRainCharpter3;
