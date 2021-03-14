import React from "react";
import styles from "./index.module.scss";
import RainSvg from "./rain.svg";

const array = new Array(127).fill(null);
export default function AfterRainLoading() {
  return (
    <>
      <div className={styles.artboard}>
        <div className="rain">
          {array.map((_, ai) => (
            <div className="raindrop" key={`ai${ai}`} />
          ))}
        </div>
        <div className="cloud" />
        <RainSvg />
      </div>
      <p style={{ color: "#fff", textAlign: "center", marginTop: 20 }}>loading...</p>
    </>
  );
}
