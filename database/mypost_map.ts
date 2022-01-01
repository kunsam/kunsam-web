import MYPOST_1LINE from "./contents/mypost/1line/1line";
import POST_LKPM from "./contents/mypost/post_linagkuaipinmu";
import JUNTONG_POST from "./contents/mypost/juntong";
import post2 from "./contents/mypost/post2";
import post3 from "./contents/mypost/post3";
import post4 from "./contents/mypost/post4";
import post5 from "./contents/mypost/post5";
import post6 from "./contents/mypost/post6";
import post7 from "./contents/mypost/post7";

export interface MYPost {
  id: string;
  title: string;
  desc?: string;
  content: {
    backgroundUrl: string;
  };
  musicUrl?: string;
  brief?: {
    backgroundUrl: string;
  };
  client?: {
    renderContent?: any;
  };
}

const POSTS: MYPost[] = [
  {
    id: "post_lkpm",
    title: "《两块屏幕》",
    brief: {
      backgroundUrl: "/static/image/mypost/lkpm-cover.jpg",
    },
    content: {
      backgroundUrl: "/static/image/mypost/lkpm-content.jpg",
    },

    musicUrl: "/static/music/jymxtuan.mp3",

    desc: "两块屏幕前，我见到了你",

    client: {
      renderContent: POST_LKPM,
    },
  },
  {
    id: "post_1line_new",
    title: "《遇见》",
    brief: {
      backgroundUrl:
        "/static/image/mypost/laura-pratt--NqtqonICOM-unsplash.jpg",
    },
    content: {
      backgroundUrl: "/static/image/mypost/491629472815_pic.jpg",
    },

    musicUrl: "/static/music/zongcilang1.mp3",

    desc: "怀念睡着了",

    client: {
      renderContent: JUNTONG_POST,
    },
  },
  {
    id: "post_1line",
    title: "《一线之隔》",
    brief: {
      backgroundUrl: "/static/image/mypost/1line_1.png",
    },
    content: {
      backgroundUrl: "/static/image/mypost/1line_2.png",
    },

    musicUrl: "/static/music/SunriseAtParadi.mp3",

    desc: " 人的一生相隔很远\n远到只有一线之隔",

    client: {
      renderContent: MYPOST_1LINE,
    },
  },
  {
    id: "post_2",
    title: "《生如雪花》",
    brief: {
      backgroundUrl: "/static/image/mypost/post2_brief.png",
    },
    content: {
      backgroundUrl: "/static/image/mypost/post2_content.png",
    },

    musicUrl: "/static/music/Snowflake.mp3",

    desc: " 我们犹如这雪花\n在空中洋洋洒洒",

    client: {
      renderContent: post2,
    },
  },

  {
    id: "post_3",
    title: "《停》",
    brief: {
      backgroundUrl: "/static/image/mypost/post3_brief.png",
    },

    content: {
      backgroundUrl: "/static/image/mypost/post3_content.png",
    },
    musicUrl: "/static/music/蔡健雅 - 停格.mp3",
    desc: "我在走走停停中，过完了一生",
    client: {
      renderContent: post3,
    },
  },

  {
    id: "post_4",
    title: "《梧桐树下》",
    brief: {
      backgroundUrl: "/static/image/mypost/post4_brief.jpeg",
    },

    content: {
      backgroundUrl: "/static/image/mypost/post4_content.png",
    },
    musicUrl: "/static/music/N.K.杨凯 - 深秋的雨.mp3",
    desc: "无论怎样的结局，把日复一日的美梦写成歌曲",
    client: {
      renderContent: post4,
    },
  },

  {
    id: "post_5",
    title: "《Sword and Shield —— Sacrifice》",
    brief: {
      backgroundUrl: "/static/image/mypost/post5_brief.jpeg",
    },

    content: {
      backgroundUrl: "/static/image/mypost/post5_content.jpeg",
    },
    musicUrl: "/static/music/Swordland.mp3",
    desc: "Do be afraid and enjoy your favorite life",
    client: {
      renderContent: post5,
    },
  },

  {
    id: "post_6",
    title: "《精神分裂 —— 爱》",
    brief: {
      backgroundUrl: "/static/image/mypost/post6_brief.jpeg",
    },

    content: {
      backgroundUrl: "/static/image/mypost/post6_content.jpeg",
    },
    musicUrl: "/static/music/洛轻衣,XHIRO - Dancing Work.mp3",
    desc: "爱在精神分裂的夜。",
    client: {
      renderContent: post6,
    },
  },

  {
    id: "post_7",
    title: "《精神分裂 —— 夜》",
    brief: {
      backgroundUrl: "/static/image/mypost/post7_brief.jpeg",
    },

    content: {
      backgroundUrl: "/static/image/mypost/post7_content.jpeg",
    },
    musicUrl: "/static/music/高梨康治 - 五月雨.mp3",
    desc: "五彩缤纷的夜，亦真亦幻",
    client: {
      renderContent: post7,
    },
  },
];

const MY_POSTS_MAP: Map<string, MYPost> = new Map();
POSTS.forEach((post) => {
  MY_POSTS_MAP.set(post.id, post);
});

export default MY_POSTS_MAP;
