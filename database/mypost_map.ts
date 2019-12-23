import MYPOST_1LINE from "./contents/mypost/1line/1line";

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
    id: "post_1line",
    title: "《一线之隔》",
    brief: {
      backgroundUrl: "/static/image/mypost/1line_1.png"
    },
    content: {
      backgroundUrl: "/static/image/mypost/1line_2.png"
    },

    musicUrl: "/static/music/SunriseAtParadi.mp3",

    desc: " 人的一生相隔很远\n远到只有一线之隔",

    client: {
      renderContent: MYPOST_1LINE
    }
  },
  {
    id: "post_2line",
    title: "《一线之隔》",
    brief: {
      backgroundUrl: "/static/image/mypost/1line_1.png"
    },
    content: {
      backgroundUrl: "/static/image/mypost/1line_2.png"
    },

    musicUrl: "/static/music/SunriseAtParadi.mp3",

    desc: " 人的一生相隔很远\n远到只有一线之隔",

    client: {
      renderContent: MYPOST_1LINE
    }
  }
];

const MY_POSTS_MAP: Map<string, MYPost> = new Map();
POSTS.forEach(post => {
  MY_POSTS_MAP.set(post.id, post);
});

export default MY_POSTS_MAP;
