import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./index.module.scss";
import classnames from "classnames";
import AboutSlider1 from "./sliders/slider1";
import AboutSlider2 from "./sliders/slider2";
import AboutSlider3 from "./sliders/slider3";
import AboutSlider4 from "./sliders/slider4";
import AboutSlider5 from "./sliders/slider5";

function Component() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    vertical: true,
    loop: true,
  });

  return (
    <div className={styles.container}>
      <div
        ref={sliderRef}
        className={classnames(styles.sliderContainer, "keen-slider")}
      >
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <AboutSlider1 />
        </div>
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <AboutSlider2 />
        </div>
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <AboutSlider3 />
        </div>

        <div className={classnames("keen-slider__slide", styles.slide)}>
          <AboutSlider4 />
        </div>

        <div className={classnames("keen-slider__slide", styles.slide)}>
          <AboutSlider5 />
        </div>
      </div>
    </div>
  );
}
const AboutSlider = React.memo(Component);
export default AboutSlider;
