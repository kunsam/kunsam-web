// 0-150(0-1) 文字
// 150-450(1-3) 章节标题出现+淡出 地图淡入+放大
// 450-750（3-5） 地图淡出 标题出现 图片淡入
// 750 - 900 持续
// 6-7 图片 标题淡出
// 7-9 下一章图片标题淡入
// 9-10 持续
// 10-11 图片 标题淡出

const normalChaptersKeyFrames = new Array(16 * 4)
  .fill(null)
  .map((_, i) => 1650 + (i + 1) * 150);

const getLastFrame = () => {
  return AfterRainAnimationKeyFrames[AfterRainAnimationKeyFrames.length - 1];
};
export const AfterRainAnimationKeyFrames = [
  0,
  150,
  300,
  450,
  600,
  750,
  900,
  1050, // 7
  1200, // 8
  1350, // 9
  1500, // 10
  1650, // 11
  ...normalChaptersKeyFrames,
];

AfterRainAnimationKeyFrames.push(getLastFrame() + 150);
AfterRainAnimationKeyFrames.push(getLastFrame() + 150);

export function getDisplayStyle(
  touchTotalY: number,
  left: number,
  right: number
): React.CSSProperties {
  if (touchTotalY > left && touchTotalY < right) {
    return {};
  }
  return {
    display: "none",
  };
}

export function getChapterTitleStyle(
  touchTotalY: number,
  left: number,
  right: number
): React.CSSProperties {
  if (touchTotalY > left && touchTotalY < right) {
    const delta = touchTotalY - left;
    const width = (delta * 100) / (right - left);
    return {
      width: `${width}%`,
    };
  }
  if (touchTotalY >= right) {
    return {
      width: "100%",
    };
  }
}

export function getFadeInStyle(
  touchTotalY: number,
  left: number,
  right: number
): React.CSSProperties {
  if (touchTotalY < left) {
    return {
      opacity: 0,
    };
  }
  if (touchTotalY > left && touchTotalY < right) {
    const delta = touchTotalY - left;
    const opacity = (delta * 1) / (right - left);
    return {
      opacity,
    };
  }
  return {
    opacity: 1,
  };
}

export function getFadeOutStyle(
  touchTotalY: number,
  left: number,
  right: number
): React.CSSProperties {
  if (touchTotalY > left && touchTotalY < right) {
    const delta = touchTotalY - left;
    const opacity = 1 - (delta * 1) / (right - left);
    return {
      opacity,
    };
  }
}
