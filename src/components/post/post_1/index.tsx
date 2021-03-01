import React, { useEffect, useState } from "react";
import AppSvgs from "../../app_svgs";
import IRow from "../../row";
import styles from "./index.module.scss";
import { Parallax, Background } from "react-parallax";
import Danmu, { IDanmu } from "../../danmu/danmu";
import Avatar from "../../avatar";
import { MobileHDPx2Rem } from "../../../app/styles/mobile/hd";

interface Props {
  post: {
    catalogue: string;
    title: string;
    coverImage: string;
    authorAvatarUrl: string;
    authorUserName: string;
    paragraphs: (string | React.ReactNode)[];
    descrption: string | React.ReactNode;
  };
  danmu: IDanmu[];
}

// <Parallax bgImage={"/stories/mental_health/image1.png"} strength={-20}>
// <div style={{ height: 500 }}></div>
// </Parallax>

function Component({
  post: {
    catalogue,
    title,
    coverImage,
    authorAvatarUrl,
    authorUserName,
    paragraphs,
    descrption,
  },
  danmu,
}: Props) {
  const [coverHeight, setcoverHeight] = useState(350);
  const [tranfromY, settranfromY] = useState(50);
  const [opacity, setopacity] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const minDelta = Math.min(scrollY, 100);
      setcoverHeight(350 - minDelta);

      const minDelta2 = Math.min(scrollY, 50);
      settranfromY(50 + minDelta2);

      const opacityCoe = Math.min(scrollY / 100, 1);
      setopacity(opacityCoe);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <div className={styles.CoverContainer}>
        <div className={styles.ctrlHeader}>
          <div className={styles.ctrlHeaderInner}>
            <IRow justify="space-between">
              {/* <div className={styles.iconFill}> */}
              <AppSvgs id="LeftArrow" />
              {/* </div> */}
              <div className={styles.iconFill}>
                <AppSvgs id="Share" className={styles.icon} />
              </div>
            </IRow>
          </div>
        </div>

        <Parallax strength={coverHeight}>
          <Background>
            <img
              className={styles.coverImage}
              src={coverImage}
              style={{
                height: coverHeight,
              }}
            />

            <div className="mask" />
          </Background>
          <div className="parallax-inner" style={{ height: coverHeight }}>
            <Danmu danmu={danmu} />
          </div>
        </Parallax>
      </div>

      <div className={styles.ContentContainer}>
        <div
          className={styles.ContentInnerContainer}
          style={{ transform: `translateY(-${tranfromY}px)` }}
        >
          <div>
            <p
              style={{
                color: "#59E6FF",
                fontFamily: "monospace",
                marginBottom: MobileHDPx2Rem(20),
              }}
            >
              {catalogue}
            </p>
          </div>
          <h1 style={{ fontFamily: "Helvetica", fontWeight: 500 }}>{title}</h1>

          <div
            style={{
              opacity: 1 - opacity,
              height: opacity === 1 ? 0 : MobileHDPx2Rem(200),
              transition: "height .5s ease",
            }}
          >
            {descrption}
          </div>

          <IRow
            align="center"
            style={{ opacity: opacity, marginTop: MobileHDPx2Rem(40) }}
          >
            <Avatar uri={authorAvatarUrl} />
            <span
              style={{
                marginLeft: MobileHDPx2Rem(16),
                fontSize: MobileHDPx2Rem(34),
                marginTop: MobileHDPx2Rem(8),
              }}
            >
              {authorUserName}
            </span>
          </IRow>

          <div className={styles.paragraphContainer} style={{ opacity }}>
            {paragraphs.map((para: string | React.ReactNode, parai) => (
              <div key={`${parai}`} className={styles.paraText}>
                {para}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Post1: React.FC<Props> = React.memo(Component);
export default Post1;
