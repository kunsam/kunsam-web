import React from "react";
import PostPageContainer from "../src/page_container/post/post_page_container";
import POSTS_MAP, { Post } from "../database/post_map";
import MY_POSTS_MAP, { MYPost } from "../database/mypost_map";

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

const DEFAULT_MY_POST: MYPost = {
  id: "",
  title: "",
  desc: "",
  content: {
    backgroundUrl: ""
  }
};

class PostPage extends React.Component<any, any> {
  static async getInitialProps({ query }) {
    return { query };
  }

  constructor(props) {
    super(props);
    this.state = {
      post: this.getDefaultPost()
    };
  }

  getDefaultPost = () => {
    const {
      query: { type }
    } = this.props;
    switch (type) {
      case "mypost": {
        return DEFAULT_MY_POST;
      }
      default: {
        return DEFAULT_POST;
      }
    }
  };

  getPost = postId => {
    const post = this.getPostMap().get(postId);
    return post || this.getDefaultPost();
  };

  getPostMap = () => {
    const {
      query: { type }
    } = this.props;
    switch (type) {
      case "mypost": {
        return MY_POSTS_MAP;
      }
      default: {
        return POSTS_MAP;
      }
    }
  };

  componentDidMount() {
    const {
      query: { postId, type }
    } = this.props;
    this.setState({
      post: this.getPost(postId)
    });
  }

  render() {
    const { post } = this.state;
    return <PostPageContainer post={post} />;
  }
}

export default PostPage;
