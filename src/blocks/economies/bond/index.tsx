import F2 from "@antv/f2";
import React, { useEffect } from "react";
import { clone, values } from "lodash";

const data = [
  { genre: "Sports", sold: 275 },
  { genre: "Strategy", sold: 115 },
  { genre: "Action", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 },
];

const data2 = [
  {
    year: "1955",
    value: 274,
    percent: 64,
  },
  {
    year: "1975",
    value: 533,
    percent: 31,
  },
  {
    year: "1995",
    value: 4794,
    percent: 64,
  },
  {
    year: "2015",
    value: 18151,
    percent: 100,
  },
  {
    year: "2019",
    value: 22719,
    percent: 107,
  },
  {
    year: "2021",
    value: 28400,
    percent: 125,
  },
];

// value单位是百万美元
const dataChina = [
  //   {
  //     year: "2009",
  //     value: 882487,
  //     percent: 0,
  //   },
  //   {
  //     year: "2010",
  //     value: 1023456,
  //   },
  //   {
  //     year: "2011",
  //     value: 1144672,
  //   },
  //   {
  //     year: "2012",
  //     dept: 1245015,
  //     gdp: 8455167,
  //   },
  //   {
  //     year: "2013",
  //     dept: 1432957,
  //     gdp: 9308926,
  //   },
  //   {
  //     year: "2014",
  //     dept: 1541686,
  //     gdp: 10103295,
  //   },
  {
    year: "2015",
    dept: 1645614,
    gdp: 10814381,
  },
  {
    year: "2016",
    dept: 1729320,
    gdp: 11717655,
  },
  {
    year: "2017",
    dept: 2071379,
    gdp: 13062117,
  },
  {
    year: "2018",
    dept: 2175950,
    gdp: 14431792,
  },
  {
    year: "2019",
    dept: 2413715,
    gdp: 15487299,
  },
  {
    year: "2020",
    dept: 3201533,
    gdp: 12922334,
  },
];

const dataUSA = [
  //   {
  //     year: "2012",
  //     percent: 98.368,
  //     gdp: 16253.97 * 1000,
  //   },
  //   {
  //     year: "2013",
  //     percent: 100.05,
  //     gdp: 16843.196 * 1000,
  //   },
  //   {
  //     year: "2014",
  //     percent: 101.428,
  //     gdp: 17550.688 * 1000,
  //   },
  {
    year: "2015",
    percent: 100.757,
    gdp: 18206.024 * 1000,
  },
  {
    year: "2016",
    percent: 104.566,
    gdp: 18695.106 * 1000,
  },
  {
    year: "2017",
    percent: 103.223,
    gdp: 19479.623 * 1000,
  },
  {
    year: "2018",
    percent: 104.462,
    gdp: 20527.159 * 1000,
  },
  {
    year: "2019",
    percent: 105.232,
    gdp: 21372.582 * 1000,
  },
  {
    year: "2020",
    percent: 125.178,
    gdp: 20893.746 * 1000,
  },
];

const data2_transformed = [];
data2.forEach((item) => {
  data2_transformed.push({
    year: item.year,
    name: "GDP",
    percent: 1,
    value: Math.round(item.value / (item.percent / 100)),
  });
  data2_transformed.push({
    year: item.year,
    name: "DEBT",
    percent: item.percent / 100,
    value: item.value,
  });
});

const data3_transformed = [];
dataChina.forEach((item) => {
  data3_transformed.push({
    country: "CHINA",
    year: item.year,
    name: "CHINA-GDP",
    value: item.gdp,
  });
  data3_transformed.push({
    country: "CHINA",
    year: item.year,
    name: "CHINA-DEBT",
    value: item.dept,
  });
});
dataUSA.forEach((item) => {
  data3_transformed.push({
    country: "USA",
    year: item.year,
    name: "USA-GDP",
    value: item.gdp,
  });
  data3_transformed.push({
    country: "USA",
    year: item.year,
    name: "USA-DEBT",
    value: Math.round(item.gdp * (item.percent / 100)),
  });
});

