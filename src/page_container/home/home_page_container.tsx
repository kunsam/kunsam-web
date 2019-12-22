import "./index.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import Swiper from "react-id-swiper";
import NoSSR from "react-no-ssr";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/LineStyleOutlined";
import Router from "next/router";
import POSTS_MAP, { Post } from "../../../database/post_map";

const params0 = {
  // width: 300,
  slidesPerView: 1,
  // spaceBetween: 30
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};

const params = {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: ".swiper-pagination"
  }
};

const params2 = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  }
};

export default class HomePageContainer extends Component<
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
            width: "100%",
            backgroundImage: "linear-gradient(to right, #16222a, #3a6073)",
            position: "fixed",
            zIndex: -1,
            height: 400
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
            width: "100%",
            backgroundColor: "rgb(238, 240, 237)",
            // backgroundImage: "linear-gradient(to right, #abbaab, #ffffff)",
            position: "fixed",
            zIndex: -1,
            height: "100%",
            marginTop: 400
          }}
        ></div>
        <AppbarLayout
          title="精选诗集"
          titleStyle={{ color: "#000" }}
          // RightButton={AppBarRightButton}
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
