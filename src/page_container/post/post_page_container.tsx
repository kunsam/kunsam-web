import "./index.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Router from "next/dist/client/router";
import { Post } from "../../../database/post_map";
import { Parallax, Background } from "react-parallax";
import NoSSR from "react-no-ssr";

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
    return (
      <div
        className="progress progress--playing"
        style={{
          position: "absolute",
          width: 20,
          right: 10
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      // <IconButton
      //   color="inherit"
      //   style={{
      //     position: "absolute",
      //     right: 10
      //   }}
      //   onClick={() => {
      //     alert("开发中");
      //   }}
      // >
      //   <FavoriteBorderIcon />
      // </IconButton>
    );
  }
}

class PostPageContainer extends Component<
  any,
  {
    post: Post;
  }
> {
  render() {
    const {
      post: {
        title,
        musicUrl,
        contentBackgroundUrl,
        create_date,
        renderContent,
        author: { avatar }
      }
    } = this.props;
    return (
      <NoSSR>
        <MainAppLayout>
          <AppbarLayout
            title={title}
            date={create_date}
            LeftButton={LeftButton}
            RightButton={RightButton}
            containerStyle={{
              paddingTop: 0,
              backgroundColor: `rgb(238, 240, 237)`
            }}
          >
            <div className="PostPageContainer">
              <Parallax blur={{ min: -30, max: 30 }} strength={350}>
                <Background className="custom-bg">
                  {contentBackgroundUrl && (
                    <img className="background" src={contentBackgroundUrl} />
                  )}
                  <div className="mask" />
                </Background>
                <div className="parallax-inner">
                  <div className="image-header">
                    {/* <h3 className="create_date">{create_date}</h3> */}
                  </div>
                </div>
              </Parallax>
              <div className="content-container">
                {avatar && <img className="avatar" src={avatar} />}
                {renderContent && renderContent()}
              </div>
              {musicUrl && (
                <audio autoPlay loop src={musicUrl}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              )}
            </div>
          </AppbarLayout>
        </MainAppLayout>
      </NoSSR>
    );
  }
}

export default PostPageContainer;
