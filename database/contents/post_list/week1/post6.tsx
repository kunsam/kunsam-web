import "./index.scss";

const POST = () => (
  <div className="post1">
    <p>
      Midnight in the mid-Atlantic. On deck.
      <br />
      Wrapped up in themselves as in thick veiling
      <br />
      And mute as mannequins in a dress shop,
      <br />
      Some few passangers keep track
      <br />
      Of the old star-map on the ceiling.
      <br />
      Tiny and far, a single ship
    </p>
    <p>
      Lit like a two-tiered wedding cake
      <br />
      Carries its candles slowly off.
      <br />
      Now there is nothing much to look at.
      <br />
      Still nobody will move or speak —-
      <br />
      The bingo players, the players at love
      <br />
      On a square no bigger than a carpet
    </p>
    <p>
      Are hustled over the crests and troughs,
      <br />
      Each stalled in his particular minute
      <br />
      And castled in it like a king.
      <br />
      Small drops spot their coats, their gloves:
      <br />
      They fly too fast to feel the wet.
      <br />
      Anything can happen where they are going.
    </p>
    <p>
      The untidy lady revivalist
      <br />
      For whom the good Lord provides (He gave
      <br />
      Her a pocketbook, a pearl hatpin
      <br />
      And seven winter coats last August)
      <br />
      Prays under her breath that she may save
      <br />
      The art students in West Berlin.
    </p>
    <p>
      The astrologer at her elbow (a Leo)
      <br />
      Picked his trip-date by the stars.
      <br />
      The is gratified by the absence of icecakes.
      <br />
      He'll be rich in a year (and he should know)
      <br />
      Selling the Welsh and English mothers
      <br />
      Nativities at two and six.
    </p>
    <p>
      And the white-haired jeweler from Denmark is carving
      <br />
      A perfectly faceted wife to wait
      <br />
      On him hand and foot, quiet as a diamond.
      <br />
      Moony balloons, tied by a string
      <br />
      To their owner' wrists, the light dreams float
      <br />
      To be let loose at news of land.
    </p>
  </div>
);

export default {
  id: "WEEK1_POST_6",
  title: "《On Deck》",
  upload: {
    author: "sam",
    create_date: "2019-12-24"
  },
  brief: {
    backgroundUrl: "/static/image/post6_brief.png"
  },
  content: {
    backgroundUrl: "/static/image/post6_content.png"
  },

  // musicUrl: "/static/music/lovelikesea.mp3",

  desc: "“Anything can happen\n where they are going”",
  author: {
    name: "Sylvia Plath",
    desc:
      "西尔维娅·普拉斯（Sylvia Plath），生于美国波士顿牙买加平原区，儿童作家出身的美国天才诗人、小说家及短篇故事作家。",
    avatar: "/static/image/post6_author.png",
    lifetime: "1932 - 1963"
  },
  client: {
    renderContent: POST
  }
};
