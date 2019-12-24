import "./index.scss";

const POST = () => (
  <div className="post1">
    <p>
      我想我已经够小心翼翼的
      <br /> 我的脚趾正好十个
      <br /> 我的手指正好十个
      <br /> 我生下来时哭几声
      <br /> 我死去时别人又哭
      <br /> 我不声不响的
      <br /> 带来自己这个包袱
      <br /> 尽管我不喜爱自己
      <br /> 但我还是悄悄打开
      <br /> <br /> 我在黄昏时坐在地球上
      <br /> 我这样说并不表明晚上
      <br /> 我就不在地球上 早上同样
      <br /> 地球在你屁股下
      <br /> 结结实实
      <br /> 老不死的地球你好
      <br /> <br /> 或者我干脆就是树枝
      <br /> 我以前睡在黑暗的壳里
      <br /> 我的脑袋就是我的边疆
      <br /> 就是一颗梨
      <br /> 在我成型之前
      <br /> 我是知冷知热的白花
      <br /> <br /> 或者我的脑袋是一只猫
      <br /> 安放在肩膀上
      <br /> 造我的女主人荷月远去
      <br /> 成群的阳光照着大猫小猫
      <br /> 我的呼吸
      <br /> 一直在证明
      <br /> 树叶飘飘
      <br /> <br /> 我不能放弃幸福
      <br /> 或相反
      <br /> 我以痛苦为生
      <br /> 埋葬半截
      <br /> 来到村口或山上
      <br /> 我盯住人们死看
      <br /> 呀 生硬的黄土 人丁兴旺
      <br />
    </p>
  </div>
);

export default {
  id: "WEEK1_POST_5",
  title: "《明天醒来我会在哪一只鞋子里》",
  upload: {
    author: "sam",
    create_date: "2019-12-24"
  },
  brief: {
    backgroundUrl: "/static/image/post5_brief.png"
  },
  content: {
    backgroundUrl: "/static/image/post5_content.png"
  },

  // musicUrl: "/static/music/lovelikesea.mp3",

  desc: " 树叶飘飘，\n我不能放弃幸福”",
  author: {
    name: "海子",
    desc:
      "海子，原名查海生，出生于安徽省怀宁县，当代青年诗人。海子在农村长大，1979年15岁时考入北京大学法律系，1982年大学期间开始诗歌创作，1983年自北大毕业后分配至北京中国政法大学哲学教研室工作，1989年3月26日在山海关附近卧轨自杀，年仅25岁",
    avatar: "/static/image/post5_author.png",
    lifetime: "1964 - 1989"
  },
  client: {
    renderContent: POST
  }
};
