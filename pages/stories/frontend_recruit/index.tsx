import React, { useState } from "react";
import { Tree, Card, InputNumber, message } from "antd";
import "antd/dist/antd.css";
import { DataNode } from "antd/lib/tree";
import NoSSR from "react-no-ssr";
import { Chart } from "@antv/g2";

let index: number = 0;

function generateId(): number {
  const id = -(new Date().getTime() * 1000 + index);
  index = (index + 1) % 1000;
  return id;
}

const ConfigNode = ({
  key,
  title,
  tags,
  guangdu,
  depth,
  required,
}: {
  key: string;
  required?: boolean;
  title: string;
  tags: string[];
  guangdu: {
    min: number;
    max: number;
    default: number;
    onChange: (v: number) => void;
  };
  depth: {
    min: number;
    max: number;
    default: number;
    onChange: (v: number) => void;
  };
}) => {
  return {
    title: (
      <span
        style={{
          color: required ? "red" : "",
        }}
      >
        {title}
        {required ? "*" : ""}({guangdu.min + depth.min} ~{" "}
        {guangdu.max + depth.max})
      </span>
    ),
    selectable: false,
    key,
    children: [
      {
        key: `${key}_v`,
        selectable: false,
        title: (
          <div>
            <div>
              <label style={{ marginRight: 10 }}>参考关键词：</label>
              {tags.map((s, si) => (
                <span key={si} style={{ marginRight: 5 }}>
                  {s}
                </span>
              ))}
            </div>
            <div>
              <label style={{ marginRight: 10 }}>参考面试题：</label>
              <a onClick={() => message.info("正在整理！")}>链接</a>
            </div>
            <div>
              <label style={{ marginRight: 10 }}>广度评分：</label>
              <InputNumber
                min={guangdu.min}
                max={guangdu.max}
                defaultValue={guangdu.default}
                onChange={guangdu.onChange}
              />
            </div>
            <div>
              <label style={{ marginRight: 10 }}>深度评分：</label>
              <InputNumber
                min={depth.min}
                max={depth.max}
                defaultValue={depth.default}
                onChange={depth.onChange}
              />
            </div>
          </div>
        ),
      },
    ],
  };
};