export default function EconomyBondAnalyst() {
  //   useEffect(() => {
  //     const chart = new F2.Chart({
  //       id: "myChart",
  //       pixelRatio: window.devicePixelRatio, // 指定分辨率
  //     });

  //     // Step 2: 载入数据源
  //     chart.source(data);

  //     // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
  //     chart.interval().position("genre*sold").color("genre");

  //     // Step 4: 渲染图表
  //     chart.render();
  //     return () => {
  //       chart.destroy();
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const chart = new F2.Chart({
  //       id: "myChart2",
  //       pixelRatio: window.devicePixelRatio,
  //     });
  //     chart.source(data2_transformed, {
  //       percent: {
  //         min: 0,
  //         formatter: function formatter(val) {
  //           return (val * 100).toFixed(0) + "%";
  //         },
  //       },
  //     });
  //     // chart.coord({
  //     //   transposed: true,
  //     // });

  //     chart.tooltip({
  //       custom: true, // 自定义 tooltip 内容框
  //       onChange: function onChange(obj) {
  //         const legend = chart.get("legendController").legends?.top[0];
  //         if (!legend) {
  //           return;
  //         }
  //         const tooltipItems = obj.items;
  //         const legendItems = legend.items;
  //         const map = {};
  //         legendItems.forEach(function (item) {
  //           map[item.name] = clone(item);
  //         });
  //         tooltipItems.forEach(function (item) {
  //           const name = item.name;
  //           const value = item.value;
  //           if (map[name]) {
  //             map[name].value = value;
  //           }
  //         });
  //         legend.setItems(values(map));
  //       },
  //       onHide: function onHide() {
  //         const legend = chart.get("legendController").legends?.top[0];
  //         legend && legend.setItems(chart.getLegendItems().country);
  //       },
  //     });
  //     chart
  //       .interval()
  //       .position("year*percent")
  //       .color("name", (value) => {
  //         if (value === "DEBT") {
  //           return "red";
  //         }
  //         return "#2FC25B";
  //       })
  //       .adjust("stack");

  //     chart.render();
  //   }, []);

  useEffect(() => {
    const chart = new F2.Chart({
      id: "myChart3",
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(data2_transformed);
    chart.tooltip({
      showItemMarker: false,
      background: {
        radius: 2,
        fill: "#1890FF",
        padding: [3, 5],
      },
      tooltipMarkerStyle: {
        fill: "#1890FF",
        fillOpacity: 0.1,
      },
      onShow: function onShow(ev) {
        const items = ev.items;
        items[0].value = "$" + items[0].value + "M";
      },
    });
    chart
      .interval()
      .position("year*value")
      .color("name", (value) => {
        if (value === "DEBT") {
          return "red";
        }
        return "gray";
      })
      .adjust({
        type: "dodge",
        marginRatio: 0.05, // 设置分组间柱子的间距
      });

    chart.render();

    const offset = -5;
    const canvas = chart.get("canvas");
    const group = canvas.addGroup({ zIndex: 100 });

    data2_transformed.forEach(function (obj) {
      const point = chart.getPosition(obj);

      if (obj.name === "DEBT") {
        const text = group.addShape("text", {
          attrs: {
            x: point.x + (obj.name === "DEBT" ? 10 : -10),
            y: point.y + (obj.name === "DEBT" ? -5 : -5),
            text: obj.value,
            textAlign: "center",
            textBaseline: "bottom",
            fill: "#ffffff",
            fontSize: 8,
          },
        });
      }
    });
    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const chart = new F2.Chart({
      id: "myChart4",
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(data3_transformed);
    chart.tooltip({
      showItemMarker: false,
      background: {
        radius: 2,
        fill: "#1890FF",
        padding: [3, 5],
      },
      tooltipMarkerStyle: {
        fill: "#1890FF",
        fillOpacity: 0.1,
      },
      onShow: function onShow(ev) {
        const items = ev.items;
        items[0].value = "$" + items[0].value + "M";
      },
    });

    chart
      .interval()
      .position("year*value")
      .color("name", (value) => {
        if (value === "CHINA-DEBT") {
          return "#F01705";
        }
        if (value === "CHINA-GDP") {
          return "#F97267";
        }
        if (value === "USA-DEBT") {
          return "#2D71E8";
        }
        if (value === "USA-GDP") {
          return "#5993F8";
        }
        return "gray";
      })
      .adjust({
        type: "dodge",
        marginRatio: 0.05, // 设置分组间柱子的间距
      });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      style={{
        paddingTop: 0,
        paddingBottom: 30,
        position: "relative",
        color: "#ffffff",
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/economy/bond-bg.mp4" type="video/mp4" />
      </video>
      {/* <canvas id="myChart"></canvas>
      <canvas id="myChart2" height="400"></canvas> */}
      <h2
        style={{
          textAlign: "center",
          paddingTop: 30,
          marginBottom: 30,
        }}
      >
        kunsam 数据
      </h2>

      <div
        style={{
          margin: 12,
          padding: 8,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>美国国债历史</h3>
        <p style={{ fontSize: 12, paddingLeft: 20, marginTop: 12 }}>
          单位：十亿美元($)
        </p>
        <canvas id="myChart3" height="400"></canvas>
      </div>

      <div
        style={{
          margin: 12,
          padding: 8,
          marginTop: 50,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>中美国债</h3>
        <p style={{ fontSize: 12, paddingLeft: 20, marginTop: 12 }}>
          单位：百万美元($)
        </p>
        <canvas id="myChart4" height="400"></canvas>
      </div>
    </div>
  );
}
