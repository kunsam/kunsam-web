import styles from "./index.module.scss";

const POST4 = () => (
  <div className={styles.post1}>
    <p>
      当晨曦染红了大海时，
      <br />
      我想起了你；
      <br />
      当月夜穿透了流泉时，
      <br />
      我又想起了你。
    </p>

    <p>
      每当遥远的路上，扬起来沙尘，
      <br />
      我看到了你；
      <br />
      深沉的夜里，流浪者在歧路上忧虑时，
      <br />
      我也看到了你。
    </p>

    <p>
      浪起来了，在深沉的涛声里，
      <br />
      我听到了你；
      <br />
      万籁俱静，在我常去倾听大自然的幽林中，
      <br />
      我也听到了你。
    </p>
    <p>
      我就在你的身旁，尽管你似乎在那遥远之处。
      <br />
      你离我是这样的近！
      <br />
      太阳落山了，一会儿群星就会向我闪烁。
      <br />
      噢，你要是也在那儿，该多好啊！
    </p>
  </div>
);

export default {
  id: "POST4",
  title: "《一棵开花的树》",
  upload: {
    author: "sam",
    create_date: "2019-12-24",
  },
  brief: {
    backgroundUrl: "/static/image/post4_brief.png",
  },
  content: {
    backgroundUrl: "/static/image/post4_content.png",
  },

  musicUrl: "/static/music/InLovingMemory.mp3",

  desc: " 我就在你的身旁，\n尽管你似乎在那遥远之处”",
  author: {
    name: "席慕容",
    desc:
      "1963年，席慕蓉台湾师范大学美术系毕业，1966年在比利时布鲁塞尔皇家艺术学院完成进修，获得比利时皇家金牌奖、布鲁塞尔市政府金牌奖等多项奖项。著有诗集、散文集、画册及选本等五十余种，《七里香》、《无怨的青春》、《一棵开花的树》等诗篇脍炙人口",
    avatar: "/static/image/post4_author.png",
    lifetime: "1943 - 至今",
  },
  client: {
    renderContent: POST4,
  },
};
