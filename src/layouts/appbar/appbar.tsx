import "./appbar.scss";
import AppDrawer from "./app_drawer";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: 1,
        width: "auto"
      }
    },
    searchIcon: {
      width: 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  });

class AppbarLayoutComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
  }
  _toggleDrawer = (open: boolean) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ openDrawer: open });
  };

  render() {
    const { openDrawer } = this.state;
    const {
      title,
      date,
      classes,
      RightButton,
      LeftButton,
      titleStyle = {},
      containerStyle = {}
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <div style={{ width: "100%" }}>
          <AppBar
            position="fixed"
            style={{
              height: 64,
              boxShadow: "none",
              backgroundColor: "rgba(0, 0, 0, 0)"
            }}
          >
            <Toolbar
              style={{
                justifyContent: "center"
              }}
            >
              {/* 传为可配置的 */}

              {LeftButton ? (
                <LeftButton />
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  style={{
                    position: "absolute",
                    left: 10,
                    color: "#000"
                  }}
                  onClick={this._toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <AppDrawer
                openDrawer={openDrawer}
                toggleDrawer={this._toggleDrawer}
              />

              {title && (
                <Typography
                  style={titleStyle}
                  noWrap
                  variant="h6"
                  color="inherit"
                >
                  {title}
                </Typography>
              )}

              {date && <h3 className="title-date">{date}</h3>}

              {/* <div className={classes.grow} /> */}

              {RightButton && <RightButton />}
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            paddingTop: 65,
            ...containerStyle
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const AppbarLayout = withStyles(styles)(AppbarLayoutComponent);

export default AppbarLayout;
