import React from "react";
function Component() {
  return (
    <div>
      <h1 style={{ fontSize: 20, marginTop: 150 }}>为了幸福的明天，你值得！</h1>
      <div style={{ marginTop: 80, textAlign: "center" }}>
        <img
          src={"/health_tea/ht2.png"}
          style={{ width: "80vw", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
const HealthTeaSlider2 = React.memo(Component);
export default HealthTeaSlider2;
