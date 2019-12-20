import React from "react";
import { Experiment, ExprimentComponent } from "./expriment";

export interface Group {
  id: string;
  name: string;
  description: string;
  control?: Experiment;
  experiments: Experiment[];
}

export class GroupComponent extends React.Component<
  {
    group: {
      control?: Experiment;
      experiments: Experiment[];
    };
  },
  any
> {
  render() {
    const { group } = this.props;
    return (
      <div style={{ border: "1px solid #ccc", padding: 5, marginBottom: 15 }}>
        {!group.control ? null : (
          <div>
            <h2 style={{ textAlign: "center" }}>
              {group.control.description}:{group.control.name}
            </h2>
            <ExprimentComponent expriment={group.control} />
          </div>
        )}
        <div>
          {group.experiments.map((exp: Experiment) => (
            <div key={exp.id}>
              <h2 style={{ textAlign: "center" }}>
                {exp.description}:{exp.name}
              </h2>
              <ExprimentComponent expriment={exp} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
