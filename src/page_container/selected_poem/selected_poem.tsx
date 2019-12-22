import "./selected_poem.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import Swiper from "react-id-swiper";
import NoSSR from "react-no-ssr";
import Router from "next/router";
import POSTS_MAP, { Post } from "../../../database/post_map";

const params0 = {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};

export default class SelectedPoemPageContainer extends Component<
  any,
  {
    data: Post[];
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let data = [];
    POSTS_MAP.forEach(post => {
      data.push(post);
    });
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    return (
      <MainAppLayout>
        <div
          style={{
            zIndex: -1,
            height: 400,
            width: "100%",
            position: "fixed",
            backgroundImage: "linear-gradient(to right, #16222a, #3a6073)"
          }}
        >
          <video
            autoPlay
            loop
            src={"/static/video/Pexels_Videos_2610.mp4"}
            style={{ height: 400, minWidth: "100%" }}
          ></video>
        </div>
        <div
          style={{
            zIndex: -1,
            width: "100%",
            marginTop: 400,
            height: "100%",
            position: "fixed",
            backgroundColor: "rgb(238, 240, 237)"
          }}
        ></div>
        <AppbarLayout
          title="精选诗集"
          titleStyle={{ color: "#000" }}
        >
          <div style={{ width: "100%" }}>
            <NoSSR>
              <div
                className="custom-swiper-slide-container"
                style={{ marginTop: 60 }}
              >
                <Swiper {...params0}>
                  {data.map((post, index) => (
                    <div className="card" key={index}>
                      <div
                        className="card-inner"
                        onClick={() => {
                          Router.push({
                            pathname: "/post",
                            query: {
                              postId: post.id
                            }
                          });
                        }}
                      >
                        <h1 className="title">{post.title}</h1>
                        <h3 className="date">{post.create_date}</h3>
                        <div className="desc">{post.desc}</div>
                        <div className="mask" />
                        <img
                          src={post.headerBackgroundUrl}
                          className="card-background-image"
                        />
                        <img
                          src={post.author.avatar}
                          className="card-avatar-image"
                        />
                      </div>
                    </div>
                  ))}
                </Swiper>
              </div>
            </NoSSR>
          </div>
        </AppbarLayout>
      </MainAppLayout>
    );
  }
}
