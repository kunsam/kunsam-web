import "./my_poem.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import Swiper from "react-id-swiper";
import NoSSR from "react-no-ssr";
import Router from "next/router";
import MY_POSTS_MAP, { MYPost } from "../../../database/mypost_map";

const params = {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  }
};

export default class SelectedPoemPageContainer extends Component<
  any,
  {
    data: MYPost[];
    currentTimeLine: number;
    currentSwiperIndex: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentTimeLine: null,
      currentSwiperIndex: 0
    };
  }
  componentDidMount() {
    let data = [];
    MY_POSTS_MAP.forEach(post => {
      data.push(post);
    });
    const cacheIndex = window.sessionStorage.getItem(
      "my_poem-currentSwiperIndex"
    );
    this.setState({
      data,
      currentSwiperIndex: (cacheIndex && parseInt(cacheIndex)) || 0
    });
  }

  render() {
    const { data, currentSwiperIndex } = this.state;
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
          <img
            src={"/static/video/sky-night.gif"}
            style={{ height: 400, minWidth: "100%" }}
          />
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
        <AppbarLayout title="精选诗集">
          <div className="my-poem-page-container" style={{ width: "100%" }}>
            <NoSSR>
              <div
                className="custom-swiper-slide-container"
                style={{ marginTop: 100 }}
              >
                <Swiper
                  {...params}
                  activeSlideKey={`${currentSwiperIndex}`}
                  getSwiper={swiper => {
                    swiper.on("slideChange", () => {
                      this.setState({
                        currentSwiperIndex: swiper.activeIndex
                      });
                      window.sessionStorage.setItem(
                        "my_poem-currentSwiperIndex",
                        swiper.activeIndex
                      );
                    });
                  }}
                >
                  {data.map((post, index) => (
                    <div className="card" key={index}>
                      <div
                        className="card-inner"
                        onClick={() => {
                          Router.push({
                            pathname: "/post",
                            query: {
                              type: 'mypost',
                              postId: post.id
                            }
                          });
                        }}
                      >
                        <h1 className="title">{post.title}</h1>

                        <div className="desc">{post.desc}</div>
                        <div className="mask" />
                        <img
                          src={post.brief.backgroundUrl}
                          className="card-background-image"
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
