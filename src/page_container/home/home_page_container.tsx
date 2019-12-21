import "./index.scss";
import React, { Component } from "react";
import { MainAppLayout } from "../../layouts/mainapp/mainapp";
import AppbarLayout from "../../layouts/appbar/appbar";
import Swiper from "react-id-swiper";
import NoSSR from "react-no-ssr";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/LineStyleOutlined";

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

class AppBarRightButton extends Component<any, any> {
  render() {
    return (
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        style={{
          position: "absolute",
          right: 10
        }}
      >
        <AccountCircle />
      </IconButton>
    );
  }
}


export default class HomePageContainer extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({
      data: new Array(10).fill(null).map(_ => ({
        src: "/static/image1.jpg",
        avatar: "/static/avatar.jpg",
        desc: `简要描述\n                    --致某某`
      }))
    });
  }

  render() {
    const { data } = this.state;
    return (
      <MainAppLayout>
        <AppbarLayout
          title="文章列表"
          // RightButton={AppBarRightButton}
        >
          <div style={{ width: "100%" }}>
            <NoSSR>
              <div
                className="custom-swiper-slide-container"
                style={{ marginTop: 60 }}
              >
                <Swiper {...params0}>
                  {data.map((d, index) => (
                    <div className="card" key={index}>
                      <div className="card-inner">
                        <h1 className="title">标题</h1>
                        <h3 className="date">2019 12 20</h3>
                        <div className="desc">{d.desc}</div>
                        <div className="mask" />
                        <img src={d.src} className="card-background-image" />
                        <img src={d.avatar} className="card-avatar-image" />
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
