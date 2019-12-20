import React from "react";
import fetch from "isomorphic-unfetch";
import { Input } from "antd";
import { Experiment, ExprimentComponent } from "./expriment";
import { GroupComponent } from "./group";
import { Group } from "antd/lib/radio";

export class ABtestApp extends React.Component<
  {
    auth_key: string;
    appId: string;
  },
  any
> {
  private _flagsGroupMap: Map<string, Group[]>;
  private _statsGroupMap: Map<string, Group[]>;

  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      groups: [],
      statsSearchGroups: [],
      flagsSearchGroups: []
    };
    this._flagsGroupMap = new Map();
    this._statsGroupMap = new Map();
  }
  componentDidMount() {
    const { auth_key, appId } = this.props;
    if (!(auth_key && appId)) return;

    console.log(auth_key, appId, "appIdappId");
    fetch(`https://experiment-control.appadhoc.com/apps/${appId}/groups`, {
      method: "GET",
      mode: "cors",
      headers: {
        "auth-key": auth_key,
        "Sec-Fetch-Mode": "cors"
      }
    }).then(async res => {
      const data = await res.json();
      const groups = (data && data.groups) || [];
      if (groups && groups.length) {
        this._flagsGroupMap.clear();
        this._statsGroupMap.clear();
        groups.forEach(group => {
          if (group.experiments) {
            group.experiments.forEach(exp => {
              const expObject: Experiment = {
                id: exp.id,
                name: exp.name,
                stats: exp.stats,
                group_id: exp.group_id,
                is_deleted: exp.is_deleted,
                flags: exp.flags
              };
              if (exp.flags) {
                Object.keys(exp.flags).forEach(key => {
                  const history = this._flagsGroupMap.get(key) || [];
                  this._flagsGroupMap.set(key, history.concat([group]));
                });
              }
              if (exp.stats) {
                exp.stats.forEach(stat => {
                  const history = this._statsGroupMap.get(stat) || [];
                  this._statsGroupMap.set(stat, history.concat([group]));
                });
              }
            });
          }
        });
      }
      this.setState({
        fetched: true,
        groups: groups
      });
      console.log(data, groups, "datadata");
    });
  }

  render() {
    const {
      groups,
      fetched,
      statsSearchGroups,
      flagsSearchGroups,
      showStatsResult,
      showFlagsResult
    } = this.state;
    if (!groups.length) {
      if (fetched) {
        return <div>暂无结果</div>;
      }
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <span>搜索Flags:</span>
          <Input
            width={200}
            placeholder="输入Flags..."
            onChange={e => {
              const value = e.target.value;
              if (value) {
                const groups = this._flagsGroupMap.get(value);
                this.setState({
                  showFlagsResult: true,
                  flagsSearchGroups: groups || []
                });
              } else {
                this.setState({ showFlagsResult: false });
              }
            }}
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <p>{showFlagsResult && !flagsSearchGroups.length ? "暂无结果" : ""}</p>
          {flagsSearchGroups.map(group => (
            <GroupComponent key={group.id} group={group} />
          ))}
        </div>
        <div style={{ marginTop: 15 }}>
          <span>搜索Stats Value:</span>
          <Input
            width={200}
            placeholder="搜索Stat..."
            onChange={e => {
              const value = e.target.value;
              if (value) {
                const groups = this._statsGroupMap.get(value);
                this.setState({
                  showStatsResult: true,
                  statsSearchGroups: groups || []
                });
              } else {
                this.setState({
                  showStatsResult: false
                });
              }
            }}
          />
        </div>
        <div>
          <p>
            {showStatsResult && !statsSearchGroups.length ? "暂无结果" : ""}
          </p>
          {statsSearchGroups.map(group => (
            <GroupComponent key={group.id} group={group} />
          ))}
        </div>
        <div style={{ marginTop: 10 }}>--------------------</div>
        <div
          style={{
            marginTop: 30,
            display: showFlagsResult || showStatsResult ? "none" : ""
          }}
        >
          {groups.map(group => (
            <GroupComponent key={group.id} group={group} />
          ))}
        </div>
      </div>
    );
  }
}
