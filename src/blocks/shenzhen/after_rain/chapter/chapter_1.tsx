import React from "react";
import {
  AfterRainAnimationKeyFrames,
  getChapterTitleStyle,
  getDisplayStyle,
  getFadeInStyle,
  getFadeOutStyle,
} from "../model";
import styles from "../index.module.scss";
import IRow from "../../../../components/row";

interface Props {
  touchTotalY: number;
}

function getMapStyle(touchTotalY: number): React.CSSProperties {
  const left = AfterRainAnimationKeyFrames[2];
  const right = AfterRainAnimationKeyFrames[3];
  if (touchTotalY >= left && touchTotalY <= right) {
    const relativeY = touchTotalY - left;
    let scale = Math.min(2, 1 + (relativeY * 1) / (right - left));
    return {
      transform: `scale(${scale})`,
    };
  }
  if (touchTotalY > right) {
    return {
      transform: `scale(2)`,
    };
  }
}

function getImage1Style(touchTotalY: number): React.CSSProperties {
  const relativeY = touchTotalY - 300;
  if (relativeY >= 0 && relativeY <= 400) {
    let opacity = Math.min(1, 0 + (relativeY * 1) / 200);
    return {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      zIndex: 6,
      opacity,
      objectFit: "contain",
      boxSizing: "border-box",
      border: "2px solid #fff",
      boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)",
    };
  }
  return {
    opacity: 0,
  };
}

function Component({ touchTotalY }: Props) {
  const kframes = AfterRainAnimationKeyFrames;
  return (
    <div
      style={{
        ...getDisplayStyle(touchTotalY, kframes[1], kframes[7]),
      }}
    >
      <IRow justify="center">
        <p
          style={{
            marginBottom: 12,
            ...getDisplayStyle(touchTotalY, kframes[1], kframes[3]),
            ...getChapterTitleStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[1],
              AfterRainAnimationKeyFrames[3]
            ),
            ...getFadeOutStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[2],
              AfterRainAnimationKeyFrames[3]
            ),
          }}
          className={styles.chapterTitle}
        >
          2021.03.06 桃园
        </p>
      </IRow>

      <IRow justify="center">
        <p
          style={{
            marginBottom: 12,
            ...getDisplayStyle(touchTotalY, kframes[3], kframes[7]),
            ...getChapterTitleStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[3],
              AfterRainAnimationKeyFrames[5]
            ),
            ...getFadeOutStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[6],
              AfterRainAnimationKeyFrames[7]
            ),
          }}
          className={styles.chapterTitle}
        >
          天空逐渐心灰意冷
        </p>
      </IRow>

      <IRow justify="center">
        <div
          style={{
            width: 320,
            height: 500,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: 400,
              width: 320,
              zIndex: 5,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(/stories/shenzhen/map1.png)`,
              transformOrigin: `0px 400px`,
              transform: "scale(1)",
              ...getFadeInStyle(
                touchTotalY,
                AfterRainAnimationKeyFrames[1],
                AfterRainAnimationKeyFrames[2]
              ),
              ...getMapStyle(touchTotalY),
              ...getFadeOutStyle(
                touchTotalY,
                AfterRainAnimationKeyFrames[3],
                AfterRainAnimationKeyFrames[5]
              ),
              ...getDisplayStyle(touchTotalY, kframes[1], kframes[5]),
            }}
          ></div>
          <img
            src="/stories/shenzhen/p1.jpg"
            style={{
              top: 50,
              left: 0,
              zIndex: 6,
              width: "100%",
              position: "absolute",
              objectFit: "contain",
              boxSizing: "border-box",
              border: "2px solid #fff",
              boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)",
              ...getFadeInStyle(
                touchTotalY,
                AfterRainAnimationKeyFrames[3],
                AfterRainAnimationKeyFrames[5]
              ),
              ...getFadeOutStyle(
                touchTotalY,
                AfterRainAnimationKeyFrames[6],
                AfterRainAnimationKeyFrames[7]
              ),
              ...getDisplayStyle(touchTotalY, kframes[3], kframes[7]),
            }}
          />
        </div>
      </IRow>
    </div>
  );
}
const AfterRainChapter1: React.FC<Props> = React.memo(Component);
export default AfterRainChapter1;
