import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./index.module.scss";
import AfterRainChapter1 from "./chapter/chapter_1";
import AfterRainChapter2 from "./chapter/chapter_2";
import { AfterRainAnimationKeyFrames } from "./model";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ChapterType1, { ChapterType1Prop } from "./chapter/chapter_type_1";
import AfterRainLoading from "./loading";
import AfterRainCharpter3 from "./chapter/chapter_3";

async function loadAssets(images: string[]) {
  const promise = Promise.all<boolean>(
    images.map((image) => {
      return new Promise((res) => {
        const img = document.createElement("img");
        img.src = image;
        img.onload = () => {
          res(true);
        };
        img.onerror = () => {
          res(false);
        };
      });
    })
  );

  return promise;
}

export const ShenZhenAfterRainPageContext = React.createContext<{
  touchTotalY: number;
}>(undefined);

const afterRainChapters: ChapterType1Prop[] = [
  {
    title: "雨仍未眠",
    cover_image_url: "/stories/shenzhen/rain2.webp",
    cover_image_style: {},
  },
  {
    title: "带着那些泛黄的往事",
    cover_image_url: "/stories/shenzhen/p3.jpg",
    cover_image_style: {},
  },
  {
    title: "把人罚去禁闭",
    cover_image_url: "/stories/shenzhen/p4.jpg",
    cover_image_style: {},
  },
  {
    title: "使劲睁眼，还有那一丝丝倔强",
    cover_image_url: "/stories/shenzhen/wall-flower.jpg",
    cover_image_style: {},
  },
  {
    title: "大地母亲并不在意",
    cover_image_url: "/stories/shenzhen/p5.jpg",
    cover_image_style: {},
  },

  {
    title: "绿衣穿上了水滴",
    cover_image_url: "/stories/shenzhen/p6.jpg",
    cover_image_style: {},
  },
  {
    title: "还有那美丽女子沐浴",
    cover_image_url: "/stories/shenzhen/p7.jpg",
    cover_image_style: {},
  },
  {
    title: "打开了窗户，阳光无法抗拒",
    cover_image_url: "/stories/shenzhen/p8.jpg",
    cover_image_style: {},
  },
  {
    title: "眷顾着城市的每个缝隙",
    cover_image_url: "/stories/shenzhen/p9.jpg",
    cover_image_style: {},
  },

  {
    title: "等待也是一份洗礼",
    cover_image_url: "/stories/shenzhen/IMG_20210306_173104.jpg",
    cover_image_style: {},
  },

  {
    title: "花儿没有畏惧",
    cover_image_url: "/stories/shenzhen/IMG_20210306_174312.jpg",
    cover_image_style: {},
  },
  {
    title: "人生总在徘徊，悲伤也不过倾盆大雨",
    cover_image_url: "/stories/shenzhen/IMG_20210306_174512.jpg",
    cover_image_style: {},
  },
  {
    title: "沉淀了泥，不再焦急",
    cover_image_url: "/stories/shenzhen/IMG_20210306_175337.jpg",
    cover_image_style: {},
  },
  {
    title: "告诉小孩继续淘气",
    cover_image_url: "/stories/shenzhen/IMG_20210306_175500.jpg",
    cover_image_style: {},
  },
  {
    title: "因为天空打破了静寂",
    cover_image_url: "/stories/shenzhen/p12.jpg",
    cover_image_style: {},
  },
  {
    title: "我住桃园，到山的南边找你",
    cover_image_url: "/stories/shenzhen/p11.jpg",
    cover_image_style: {},
  },
  // {
  //   title: "是否还有未完待续",
  //   cover_image_url: "/stories/shenzhen/IMG_20210306_210747-2.jpg",
  //   cover_image_style: {},
  // },
];