function ChartComponent({
  data,
}: {
  data: { name: string; value: number; type: string }[];
}) {
  React.useEffect(() => {
    const chart = new Chart({
      container: "myChart",
      autoFit: true,
      height: 500,
    });
    chart.data(data);
    chart.scale("value", {
      alias: "得分",
    });
    chart.axis("name", {
      tickLine: null,
      line: null,
    });
    chart.axis("value", {
      label: null,
      title: {
        style: {
          fontSize: 14,
          fontWeight: 300,
        },
      },
      grid: null,
    });
    chart.legend({
      position: "top",
    });
    chart.coordinate("rect").transpose();
    chart.tooltip({
      shared: true,
      showMarkers: false,
    });
    chart.interaction("active-region");
    chart
      .interval()
      .adjust("stack")
      .position("name*value")
      .color("type*name", (type, name) => {
        if (type === "得分") {
          return "#1890ff";
        }
        if (type === "广度得分") {
          return "#ced4d9";
        }
        if (type === "深度得分") {
          return "#f0f2f3";
        }
        // if (type === "首都人口" && name === "中国（北京）") {
        //   return "#f5222d";
        // }
      })
      .size(26)
      .label("value*type", (val, t) => {
        const color = t === "广度得分" ? "white" : "#47494b";
        if (val < 0.05) {
          return null;
        }
        return {
          position: "middle",
          offset: 0,
          style: {
            fontSize: 12,
            fill: color,
            lineWidth: 0,
            stroke: null,
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)",
          },
        };
      });
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div id="myChart" />;
}

function ChartComponent2({
  data,
}: {
  data: {
    item: string;
    count: number;
    percent: number;
  }[];
}) {
  React.useEffect(() => {
    const chart = new Chart({
      container: "myChart2",
      autoFit: true,
      height: 500,
    });

    chart.coordinate("theta", {
      radius: 0.75,
    });

    chart.data(data);

    chart.scale("percent", {
      formatter: (val) => {
        val = val * 100 + "%";
        return val;
      },
    });

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });

    chart
      .interval()
      .position("percent")
      .color("item")
      .label("percent", {
        content: (data) => {
          return `${data.item}: ${data.percent * 100}%`;
        },
      })
      .adjust("stack");

    chart.interaction("element-active");

    chart.render();
    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div id="myChart2" />;
}

const personRequireItems = {
  school: {
    key: "school",
    name: "毕业学校",
  },
};

const PersonNode = ({
  title,
  key,
  value,
  onChange,
}: {
  title: string;
  key: string;
  value: number;
  onChange: (v: number) => void;
}) => {
  return {
    title: (
      <span
        style={{
          color: personRequireItems[key] ? "red" : "",
        }}
      >
        {title}
        {personRequireItems[key] ? "*" : ""}
      </span>
    ),
    key: key,
    children: [
      {
        selectable: false,
        key: `${key}_v`,
        title: (
          <div>
            <label style={{ marginRight: 10 }}>评分：</label>
            <InputNumber
              min={0}
              max={20}
              defaultValue={0}
              value={value}
              onChange={onChange}
            />
          </div>
        ),
      },
    ],
  };
};

export default function Component() {
  const [widthScore, setwidthScore] = useState(0);
  const [depthScore, setdepthScore] = useState(0);

  const [personScore, setpersonScore] = useState<{
    school: number;
    major: number;
    honor: number;
    workage: number;
    nature: number;
  }>({
    school: 0,
    major: 0,
    honor: 0,
    workage: 0,
    nature: 0,
  });

  const [computeWidthScore, setcomputeWidthScore] = useState<{
    digitCircuit: number;
    hardware: number;
    compile: number;
    os: number;
    network: number;
  }>({
    digitCircuit: 0,
    hardware: 0,
    compile: 0,
    os: 0,
    network: 0,
  });

  const [computeDepthScore, setcomputeDepthScore] = useState<{
    digitCircuit: number;
    hardware: number;
    compile: number;
    os: number;
    network: number;
  }>({
    digitCircuit: 0,
    hardware: 0,
    compile: 0,
    os: 0,
    network: 0,
  });

  const [codebasicWidthScore, setcodebasicWidthScore] = useState<{
    datastructure: number;
    designpattern: number;
    database: number;
    codelng: number;
    ideology: number;
    algorithm: number;
    commonknow: number;
    arch: number;
  }>({
    datastructure: 0,
    designpattern: 0,
    database: 0,
    codelng: 0,
    ideology: 0,
    algorithm: 0,
    commonknow: 0,
    arch: 0,
  });

  const [codebasicDepthScore, setcodebasicDepthScore] = useState<{
    datastructure: number;
    designpattern: number;
    database: number;
    codelng: number;
    ideology: number;
    algorithm: number;
    commonknow: number;
    arch: number;
  }>({
    datastructure: 0,
    designpattern: 0,
    database: 0,
    codelng: 0,
    ideology: 0,
    algorithm: 0,
    commonknow: 0,
    arch: 0,
  });

  const [feskillWidthScore, setfeskillWidthScore] = useState<{
    uiux: number;
    platform: number;
    html: number;
    javascript: number;
    typescript: number;
    react: number;
    development: number;
    module: number;
    improvement: number;
    felng: number;
  }>({
    uiux: 0,
    platform: 0,
    html: 0,
    javascript: 0,
    typescript: 0,
    react: 0,
    development: 0,
    module: 0,
    improvement: 0,
    felng: 0,
  });

  const [feskillDepthScore, setfeskillDepthScore] = useState<{
    uiux: number;
    platform: number;
    html: number;
    javascript: number;
    typescript: number;
    react: number;
    development: number;
    module: number;
    improvement: number;
    felng: number;
  }>({
    uiux: 0,
    platform: 0,
    html: 0,
    javascript: 0,
    typescript: 0,
    react: 0,
    development: 0,
    module: 0,
    improvement: 0,
    felng: 0,
  });

  const [projectWidthScore, setprojectWidthScore] = useState<{
    app: number;
    achivement: number;
    team: number;
  }>({
    app: 0,
    achivement: 0,
    team: 0,
  });

  const [projectDepthScore, setprojectDepthScore] = useState<{
    app: number;
    achivement: number;
    team: number;
  }>({
    app: 0,
    achivement: 0,
    team: 0,
  });

  const treeData: DataNode[] = [
    {
      title: "个人部分(得分范围：0 ~ 80）（权重：20%）",
      key: "person",
      children: [
        PersonNode({
          title: "毕业学校(0~20)",
          key: "school",
          value: personScore.school,
          onChange: (v) => {
            setpersonScore({ ...personScore, school: v });
          },
        }),
        PersonNode({
          title: "毕业专业(0~10)",
          key: "major",
          value: personScore.major,
          onChange: (v) => {
            setpersonScore({ ...personScore, major: v });
          },
        }),
        PersonNode({
          title: "荣誉奖励(0~20)",
          key: "honor",
          value: personScore.honor,
          onChange: (v) => {
            setpersonScore({ ...personScore, honor: v });
          },
        }),
        PersonNode({
          title: "工作年限(0~10)",
          key: "workage",
          value: personScore.workage,
          onChange: (v) => {
            setpersonScore({ ...personScore, workage: v });
          },
        }),
        PersonNode({
          title: "个人性格(0~10)",
          key: "nature",
          value: personScore.nature,
          onChange: (v) => {
            setpersonScore({ ...personScore, nature: v });
          },
        }),
      ],
    },
    {
      title: "计算机基础",
      key: "computer",
      children: [
        ConfigNode({
          title: "数字电路",
          key: "digitCircuit",
          tags: [
            "数组",
            "链表",
            "栈",
            "队列",
            "树",
            "二叉树",
            "平衡二叉树",
            "图",
            "字符串",
            "堆",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcomputeWidthScore({ ...computeWidthScore, digitCircuit: v }),
          },
          depth: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcomputeDepthScore({ ...computeDepthScore, digitCircuit: v }),
          },
        }),
        ConfigNode({
          title: "计算机硬件",
          key: "hardware",
          tags: [
            "存储器",
            "运算器",
            "控制器",
            "输入输出设备",
            "性能指标（吞吐|CPU周期|CPI|CPU执行时间）",
            "Cache写操作策略",
            "Cache映射",
            "指令系统",
            "指令寻址",
            "数据寻址",
            "RISC",
            "CPU基本结构",
            "寄存器",
            "控制单元设计",
            "微指令",
            "总线",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcomputeWidthScore({ ...computeWidthScore, hardware: v }),
          },
          depth: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcomputeDepthScore({ ...computeDepthScore, hardware: v }),
          },
        }),
        ConfigNode({
          title: "编译原理",
          key: "compile",
          tags: [
            "机器语言",
            "汇编语言",
            "高级语言",
            "编译过程",
            "编译器",
            "词法分析",
            "语法分析",
            "解释器",
            "词法记号",
            "词法单元",
            "有限自动机",
            "上下文无关文法",
            "自上而下分析",
            "LR分析器",
            "运行内存管理",
            "中间代码生成",
            "C语言编译系统",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcomputeWidthScore({ ...computeWidthScore, compile: v }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcomputeDepthScore({ ...computeDepthScore, compile: v }),
          },
        }),
        ConfigNode({
          title: "操作系统",
          key: "os",
          tags: [
            "磁盘调度",
            "内存分配",
            "页面置换",
            "进程与线程",
            "并发与并行",
            "进程间通信",
            "进程间同步",
            "死锁",
            "进程调度",
            "分页分段",
            "虚拟内存",
            "IO多路复用",
            "中断和轮询",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcomputeWidthScore({ ...computeWidthScore, os: v }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcomputeDepthScore({ ...computeDepthScore, os: v }),
          },
        }),
        ConfigNode({
          title: "计算器网络",
          key: "network",
          required: true,
          tags: [
            "OSI模型",
            "http协议",
            "https",
            "TCP/IP",
            "UDP",
            "路由选择",
            "DNS|NAT|DHCP,ARP|RAPR",
            "子网掩码",
            "nginx原理",
            "网络安全",
            "网络安全与加密",
            "流式音视频",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcomputeWidthScore({ ...computeWidthScore, network: v }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcomputeDepthScore({ ...computeDepthScore, network: v }),
          },
        }),
      ],
    },
    {
      title: "编程基础",
      key: "codebasic",
      children: [
        ConfigNode({
          title: "数据结构",
          key: "datastructure",
          tags: [
            "数组",
            "链表",
            "栈",
            "队列",
            "树",
            "二叉树",
            "平衡二叉树",
            "图",
            "字符串",
            "堆",
          ],
          guangdu: {
            min: 0,
            max: 15,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                datastructure: v,
              }),
          },
          depth: {
            min: 0,
            max: 15,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                datastructure: v,
              }),
          },
        }),
        ConfigNode({
          title: "设计模式",
          key: "designpattern",
          tags: [
            "创造式：单例、工厂、抽象工厂、建造者、原型",
            "结构式：适配器、桥接、结构、装饰器、外观、享元、代理",
            "行为式：责任链、命令、迭代、中间人、备忘、观察者、状态、策略、模板、访问",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                designpattern: v,
              }),
          },
          depth: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                designpattern: v,
              }),
          },
        }),
        ConfigNode({
          title: "数据库",
          key: "database",
          tags: [
            "事务特性",
            "事务并发",
            "存储引擎",
            "查询语句",
            "索引",
            "聚集索引",
            "关系型数据库",
            "读写分离",
            "主从复制",
            "sql优化",
            "慢查询优化",
            "内外连接",
            "交叉连接",
            "高并发",
            "恢复机制",
            "各种键",
            "第X范式",
            "数据排序",
            "通配符",
            "组合查询",
            "联结表",
            "聚集函数",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                database: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                database: v,
              }),
          },
        }),
        ConfigNode({
          title: "编程语言",
          key: "codelng",
          tags: [
            " C/C++",
            "C#",
            "Java",
            "Forth",
            "Lisp",
            "Perl",
            "Fortran",
            "Objective-C",
            "VB",
            "Matlab",
            "Shell",
            "PHP",
            "XML",
            "Python",
            "R",
            "Swift",
            "SQL",
            "Ruby",
            "Kotlin",
            "Scala",
            "Rush",
            "Assembly",
            "Lua",
            "Perl",
            "Haskell",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                codelng: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                codelng: v,
              }),
          },
        }),
        ConfigNode({
          title: "编程思想",
          key: "ideology",
          tags: [
            "并发编程:重入锁、死锁、竞争条件、饥饿、生产者消费者问题、线程、互斥原子性、java线程状态、线程池、乐观悲观锁、CAS",
            "面向对象编程",
            "函数式",
            "DDD",
            "TDD",
            "敏捷开发",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                ideology: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                ideology: v,
              }),
          },
        }),
        ConfigNode({
          title: "算法能力",
          key: "algorithm",
          tags: [
            "复杂度",
            "算法范式",
            "数学运算",
            "位运算",
            "子序列问题",
            "数组查询问题",
            "数组排序",
            "字符串问题",
            "动态规划",
            "回溯",
            "链表操作",
            "树操作",
            "栈操作",
            "矩阵",
            "常见算法等",
          ],
          guangdu: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                algorithm: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                algorithm: v,
              }),
          },
        }),
        ConfigNode({
          title: "通用知识",
          key: "commonknow",
          tags: ["ASCII", "正则表达式", "gzip原理", "加密原理"],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                commonknow: v,
              }),
          },
          depth: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                commonknow: v,
              }),
          },
        }),
        ConfigNode({
          title: "架构能力",
          key: "arch",
          tags: [
            "微应用",
            "微服务",
            "项目架构",
            "devops",
            "多项目仓库",
            "代码管理",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setcodebasicWidthScore({
                ...codebasicWidthScore,
                arch: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setcodebasicDepthScore({
                ...codebasicDepthScore,
                arch: v,
              }),
          },
        }),
      ],
    },
    {
      title: "前端技能部分",
      key: "feskill",
      children: [
        ConfigNode({
          title: "UI/UX",
          key: "uiux",
          required: true,
          tags: [
            "设计规范",
            "文档管理",
            "CSS样式: 盒模型、选择器、优先级、水平垂直居中、flexbox、兼容性问题、BFC、定位问题、浮动问题、预处理器、优化与规范、响应式设计、字体问题、可视化判断、换行问题",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                uiux: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                uiux: v,
              }),
          },
        }),
        ConfigNode({
          title: "平台原理",
          key: "platform",
          tags: [
            "平台原理",
            "浏览器工作原理",
            "浏览器架构",
            "渲染引擎",
            "HTML解析原理",
            "CSS解析",
            "渲染树",
            "CriticalRenderingPath",
            "Layout and Paint(重绘回流）原理",
            "合成原理",
            "浏览器缓存: 内存缓存、worker缓存、http缓存、push缓存、内存缓存实现、http缓存实现、请求头与响应头关键词",
            "平台技术: chromium、web worker、wx小程序原理",
            "综合叙述: url输入到加载全过程: 代码编译、内存运行、CPU运行、浏览器内部处理、网络DNS查询、TCP链接、http请求、http缓存、http报文内容、反向代理、渲染流程、CRP过程、用户交互、js并发模型（事件循环）、资源获取、ajax、视图更新等",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                platform: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                platform: v,
              }),
          },
        }),
        ConfigNode({
          title: "HTML",
          key: "html",
          tags: [
            "requestAnimationFrame",
            "Eventloop",
            "浏览器窗口：clientHeight等属性",
            "锚点定位",
            "resource-hints: preload等",
            "标签语义等",
            "路由原理",
            "相关API原理",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                html: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                html: v,
              }),
          },
        }),
        ConfigNode({
          title: "javascript",
          key: "javascript",
          required: true,
          tags: [
            "ECMA",
            "ES6: let|const、变量解构、字符串拓展、正则拓展、数值拓展、函数拓展、数组拓展、对象拓展、Symbol|Map|Set等、Module规范、import",
            "ES8",
            "ES9",
            "数据类型 | 数字精度",
            "表达式与操作符: new | this",
            "标准内置对象",
            "闭包",
            "继承与原型链",
            "垃圾回收与内存泄漏",
            "异步原理与实现",
            "标准函数实现与原理",
            "浅拷贝与深拷贝",
            "Immutable",
            "共享内存",
            "StreamAPI",
          ],
          guangdu: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                javascript: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                javascript: v,
              }),
          },
        }),
        ConfigNode({
          title: "Typescript",
          key: "typescript",
          required: true,
          tags: [
            "基本类型",
            "接口类型：只读、函数、索引、类",
            "泛型",
            "高级类型：交集、联合、差异、别名、索引、映射、条件",
          ],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                typescript: v,
              }),
          },
          depth: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                typescript: v,
              }),
          },
        }),
        ConfigNode({
          title: "React",
          key: "react",
          required: true,
          tags: [
            "生命周期",
            "钩子函数",
            "setState原理",
            "函数组件",
            "协调算法：diff算法、fiber原理",
            "HOC",
            "上下文",
            "组件设计与规范",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                react: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                react: v,
              }),
          },
        }),
        ConfigNode({
          title: "开发过程",
          required: true,
          key: "development",
          tags: [
            "npm原理",
            "git原理与使用",
            "打包原理：webpack",
            "单元测试",
            "发布策略",
            "日志与监控系统",
            "数据埋点",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                development: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                development: v,
              }),
          },
        }),
        ConfigNode({
          title: "运行模块",
          key: "module",
          required: true,
          tags: [
            "状态管理: redux | mobx",
            "graphql",
            "react-router",
            "threejs",
          ],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                module: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                module: v,
              }),
          },
        }),
        ConfigNode({
          title: "软件优化",
          key: "improvement",
          tags: ["复杂度", "优化度量", "实现模式", "seo", "web安全"],
          guangdu: {
            min: 0,
            max: 5,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                improvement: v,
              }),
          },
          depth: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                improvement: v,
              }),
          },
        }),
        ConfigNode({
          title: "其他语言",
          key: "felng",
          tags: ["Webassbmly", "React-Native", "Vue", "Flutter"],
          guangdu: {
            min: 0,
            max: 10,
            default: 0,
            onChange: (v) =>
              setfeskillWidthScore({
                ...feskillWidthScore,
                felng: v,
              }),
          },
          depth: {
            min: 0,
            max: 15,
            default: 0,
            onChange: (v) =>
              setfeskillDepthScore({
                ...feskillDepthScore,
                felng: v,
              }),
          },
        }),
      ],
    },
    {
      title: "项目经验",
      key: "project",
      children: [
        ConfigNode({
          title: "业务能力",
          key: "app",
          tags: [
            "虚拟列表原理",
            "实时在线文档方案",
            "视频直播方案",
            "地图软件方案",
            "3D软件方案",
          ],
          guangdu: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setprojectWidthScore({
                ...projectWidthScore,
                app: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setprojectDepthScore({
                ...projectDepthScore,
                app: v,
              }),
          },
        }),
        ConfigNode({
          title: "已完成项目评估",
          key: "achivement",
          required: true,
          tags: ["项目规模", "项目指标", "项目难度", "项目挑战"],
          guangdu: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setprojectWidthScore({
                ...projectWidthScore,
                achivement: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setprojectDepthScore({
                ...projectDepthScore,
                achivement: v,
              }),
          },
        }),
        ConfigNode({
          title: "管理与团队协作",
          key: "team",
          tags: ["项目进度管理", "团队管理", "技术分享"],
          guangdu: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setprojectWidthScore({
                ...projectWidthScore,
                team: v,
              }),
          },
          depth: {
            min: 0,
            max: 20,
            default: 0,
            onChange: (v) =>
              setprojectDepthScore({
                ...projectDepthScore,
                team: v,
              }),
          },
        }),
      ],
    },
  ];

  const score = {
    person: Object.values(personScore).reduce((p, c) => p + c, 0),
    computeWidthScore: Object.values(computeWidthScore).reduce(
      (p, c) => p + c,
      0
    ),
    computeDepthScore: Object.values(computeDepthScore).reduce(
      (p, c) => p + c,
      0
    ),
    codebasicWidthScore: Object.values(codebasicWidthScore).reduce(
      (p, c) => p + c,
      0
    ),
    codebasicDepthScore: Object.values(codebasicDepthScore).reduce(
      (p, c) => p + c,
      0
    ),
    feskillWidthScore: Object.values(feskillWidthScore).reduce(
      (p, c) => p + c,
      0
    ),
    feskillDepthScore: Object.values(feskillDepthScore).reduce(
      (p, c) => p + c,
      0
    ),
    projectWidthScore: Object.values(projectWidthScore).reduce(
      (p, c) => p + c,
      0
    ),
    projectDepthScore: Object.values(projectDepthScore).reduce(
      (p, c) => p + c,
      0
    ),
  };

  const totalScore = Object.values(score).reduce((p, c) => p + c, 0);

  return (
    <NoSSR>
      <h1>正在开发中...</h1>
      <p>kunsam制作。开发计划：</p>
      <div style={{ paddingLeft: 15 }}>
        <p>· 导入pdf自动获取候选人基础评分（用于第一轮快速筛选）</p>
        <p>· 生成候选人得分雷达图</p>
        <p>· 生成候选人技能方向偏好分析</p>
        <p>· 出个候选人填写的版本，填了之后需要做对应分类的面试题</p>
      </div>
      <p>说明：</p>
      <div style={{ paddingLeft: 15 }}>
        <p>广度评分：只要候选人命中技能标签即可考虑+上广度得分</p>
        <p>深度评分：候选人精准,深度的了解陈述某一个专业/技能/模块进行加分</p>
      </div>
      <div
        style={{
          width: "100%",
          height: 10,
          borderBottom: "1px solid #ccc",
          marginBottom: 5,
        }}
      ></div>
      <Tree treeData={treeData} defaultExpandAll></Tree>

      <div style={{ margin: 15 }}>
        <Card title="得分结果">
          <div style={{ marginBottom: 10, fontWeight: 500, fontSize: 20 }}>
            总得分：
            {totalScore}
          </div>

          <div style={{ marginTop: 15, paddingLeft: 10 }}>
            <h3 style={{ marginBottom: 10 }}>
              个人得分：{Object.values(personScore).reduce((p, c) => p + c, 0)}
            </h3>

            <div style={{ marginBottom: 10 }}>
              <h3>计算机基础</h3>
              <div>
                计算机基础广度得分：
                {Object.values(computeWidthScore).reduce((p, c) => p + c, 0)}
              </div>
              <div>
                计算机基础深度得分：
                {Object.values(computeDepthScore).reduce((p, c) => p + c, 0)}
              </div>
            </div>

            <div style={{ marginBottom: 10 }}>
              <h3>编程基础</h3>
              <div>
                编程基础广度得分：
                {Object.values(codebasicWidthScore).reduce((p, c) => p + c, 0)}
              </div>
              <div>
                编程基础深度得分：
                {Object.values(codebasicDepthScore).reduce((p, c) => p + c, 0)}
              </div>
            </div>

            <div style={{ marginBottom: 10 }}>
              <h3>前端技能得分</h3>
              <div>
                前端技能广度得分：
                {Object.values(feskillWidthScore).reduce((p, c) => p + c, 0)}
              </div>
              <div>
                前端技能深度得分：
                {Object.values(feskillDepthScore).reduce((p, c) => p + c, 0)}
              </div>
            </div>

            <div style={{ marginBottom: 10 }}>
              <h3>项目经验得分</h3>
              <div>
                项目经验广度得分：
                {Object.values(projectWidthScore).reduce((p, c) => p + c, 0)}
              </div>
              <div>
                项目经验深度得分：
                {Object.values(projectDepthScore).reduce((p, c) => p + c, 0)}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div style={{ margin: 15 }}>
        <Card>
          {/* <div style={{ display: "flex", justifyContent: "end" }}>
            <Button>生成图表</Button>
          </div> */}
          <ChartComponent
            data={[
              {
                name: "个人得分",
                value: Object.values(personScore).reduce((p, c) => p + c, 0),
                type: "得分",
              },
              {
                name: "计算机基础得分",
                type: "广度得分",
                value: Object.values(computeWidthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "计算机基础得分",
                type: "深度得分",
                value: Object.values(computeDepthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "编程基础得分",
                type: "广度得分",
                value: Object.values(codebasicWidthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "编程基础得分",
                type: "深度得分",
                value: Object.values(codebasicDepthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "前端技能得分",
                type: "广度得分",
                value: Object.values(feskillWidthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "前端技能得分",
                type: "深度得分",
                value: Object.values(feskillDepthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "项目经验得分",
                type: "广度得分",
                value: Object.values(projectWidthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
              {
                name: "项目经验得分",
                type: "深度得分",
                value: Object.values(projectDepthScore).reduce(
                  (p, c) => p + c,
                  0
                ),
              },
            ]}
          />
        </Card>
      </div>

      <div style={{ margin: 15 }}>
        <Card>
          {/* <div style={{ display: "flex", justifyContent: "end" }}>
            <Button>生成图表</Button>
          </div> */}
          <ChartComponent2
            data={Object.keys(score).map((key) => ({
              item: key,
              count: score[key],
              percent: score[key] / totalScore,
            }))}
          />
        </Card>
      </div>
    </NoSSR>
  );
}
