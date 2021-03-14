import React from "react";
import IRow from "../../../../components/row";
import styles from "../index.module.scss";
import {
  AfterRainAnimationKeyFrames,
  getDisplayStyle,
  getChapterTitleStyle,
  getFadeOutStyle,
  getFadeInStyle,
} from "../model";
interface Props {
  touchTotalY: number;
}
function Component({ touchTotalY }: Props) {
  const kframes = AfterRainAnimationKeyFrames;
  return (
    <div
      style={{
        ...getDisplayStyle(touchTotalY, kframes[7], kframes[11]),
      }}
    >
      <IRow justify="center">
        <p
          style={{
            marginBottom: 12,
            ...getDisplayStyle(touchTotalY, kframes[7], kframes[11]),
            ...getChapterTitleStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[7],
              AfterRainAnimationKeyFrames[9]
            ),
            ...getFadeOutStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[10],
              AfterRainAnimationKeyFrames[11]
            ),
          }}
          className={styles.chapterTitle}
        >
          微风开始垂头丧气
        </p>
      </IRow>
      <IRow justify="center">
        <img
          src="/stories/shenzhen/p2.jpg"
          style={{
            width: "90%",
            boxSizing: "border-box",
            border: "2px solid #fff",
            boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)",
            ...getFadeInStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[7],
              AfterRainAnimationKeyFrames[9]
            ),
            ...getFadeOutStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[10],
              AfterRainAnimationKeyFrames[11]
            ),
            ...getDisplayStyle(touchTotalY, kframes[7], kframes[11]),
          }}
        />
      </IRow>
    </div>
  );
}
const AfterRainChapter2: React.FC<Props> = React.memo(Component);
export default AfterRainChapter2;
