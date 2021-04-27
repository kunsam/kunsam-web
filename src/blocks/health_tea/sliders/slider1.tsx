import React from "react";
function Component() {
  return (
    <div>
      <h1 style={{ fontSize: 20, marginTop: 150 }}>
        你还在像cheems一样拼命工作吗?
      </h1>
      <div style={{ marginTop: 80, textAlign: "center" }}>
        <img
          src={"/health_tea/WX20210427-230910@2x.png"}
          style={{ width: "80vw", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
const HealthTeaSlider1 = React.memo(Component);
export default HealthTeaSlider1;
