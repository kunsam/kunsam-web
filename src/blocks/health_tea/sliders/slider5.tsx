import React from "react";
import Link from "next/link";
function Component() {
  return (
    <div>
      <h1 style={{ fontSize: 24, marginTop: 150 }}>
        敬请期待我们即将研发的产品！
      </h1>
      <h1 style={{ fontSize: 18, marginTop: 40, textAlign: "right" }}>
        我们是程序员，也是养生的倡导者
      </h1>
      <h1 style={{ fontSize: 16, marginTop: 200, textAlign: "right" }}>
        Story by kunsam
      </h1>
      <p style={{ textAlign: "right", marginTop: 10 }}>
        <Link href="/about">
          <span style={{ marginLeft: 10, color: "purple" }}>
            点击访问关于我
          </span>
        </Link>
      </p>
    </div>
  );
}
const HealthTeaSlider5 = React.memo(Component);
export default HealthTeaSlider5;
