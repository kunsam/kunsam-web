import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/People";

export default class AppDrawer extends Component<any, any> {
  render() {
    const { openDrawer, toggleDrawer } = this.props;
    return (
      <Drawer
        open={openDrawer}
        onClose={() => {
          toggleDrawer(false)();
        }}
      >
        <div
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 200 }}
        >
          <List>
            {["首页", "精选诗集"].map((text, index) => (
              <div
                key={text}
                onClick={(e) => {
                  toggleDrawer(false)(e);
                  alert("各项功能还在开发中... 2019-12-12");
                }}
              >
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </div>
            ))}
          </List>
          <Divider />
          <List>
            {["我的诗集", "关于作者"].map((text, index) => (
              <div
                key={text}
                onClick={e => {
                  toggleDrawer(false)(e);
                  alert("各项功能还在开发中... 2019-12-12");
                }}
              >
                <ListItem button key={text}>
                  <ListItemIcon>
                    <MailIcon></MailIcon>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}
