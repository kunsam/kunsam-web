import "./index.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PlayArrowrIcon from "@material-ui/icons/PlayArrow";
import Router from "next/dist/client/router";
import { Parallax, Background } from "react-parallax";
import NoSSR from "react-no-ssr";
import TextField from "@material-ui/core/TextField";
import CommentIcon from "@material-ui/icons/Comment";
import Danmu from "../../components/danmu/danmu";

class LeftButton extends Component<any, any> {
  render() {
    return (
      <IconButton
        color="inherit"
        style={{
          position: "absolute",
          left: 10
        }}
        onClick={() => {
          Router.back();
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    );
  }
}

class RightButton extends Component<any, any> {
  render() {
    const { playState, onClick } = this.props;
    if (playState === "paused") {
    }
    return (
      <div
        className="progress progress--playing"
        style={{
          width: 20,
          right: 10,
          position: "absolute",
          justifyContent: "center"
        }}
        onClick={onClick}
      >
        {playState === "paused" ? (
          <PlayArrowrIcon style={{ marginTop: 5, right: 10, color: "#fff" }} />
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>
    );
  }
}

class PostPageContainer extends Component<
  {
    post: any;
  },
  {
    showComment: boolean;
    musicPlayState: string;
  }
> {
  private _musicRef: any;
  private _musicPlayState: string = "playing";

  constructor(props) {
    super(props);
    this.state = {
      showComment: false,
      musicPlayState: this._musicPlayState
    };
  }

  _handleClickRightButton = e => {
    if (this._musicRef) {
      if (this._musicPlayState === "playing") {
        this._musicRef.pause();
        this._musicPlayState = "paused";
      } else {
        this._musicRef.play();
        this._musicPlayState = "playing";
      }
      this.setState({
        musicPlayState: this._musicPlayState
      });
    }
  };

  render() {
    const {
      post: {
        title,
        musicUrl,
        client,
        content,
        author
      }
    } = this.props;
    const { musicPlayState } = this.state;
    return (
      <NoSSR>
        <MainAppLayout>
          <AppbarLayout
            title={title}
            LeftButton={LeftButton}
            RightButton={() => (
              <RightButton
                playState={musicPlayState}
                onClick={this._handleClickRightButton}
              />
            )}
            containerStyle={{
              paddingTop: 0,
              backgroundColor: `rgb(238, 240, 237)`
            }}
          >
            <div className="PostPageContainer">
              <Parallax blur={{ min: -30, max: 30 }} strength={350}>
                <Background className="custom-bg">
                  {content && content.backgroundUrl && (
                    <img className="background" src={content.backgroundUrl} />
                  )}
                  <div className="mask" />
                </Background>
                <div className="parallax-inner">
                  <Danmu />
                  <div className="image-header">
                    {/* <h3 className="create_date">{create_date}</h3> */}
                  </div>
                </div>
              </Parallax>
              <div className="content-container">
                {author && author.avatar && <img className="avatar" src={author.avatar} />}
                {client && client.renderContent()}
              </div>

              {musicUrl && (
                <audio
                  autoPlay
                  src={musicUrl}
                  ref={ref => {
                    this._musicRef = ref;
                  }}
                >
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              )}
            </div>

            <IconButton
              id="comment-icon-button"
              onClick={() => {
                this.setState({
                  showComment: !this.state.showComment
                });
              }}
            >
              <CommentIcon />
            </IconButton>

            {this.state.showComment && (
              <div id="comment-area">
                <TextField id="comment-TextField" label="评论" />
              </div>
            )}
          </AppbarLayout>
        </MainAppLayout>
      </NoSSR>
    );
  }
}

export default PostPageContainer;
