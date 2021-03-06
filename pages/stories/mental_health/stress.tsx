import React from "react";
import Post1 from "../../../src/components/post/post_1";
import Head from "next/head";
import { MobileHDPx2Rem } from "../../../src/app/styles/mobile/hd";
import IRow from "../../../src/components/row";
import ControlStress from "../../../src/blocks/mental_health/control_stress";
import MentalHealthDoExercise from "../../../src/blocks/mental_health/exercise";
import MentalHealthTaleHelp from "../../../src/blocks/mental_health/talk_help";
import MentalHealthFeelings from "../../../src/blocks/mental_health/feelings";
import MentalHealRelax from "../../../src/blocks/mental_health/relax";
import MentalHealthDiet from "../../../src/blocks/mental_health/diet";
import MentalHealthSleep from "../../../src/blocks/mental_health/sleep";
import MentalHealthProHelp from "../../../src/blocks/mental_health/pro";

export default function stress() {
  return (
    <div>
      <Head>
        <title>年轻人，减减压; Move your ass, Reduce stress</title>
      </Head>

      <Post1
        post={{
          title: "年轻人，减减压 Move your ass, Reduce stress",
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
            <p style={{ textIndent: 20 }}>
              劳动创造了精彩纷呈的人类社会，劳动也是幸福的、光荣的，但是不少年轻人活在当代幸福社会的同时，
              却因为学习和工作的激烈竞争倍感压力
            </p>,
            <IRow justify="center">
              <img src="/stories/mental_health/stress/download.jpeg" />
            </IRow>,
            <div style={{ width: "100%", height: 1, background: "#ccc" }} />,
            <p
              style={{
                fontSize: 24,
                fontWeight: 500,
                textAlign: "center",
                fontFamily: "Helvetica",
              }}
            >
              社会变化快
            </p>,
            <p style={{ textIndent: 20 }}>
              日益增长的社会经济需求，包括在生产、消费中的每个环节，带动了对增加劳动产量和劳动质量的提升的需求，
              普通人的劳动生产技能、知识水平增加速度，很难跟上各行各业拥有话语权阶层对生产预期的提升、大型公司生产流程的效率提升、各类产品质量的提升的速度所需要劳动者的劳动知识技能水平的增加速度。
            </p>,
            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/image1.png"
                style={{ width: "80vw" }}
              />
            </IRow>,
            <div style={{ width: "100%", height: 1, background: "#ccc" }} />,
            <p
              style={{
                fontSize: 24,
                fontWeight: 500,
                textAlign: "center",
                fontFamily: "Helvetica",
              }}
            >
              我们很无奈
            </p>,
            <p style={{ textIndent: 20 }}>
              年轻人和以前的年轻人，都还是由DNA控制表达的一种高级生物，不会随着短世纪的推移，智商和劳动力更加出色，虽然现在的整体教育水平在提升，但拥有生产资料的垄断阶级和高级知识分子
              在把劳动产出标准的质量上限拉得很高之后，却很难向下实施更高水平的培养和教育模式，这可能导致年轻人只能付出更多的时间参与劳动过程，来满足领导、公司或者社会的需要。
            </p>,

            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/image4.png"
                style={{ width: "80vw" }}
              />
            </IRow>,

            <p style={{ textIndent: 20 }}>
              我们可以通过学习知识，来提高劳动效率，解决复杂的问题，但是问题是问题的复杂程度，也会对应的上升，人们要取得竞争的胜利，对手变强，你需要变得更强。
            </p>,
            <div style={{ width: "100%", height: 1, background: "#ccc" }} />,
            <p
              style={{
                fontSize: 22,
                fontWeight: 500,
                textAlign: "center",
                fontFamily: "Helvetica",
              }}
            >
              考研大军杀出来
            </p>,

            <p style={{ textIndent: 20 }}>
              记者统计发现，近年来，硕士研究生报名人数屡创新高。2018年研究生报考人数达到238万，较2017年增加了37万人，增幅达18.4%。2019年全国考研人数规模达到290万人。2020年全国考研人数比2019年高出50余万人，首次突破300万人，达341万人。2021年全国考研人数再创新高，达377万人。
            </p>,

            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/kaoyan.jpeg"
                style={{ width: "80vw" }}
              />
            </IRow>,
            <div style={{ width: "100%", height: 1, background: "#ccc" }} />,
            <p
              style={{
                fontSize: 22,
                fontWeight: 500,
                textAlign: "center",
                fontFamily: "Helvetica",
              }}
            >
              职场工作忙累坏
            </p>,
            <p>
              2019年一项调研发现，93.4％的白领认为自己的负面情绪来源于职场，工作不仅影响个人发展也是生存条件，与生活成本不对等的薪酬、复杂的人际关系、繁重的工作任务都成为了心理不能承受之重。81.8％的职场人认为工作压力是导致不健康的主要因素。四分之一的白领认为自己心理问题突出，需要心理咨询。
            </p>,

            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/71m8p1593589022.jpg"
                style={{ width: "80vw" }}
              />
            </IRow>,

            <p
              style={{
                fontSize: 24,
                fontWeight: 500,
                textAlign: "center",
                fontFamily: "Helvetica",
              }}
            >
              大家卷着来
            </p>,
            <p style={{ textIndent: 20 }}>
              要么在卷，在加班，要么在透支身体拼命玩，
              年轻人压力倍增，也不是在给社会增加焦虑，每个年代的人都吃过很多苦，但是苦味不同，老一辈生活条件艰辛，他们面对着当时艰苦条件的生存压力，而当代年轻人，存在着新时代的精神焦虑。
            </p>,

            // 说不定可以增加滚动特效
            <IRow justify="center">
              <img src="/stories/mental_health/stress/ban.png" />
            </IRow>,

            <p>婷婷，我不是搁着给大家贩卖焦虑的，先来看一些数据</p>,

            <IRow justify="center" style={{ position: "relative" }}>
              <img
                src="/stories/mental_health/stress/data1.png"
                style={{ width: "90vw" }}
              />
              <div style={{ position: "absolute", bottom: -10 }}>
                <IRow>
                  <span style={{ fontSize: MobileHDPx2Rem(16) }}>
                    Generated from US Census Bureau International Data Base
                  </span>
                  <a
                    style={{ fontSize: MobileHDPx2Rem(16) }}
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                  >
                    CC BY-SA 4.0
                  </a>
                </IRow>
              </div>
            </IRow>,

            <p>
              国人大多数进入了三十而立的黄金年龄，身体尚年轻健硕，既充满希望，又有奋斗打拼的干劲和资本。但无论是对自己的结婚问题，还是上到对父母的日渐衰老的应对，还是下到对小孩优质教育的承担，都会有不少的成本和压力
            </p>,
            <IRow justify="center" style={{ position: "relative" }}>
              <img
                src="/stories/mental_health/stress/data2.png"
                style={{ width: "80vw" }}
              />
              <div style={{ position: "absolute", bottom: -10 }}>
                <IRow>
                  <a
                    style={{ fontSize: MobileHDPx2Rem(16) }}
                    href="http://www.cet.com.cn/xwsd/2718333.shtml"
                  >
                    图片来自于中国经济新闻网
                  </a>
                </IRow>
              </div>
            </IRow>,

            <p>
              根据《2020年职场人健康情况调查报告》数据显示，当代年轻人的情绪主要收到工作压力、经济情况、婚姻爱情等原因影响，进一步可能会累计压力产生心理问题
            </p>,

            <IRow justify="center">
              <img
                src="/stories/mental_health/stress/Mental_Disorder_Silhouette.png"
                style={{ width: "90vw" }}
              />
            </IRow>,

            <p>
              严重的压力可能使人产生情绪性障碍（Mood
              disorders）、焦虑性障碍（Anxiety
              disorders）、身体型障碍（Somatoform
              disorders）、饮食性障碍（Eating disorder）等精神疾患
            </p>,

            <p>
              长期压力对身体健康和心理健康都会造成严重的损害，我们可以从以下几个方面缓解和控制压力
            </p>,

            <ControlStress scrollTop={0} />,

            <MentalHealthDoExercise scrollTop={0} />,

            <MentalHealthTaleHelp />,

            <MentalHealthFeelings scrollTop={7867} />,

            <MentalHealRelax />,

            <MentalHealthDiet scrollTop={0} />,
            <MentalHealthSleep scrollTop={11120} />,
            <MentalHealthProHelp />,
            <p>
              祝愿大家一切顺利，享受工作和生活，所有酸甜苦辣拼绘出幸福的人生！
            </p>,
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
    </div>
  );
}
