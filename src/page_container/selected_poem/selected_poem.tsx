import styles from "./selected_poem.module.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import Swiper from "react-id-swiper";
import NoSSR from "react-no-ssr";
import Router from "next/router";
import POSTS_MAP, { Post } from "../../../database/post_map";

const params0 = {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
};

export default class SelectedPoemPageContainer extends Component<
  any,
  {
    data: Post[];
    currentTimeLine: number;
    currentSwiperIndex: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentTimeLine: null,
      currentSwiperIndex: 0,
    };
  }
  componentDidMount() {
    let data = [];
    POSTS_MAP.forEach((post) => {
      data.push(post);
    });
    const cacheIndex = window.sessionStorage.getItem("post-currentSwiperIndex");
    this.setState({
      data,
      currentSwiperIndex: (cacheIndex && parseInt(cacheIndex)) || 0,
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
            backgroundImage: "linear-gradient(to right, #16222a, #3a6073)",
          }}
        >
          <img
            src={"/static/video/beach.gif"}
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
            backgroundColor: "rgb(238, 240, 237)",
          }}
        ></div>
        <AppbarLayout title="精选诗集">
          <div
            className={styles.selectedPoemPageContainer}
            style={{ width: "100%" }}
          >
            <NoSSR>
              <div
                className="custom-swiper-slide-container"
                style={{ marginTop: 60 }}
              >
                <Swiper
                  {...params0}
                  activeSlideKey={`${currentSwiperIndex}`}
                  getSwiper={(swiper) => {
                    swiper.on("slideChange", () => {
                      this.setState({
                        currentSwiperIndex: swiper.activeIndex,
                      });
                      window.sessionStorage.setItem(
                        "post-currentSwiperIndex",
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
                              postId: post.id,
                            },
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
                        <img
                          src={post.author.avatar}
                          className="card-avatar-image"
                        />
                        <div className="uploader">
                          <h3 className="uploader-author">
                            {post.upload.author}
                          </h3>
                          <h3 className="uploader-date">
                            上传于 {post.upload.create_date}
                          </h3>
                        </div>
                      </div>

                      <div
                        className="card-outer"
                        style={{
                          display: currentSwiperIndex === index ? "" : "none",
                        }}
                      >
                        <h2 className="author-name">{post.author.name}</h2>
                        <h2 className="author-lifetime">
                          {post.author.lifetime}
                        </h2>
                        <p className="author-desc">{post.author.desc}</p>
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
