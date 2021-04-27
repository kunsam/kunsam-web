import React from "react";
import AboutSlider from "../src/blocks/about/slider";
import WaterBgLayout from "../src/layouts/water_bg_layout";

class AboutPage extends React.Component<any, any> {
  render() {
    return (
      <WaterBgLayout>
        <div style={{ marginTop: 100 }}>
          <AboutSlider />
        </div>
      </WaterBgLayout>
    );
  }
}

export default AboutPage;