export default function ShenZhenAfterRainPage() {
  const lastClientY = useRef<number>(0);
  const touchTotalYRef = useRef<number>(0);
  const [touchTotalY, settouchTotalY] = useState(0);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    loadAssets([
      "/stories/shenzhen/IMG_20210306_172752-2.jpg",
      "/stories/shenzhen/map1.png",
      "/stories/shenzhen/IMG_20210306_210747-2.jpg",
      "/stories/shenzhen/IMG_20210306_172752-2.jpg",
      "/stories/shenzhen/IMG_20210306_173104.jpg",
      "/stories/shenzhen/IMG_20210306_174312.jpg",
      "/stories/shenzhen/IMG_20210306_174512.jpg",
      "/stories/shenzhen/IMG_20210306_175337.jpg",
      "/stories/shenzhen/IMG_20210306_175500.jpg",
      "/stories/shenzhen/IMG_20210306_175555.jpg",
      "/stories/shenzhen/p1.jpg",
      "/stories/shenzhen/p2.jpg",
      "/stories/shenzhen/p3.jpg",
      "/stories/shenzhen/p4.jpg",
      "/stories/shenzhen/p5.jpg",
      "/stories/shenzhen/p6.jpg",
      "/stories/shenzhen/p7.jpg",
      "/stories/shenzhen/p8.jpg",
      "/stories/shenzhen/p9.jpg",
      "/stories/shenzhen/p10.jpg",
      "/stories/shenzhen/p11.jpg",
      "/stories/shenzhen/p12.jpg",
      "/stories/shenzhen/IMG_20210306_181508.jpg",
      "/stories/shenzhen/IMG_20210306_181510.jpg",
    ]).then(() => {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    });

    return () => {};
  }, []);

  const changeTouchTotal = useCallback((value: number) => {
    touchTotalYRef.current = value;
    if (touchTotalYRef.current < -100) {
      touchTotalYRef.current = 0;
    }
    settouchTotalY(Math.round(touchTotalYRef.current));
  }, []);

  useEffect(() => {
    const handler = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        const clientY = touch.pageY; // useX
        if (lastClientY.current !== undefined) {
          const SCALE_FACTOR = 1.005;
          const delta = -1 * (clientY - lastClientY.current) * SCALE_FACTOR;
          if (Math.abs(delta) > 100) {
            lastClientY.current = clientY;
            return;
          }
          touchTotalYRef.current = touchTotalYRef.current + delta;
          if (touchTotalYRef.current < -100) {
            touchTotalYRef.current = 0;
          }
          settouchTotalY(Math.round(touchTotalYRef.current));
        }
        lastClientY.current = clientY;
      }
    };
    document.addEventListener("touchmove", handler, false);
    return () => {
      document.removeEventListener("touchmove", handler);
    };
  }, []);

  console.log(touchTotalY, "touchTotalY");

  if (loading) {
    return <AfterRainLoading />;
  }
  return (
    <ShenZhenAfterRainPageContext.Provider value={{ touchTotalY: touchTotalY }}>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          width: "90%",
          height: 50,
          zIndex: 1000,
          left: "50%",
          transform: "translateX(-50%)",
          display: touchTotalY > AfterRainAnimationKeyFrames[1] ? "" : "none",
        }}
      >
        <Slider
          value={touchTotalY}
          min={AfterRainAnimationKeyFrames[0]}
          className={styles.Slider}
          max={
            AfterRainAnimationKeyFrames[AfterRainAnimationKeyFrames.length - 1]
          }
          onAfterChange={(value) => {
            if (value < touchTotalY) {
              changeTouchTotal(value);
            }
          }}
          onChange={(value) => {
            // if (value < touchTotalY) {
            changeTouchTotal(value);
            // }
          }}
        />
        <p style={{ color: "#fff", fontSize: 10, fontWeight: 300 }}>
          *此滑条只可回滚
        </p>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          textAlign: "center",
          width: "100%",
          left: 0,
          zIndex: 800,
          display: touchTotalY < AfterRainAnimationKeyFrames[1] ? "" : "none",
        }}
      >
        <div className={styles.scrollDown5}></div>
      </div>
      <div
        style={{
          position: "relative",
          display: touchTotalY > AfterRainAnimationKeyFrames[1] ? "none" : "",
        }}
      >
        <h2 className={styles.title}>深圳，雨后</h2>
        <h2 className={styles.title2} style={getTitleStyle(touchTotalY)}>
          深圳，雨后
        </h2>
      </div>
      <AfterRainChapter1 touchTotalY={touchTotalY} />
      <AfterRainChapter2 touchTotalY={touchTotalY} />
      {afterRainChapters.map((ar, arI) => (
        <ChapterType1
          key={`arc${arI}`}
          chapter={ar}
          touchTotalY={touchTotalY}
          startKFrame={arI * 4 + 11}
        />
      ))}
      <AfterRainCharpter3 touchTotalY={touchTotalY} />
      {/* // 结束时把全诗显示出来 */}
    </ShenZhenAfterRainPageContext.Provider>
  );
}

function getTitleStyle(touchTotalY: number): React.CSSProperties {
  let clipTop = 100;
  if (touchTotalY >= 0 || touchTotalY <= 100) {
    clipTop = 100 - touchTotalY;
  }
  return {
    clipPath: `inset(0px 0px ${clipTop}% 0px)`,
  };
}
