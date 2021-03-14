import React from "react";
import ShenZhenAfterRainPage from "../../../src/blocks/shenzhen/after_rain/page";

export default function post1() {
  return (
    <div
      style={{
        backgroundImage: `url(/stories/shenzhen/main-bg.webp)`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      >
        <div style={{ paddingTop: 100 }}></div>
        <ShenZhenAfterRainPage />
      </div>
    </div>
  );
}
