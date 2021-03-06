import React from "react";
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 500,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        8. 寻求专业帮助
      </h2>

      <p style={{ marginBottom: 20 }}>
        如果有能力的话尽早寻求专业帮助能够有针对性的解决问题，早期的介入和干预能有效减少压力可能带来的病症或障碍
      </p>

      <img
        src="/stories/mental_health/stress/doctor1.jpg"
        style={{ width: "100%" }}
      />
    </div>
  );
}
const MentalHealthProHelp: React.FC<Props> = React.memo(Component);
export default MentalHealthProHelp;
