import React from "react";
import { Parallax } from "react-parallax";
interface Props {
  scrollTop: number;
}

function Component({ scrollTop }: Props) {
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
        1. 控制局面
      </h2>
      <p>
        当压力存在时，说明当前的局面或状况已经超出了您的可控或期望范围，尽可能的从根源上控制住当前的局面，明确触发压力的原因，比如
      </p>
      <ul>
        <li>Regularly Issues(偶然的问题): 比如支付一笔账单</li>
        <li>One-off Events(一次性的问题): 搬家或考试</li>
        <li>Ongoing stressful events(长期的问题): 护理病人或工作困难</li>
      </ul>
      <p style={{ marginBottom: 20 }}>
        对于非长期的问题，可以使用可预测性能够击败压力，尽早的对未来工作、学习作出合理的规划来满足自己的期望。有组织有计划的安排工作学习负担，有计划的进行经济支出，合理控制自己的欲望。
      </p>

      <p>
        对于长期的问题同样要放平心态，逐步适应压力，把大困难分解为小问题逐步解决。
      </p>

      <p style={{ marginTop: 20 }}>
        《格局》《情商》此类书籍的热销，说明在职场工作中，除了工作内容之外，还有一些职场生存技巧，可以帮助您更好的应对工作局面，减少压力的产生
      </p>

      <div style={{ textAlign: "center" }}>
        <img
          src="/stories/mental_health/stress/book1.jpg"
          style={{ width: 155, margin: "0 auto" }}
        />
        <img
          src="/stories/mental_health/stress/book2.jpg"
          style={{ width: 200, margin: "0 auto" }}
        />
      </div>
    </div>
  );
}
const ControlStress: React.FC<Props> = React.memo(Component);
export default ControlStress;
