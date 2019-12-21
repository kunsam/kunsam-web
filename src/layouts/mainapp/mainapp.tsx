import "./mainapp.scss";
import Head from "next/head";
import React, { Component } from "react";
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    }
  });

export class MainAppLayout extends Component<any, any> {
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"></link> */}
        </Head>

        <div
          style={{
            width: "100%",
            backgroundImage:
              "linear-gradient(to right, #16222a, #3a6073)",
            position: "fixed",
            zIndex: -1,
            height: 400
          }}
        ></div>
        <div
          style={{
            width: "100%",
            backgroundColor: 'rgb(238, 240, 237)',
            // backgroundImage: "linear-gradient(to right, #abbaab, #ffffff)",
            position: "fixed",
            zIndex: -1,
            height: "100%",
            marginTop: 400
          }}
        ></div>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(MainAppLayout);
