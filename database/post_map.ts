import POST1_CONTENT from "./contents/post1/post1";
import POST2_CONTENT from "./contents/post2/post2";
import POST3 from './contents/post_list/week1/post3'
import POST4 from './contents/post_list/week1/post4'
import POST5 from './contents/post_list/week1/post5'
import POST6 from './contents/post_list/week1/post6'

export interface Post {
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
  author: {
    name: string;
    avatar: string;
    desc: string;
    lifetime: string;
  };
  upload: {
    author?: string;
    create_date: string;
  };
  client?: {
    renderContent?: any;
  };
}

const POSTS: Post[] = [
  {
    id: "post2",
    title: "《人的一生》",
    upload: {
      author: "sam",
      create_date: "2019-12-23"
    },
    brief: {
      backgroundUrl: "/static/image/post2_2.png"
    },
    content: {
      backgroundUrl: "/static/image/post2_3.png"
    },

    musicUrl: "/static/music/Childhood_Remembered.mp3",

    desc: " “人将在秋日死去，\n犹如一颗无花果”",
    author: {
      name: "[以色列]耶胡达·阿米亥",
      desc:
        "以色列当代诗人, 其主要作品有诗集《现在及他日》、《此刻在风暴中》、《开·闭·开》等，曾获得1982年度以色列奖，1995马其顿金花环奖等",
      avatar: "/static/image/post2_author.png",
      lifetime: "1924 - 2000"
    },
    client: {
      renderContent: POST2_CONTENT
    }
  },
  {
    id: "post1",
    title: "《初恋》",

    musicUrl: "/static/music/wanghouyusheng.mp3",
    upload: {
      author: "sam",
      create_date: "2019-12-23"
    },
    client: {
      renderContent: POST1_CONTENT
    },
    brief: {
      backgroundUrl: "/static/image/post1.png"
    },
    content: {
      backgroundUrl: "/static/image/post1_content.png"
    },
    desc: "“欢乐的恋爱之杯，\n斟满你的蜜意柔情”",
    author: {
      name: "[日]岛崎藤村",
      desc:
        "日本诗人、小说家。原名岛崎春树。以第一本浪漫诗集《若菜集》，开创了日本近代诗的新境界。之后转向小说发展，发表了《破戒》，开创了日本自然主义文学的先驱。",
      avatar: "/static/image/post1_author.png",
      lifetime: "1872 - 1943"
    }
  },
  POST3,
  POST4,
  POST5,
  POST6
];

const POSTS_MAP: Map<string, Post> = new Map();
POSTS.forEach(post => {
  POSTS_MAP.set(post.id, post);
});

export default POSTS_MAP;
