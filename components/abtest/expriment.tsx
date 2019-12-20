import React from "react";

export interface Experiment {
  id: string;
  name: string;
  description?: string;
  stats: string[];
  group_id: string;
  is_deleted: boolean;
  flags: { [key: string]: any };
}

export class ExprimentComponent extends React.Component<
  { expriment: Experiment },
  any
> {
  render() {
    const { expriment } = this.props;
    console.log(
      "1",
      expriment.flags,
      Object.entries(expriment.flags).map(([flag, value], index) => ({
        flag,
        value,
        index
      }))
    );
    return (
      <div style={{ padding: 2 }}>
        <h2>{expriment.name}:</h2>
        <p>
          <span>状态: {expriment.is_deleted ? "已删除" : "未删除"}</span>
        </p>
        <div>
          <h3>flags:</h3>
          {Object.entries(expriment.flags).map(([flag, value], index) => (
            <p style={{ marginLeft: 10 }} key={`${flag}${index}`}>
              {flag}: {value === undefined || value === "" ? "无值" : `${value}`}
            </p>
          ))}
        </div>
        <div>
          <h3>stats:</h3>
          {expriment.stats.map((stat, index) => (
            <p style={{ marginLeft: 10 }} key={`${stat}${index}`}>
              ${stat}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
