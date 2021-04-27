import React from "react";
function Component() {
  return (
    <div>
      <h1 style={{ fontSize: 20, marginTop: 60 }}>
        那也没问题，来一杯我们给您定制的养生茶饮！
      </h1>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <img
          src={"/health_tea/ht3.png"}
          style={{ width: "80vw", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
const HealthTeaSlider3 = React.memo(Component);
export default HealthTeaSlider3;
