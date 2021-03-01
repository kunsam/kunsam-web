import React from "react";
import Post1 from "../../../src/components/post/post_1";
import Head from "next/head";
import { MobileHDPx2Rem } from "../../../src/app/styles/mobile/hd";
import IRow from "../../../src/components/row";

export default function stress() {
  return (
    <div>
      <Head>
        <title>打工人，减减压; Move your ass, Reduce stress</title>
      </Head>

      <Post1
        post={{
          title: "打工人，减减压 Move your ass, Reduce stress",
          catalogue: "Mental Health",
          descrption: (
            <div style={{ marginTop: MobileHDPx2Rem(20) }}>
              <p
                style={{ fontFamily: "cursive", fontSize: MobileHDPx2Rem(28) }}
              >
                “劳动却是产生一切力量、一切道德和一切幸福的威力无比的源泉。”
              </p>
              <p style={{ textAlign: "right", fontSize: MobileHDPx2Rem(28) }}>
                —— 拉·乔乃尼奥里
              </p>
            </div>
          ),
          authorUserName: "samkun",
          coverImage: "/stories/mental_health/stress/cover1.png",
          authorAvatarUrl: "/stories/mental_health/stress/author_avatar.jpeg",
          paragraphs: [
            <p>
              劳动是一切财富的源泉，这是亘古不变的真理。我们年轻一代的90后甚至00后已经投入到现在的社会劳作当中。
            </p>,
            <IRow justify="center">
              <img src="/stories/mental_health/stress/download.jpeg" />
            </IRow>,
            <p>
              日益增长的社会经济需求，包括在生产、消费中的每个环节，带动了对增加劳动产量和劳动质量的提升的需求，
              普通人的劳动生产技能、知识水平增加速度，很难跟上各行各业拥有话语权阶层对生产预期的提升、大型公司生产流程的效率提升、各类产品质量的提升的速度所需要劳动者的劳动知识技能水平的增加速度。
            </p>,
            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/image1.png"
                style={{ width: "80vw" }}
              />
            </IRow>,

            <p>
              年轻人和以前的年轻人，都还是由DNA控制表达的一种高级生物，不会随着短世纪的推移，智商和劳动力更加出色，虽然现在的整体教育水平在提升，但我认为拥有生产资料的垄断阶级和高级知识分子
              在把劳动产出标准的质量上限拉得很高之后，却很难向下实施更高水平的培养和教育模式，这可能导致年轻人只能付出更多的时间参与劳动过程，来满足领导、公司或者社会的需要。
            </p>,
            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/unnamed.jpg"
                style={{ width: "80vw" }}
              />
            </IRow>,
            <p>“卷”</p>,
            <p>
              {" "}
              我们可以通过学习知识，来提高劳动效率，解决复杂的问题，但是问题是问题的复杂程度，也会对应的上升，本质上人们要取得竞争的胜利，对手变强，你需要变得更强。
            </p>,

            "说到Helvetica这套字体，应该是设计师们的最爱了吧。这套字体属于 Realist风格，拥有简洁现代的线条，受到大部分设计师的追捧。这种字体给人一种简单、现代化、休闲轻松的感觉。适用于扁平化设计，也适合搭配任何设计项目，包括banner、平面设计以及网页字体等。在Mac下面被认为是最佳的网页字体，但在Windows下由于Hinting的原因显示很糟糕。",
            "说到Helvetica这套字体，应该是设计师们的最爱了吧。这套字体属于 Realist风格，拥有简洁现代的线条，受到大部分设计师的追捧。这种字体给人一种简单、现代化、休闲轻松的感觉。适用于扁平化设计，也适合搭配任何设计项目，包括banner、平面设计以及网页字体等。在Mac下面被认为是最佳的网页字体，但在Windows下由于Hinting的原因显示很糟糕。",
            "说到Helvetica这套字体，应该是设计师们的最爱了吧。这套字体属于 Realist风格，拥有简洁现代的线条，受到大部分设计师的追捧。这种字体给人一种简单、现代化、休闲轻松的感觉。适用于扁平化设计，也适合搭配任何设计项目，包括banner、平面设计以及网页字体等。在Mac下面被认为是最佳的网页字体，但在Windows下由于Hinting的原因显示很糟糕。",
          ],
        }}
        danmu={[
          {
            top: 10,
            content: "年轻人真不容易",
          },
          {
            top: 40,
            content: "年轻人真不容易",
          },
          {
            top: 60,
            content: "年轻人真不容易",
          },
        ]}
      />

      {/* <Parallax bgImage={"/stories/mental_health/image1.png"} strength={-20}>
        <div style={{ height: 500 }}></div>
      </Parallax> */}

      <div style={{ height: 1500 }}></div>
    </div>
  );
}
