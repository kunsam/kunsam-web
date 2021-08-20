import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./index.module.scss";
import classnames from "classnames";
import HealthTeaSlider1 from "./sliders/slider1";
import HealthTeaSlider2 from "./sliders/slider2";
import HealthTeaSlider3 from "./sliders/slider3";
import HealthTeaSlider4 from "./sliders/slider4";
import HealthTeaSlider5 from "./sliders/slider5";

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
          <HealthTeaSlider1 />
        </div>
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <HealthTeaSlider2 />
        </div>
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <HealthTeaSlider3 />
        </div>
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <HealthTeaSlider4 />
        </div>
        <div className={classnames("keen-slider__slide", styles.slide)}>
          <HealthTeaSlider5 />
        </div>
      </div>
    </div>
  );
}
const HealthTea = React.memo(Component);
export default HealthTea;
