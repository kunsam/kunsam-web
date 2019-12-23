import React from "react";
import PostPageContainer from "../src/page_container/post/post_page_container";
import POSTS_MAP, { Post } from "../database/post_map";

const DEFAULT_POST: Post = {
  id: "",
  title: "",
  desc: "",
  content: {
    backgroundUrl: ""
  },
  upload: {
    create_date: ""
  },
  author: {
    desc: "",
    name: "",
    avatar: "",
    lifetime: ""
  }
};

class PostPage extends React.Component<any, any> {
  static async getInitialProps({ query }) {
    return { query };
  }

  constructor(props) {
    super(props);
    this.state = {
      post: DEFAULT_POST
    };
  }
  componentDidMount() {
    const {
      query: { postId }
    } = this.props;
    this.setState({
      post: PostPage.getPost(postId)
    });
  }
  static getPost(postId) {
    const post = POSTS_MAP.get(postId);
    return post || DEFAULT_POST;
  }

  render() {
    const { post } = this.state;
    return <PostPageContainer post={post} />;
  }
}

export default PostPage;
