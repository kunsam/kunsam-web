import styles from "./index.module.scss";

const POST_LOVE_NEAR = () => (
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
  id: "POST_LOVE_NEAR",
  title: "《爱在身边》",
  upload: {
    author: "sam",
    create_date: "2019-12-24",
  },
  brief: {
    backgroundUrl: "/static/image/post3.png",
  },
  content: {
    backgroundUrl: "/static/image/post3_2.png",
  },

  musicUrl: "/static/music/lovelikesea.mp3",

  desc: " 我就在你的身旁，\n尽管你似乎在那遥远之处”",
  author: {
    name: "[德]歌德",
    desc:
      "约翰·沃尔夫冈·冯·歌德，出生于美因河畔法兰克福，德国著名思想家、作家、科学家，他是魏玛的古典主义最著名的代表。而作为诗歌、戏剧和散文作品的创作者，他是最伟大的德国作家之一，也是世界文学领域的一个出类拔萃的光辉人物",
    avatar: "/static/image/post3_author.png",
    lifetime: "1924 - 2000",
  },
  client: {
    renderContent: POST_LOVE_NEAR,
  },
};
