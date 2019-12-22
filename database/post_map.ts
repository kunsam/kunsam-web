import POST1_CONTENT from "./contents/post1/post1";
import POST2_CONTENT from "./contents/post2/post2";

export interface Post {
  id: string;
  title: string;
  create_date: string;
  headerBackgroundUrl: string;
  contentBackgroundUrl: string;
  renderContent?: any;
  musicUrl?: string;
  desc: string;
  author: {
    avatar: string;
  };
}

const POSTS: Post[] = [
  {
    id: "post2",
    title: "《人的一生》",
    create_date: "[以色列]耶胡达·阿米亥",
    headerBackgroundUrl: "/static/image/post2_2.png",
    contentBackgroundUrl: "/static/image/post2_3.png",
    musicUrl: "/static/music/Childhood_Remembered.mp3",
    renderContent: POST2_CONTENT,
    desc:
      "                “人将在秋日死去，\n\n                           犹如一颗无花果”",
    author: {
      avatar: "/static/image/post2_author.png"
    }
  },
  {
    id: "post1",
    title: "《初恋》",
    create_date: "[日]岛崎藤村",
    headerBackgroundUrl: "/static/image/post1.png",
    contentBackgroundUrl: "/static/image/post1_content.png",
    musicUrl: "/static/music/wanghouyusheng.mp3",
    renderContent: POST1_CONTENT,
    desc:
      "                “欢乐的恋爱之杯，\n\n                           斟满你的蜜意柔情”",
    author: {
      avatar: "/static/image/post1_author.png"
    }
  }
];

const POSTS_MAP: Map<string, Post> = new Map();
POSTS.forEach(post => {
  POSTS_MAP.set(post.id, post);
});

export default POSTS_MAP;
