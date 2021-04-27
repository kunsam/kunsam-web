import React from "react";
import AboutSlider from "../src/blocks/about/slider";
function Component() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 11,
          //   pointerEvents: "none",
          background: "red",
        }}
      >
        <div style={{ marginTop: 10 }}>
          <AboutSlider />
        </div>
      </div>
    </div>
  );
}
const Test = React.memo(Component);
export default Test;
