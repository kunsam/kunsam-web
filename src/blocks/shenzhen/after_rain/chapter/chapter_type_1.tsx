import React from "react";
import IRow from "../../../../components/row";
import {
  AfterRainAnimationKeyFrames,
  getChapterTitleStyle,
  getDisplayStyle,
  getFadeInStyle,
  getFadeOutStyle,
} from "../model";
import styles from "../index.module.scss";

interface Props {
  touchTotalY: number;
  chapter: ChapterType1Prop;
  startKFrame: number;
}

export interface ChapterType1Prop {
  title: string;
  cover_image_url: string;
  cover_image_style?: React.CSSProperties;
}

function Component({
  touchTotalY,
  chapter: { title, cover_image_url, cover_image_style = {} },
  startKFrame,
}: Props) {
  const kframes = AfterRainAnimationKeyFrames;

  return (
    <div
      style={{
        ...getDisplayStyle(
          touchTotalY,
          kframes[startKFrame],
          kframes[startKFrame + 4]
        ),
      }}
    >
      <IRow justify="center">
        <p
          style={{
            marginBottom: 12,
            ...getDisplayStyle(
              touchTotalY,
              kframes[startKFrame],
              kframes[startKFrame + 4]
            ),
            ...getChapterTitleStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[startKFrame],
              AfterRainAnimationKeyFrames[startKFrame + 2]
            ),
            ...getFadeOutStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[startKFrame + 3],
              AfterRainAnimationKeyFrames[startKFrame + 4]
            ),
          }}
          className={styles.chapterTitle}
        >
          {title}
        </p>
      </IRow>
      <IRow justify="center">
        <img
          src={cover_image_url}
          style={{
            width: "90%",
            boxSizing: "border-box",
            border: "2px solid #fff",
            boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)",
            ...getFadeInStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[startKFrame],
              AfterRainAnimationKeyFrames[startKFrame + 2]
            ),
            ...getFadeOutStyle(
              touchTotalY,
              AfterRainAnimationKeyFrames[startKFrame + 3],
              AfterRainAnimationKeyFrames[startKFrame + 4]
            ),
            ...getDisplayStyle(
              touchTotalY,
              kframes[startKFrame],
              kframes[startKFrame + 4]
            ),
            ...cover_image_style,
          }}
        />
      </IRow>
    </div>
  );
}
const ChapterType1: React.FC<Props> = React.memo(Component);
export default ChapterType1;
