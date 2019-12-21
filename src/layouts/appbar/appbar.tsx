import "./appbar.scss";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, CssBaseline } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/LineStyleOutlined";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/People";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    title: {
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
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
    const { title, classes, RightButton, LeftButton } = this.props;
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
                    left: 10
                  }}
                  onClick={this._toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Drawer open={openDrawer} onClose={this._toggleDrawer(false)}>
                <div
                  role="presentation"
                  onClick={this._toggleDrawer(false)}
                  onKeyDown={this._toggleDrawer(false)}
                  style={{ width: 200 }}
                >
                  <List>
                    {["首页"].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {["关于作者"].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          <MailIcon></MailIcon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Drawer>

              {title && (
                <Typography
                  noWrap
                  variant="h6"
                  color="inherit"
                  className={classes.title}
                >
                  {title}
                </Typography>
              )}

              {/* <div className={classes.grow} /> */}

              {RightButton && <RightButton />}
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ width: "100%", minHeight: "100vh", paddingTop: 65 }}>
          <div style={{ marginTop: 10 }}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const AppbarLayout = withStyles(styles)(AppbarLayoutComponent);

export default AppbarLayout;
