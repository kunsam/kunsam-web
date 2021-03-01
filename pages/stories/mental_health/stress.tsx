import React from "react";
import { Parallax, Background } from "react-parallax";
import styles from "./index.module.scss";

const insideStyles: React.CSSProperties = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export default function stress() {
  return (
    <div>
      <Parallax bgImage={"/stories/mental_health/image1.png"} strength={-20}>
        <div style={{ height: 500 }}></div>
      </Parallax>

      <div style={{ height: 500 }}></div>
    </div>
  );
}
