import React, { useEffect, useRef } from "react";

const colors = [
  "#b4b2b5",
  "#dfd73f",
  "#6ed2dc",
  "#66cf5d",
  "#c542cb",
  "#d0535e",
  "#3733c9",
];

export default function KunsamLogo() {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const innerWidth = canvasRef.current.clientWidth;
    const innerHeight = canvasRef.current.clientHeight;
    console.log(innerWidth, innerHeight, "innerHeight");
    function texts(color: string) {
      ctx.font = "16px Bungee Outline";
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.fillStyle = color;
      ctx.setTransform(1, -0.15, 0, 1, 0, 0);
      ctx.fillText("kunsam", innerWidth / 2 - 20, innerHeight / 2 + 50);

      // ctx.fillStyle = "white";
      // ctx.shadowBlur = 30;
      // ctx.shadowColor = color;
      // ctx.fillText("kunsam", innerWidth / 2 - 20, innerHeight / 2 - 48);

      ctx.font = "8px Bungee Inline";
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.fillStyle = "#fff";
      ctx.setTransform(1, -0.15, 0, 1, 0, 0);

      ctx.fillText("出品", innerWidth / 2 - 20, innerHeight / 2 + 65);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    }

    function glitch() {
      window.requestAnimationFrame(glitch);

      ctx.fillStyle = "#1a191c";
      ctx.fillRect(0, 0, innerWidth, innerHeight * 2);

      texts(colors[Math.floor(Math.random() * 7)]);
      ctx.shadowBlur = 0;
      ctx.shadowColor = "none";
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // for (let i = 0; i < 1000; i++) {
      //   ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
      //   ctx.fillRect(
      //     Math.floor(Math.random() * innerWidth),
      //     Math.floor(Math.random() * innerHeight),
      //     Math.floor(Math.random() * 15) + 1,
      //     Math.floor(Math.random() * 15) + 1
      //   );

      //   ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
      //   ctx.fillRect(
      //     Math.floor(Math.random() * innerWidth),
      //     Math.floor(Math.random() * innerHeight),
      //     Math.floor(Math.random() * 10) + 1,
      //     Math.floor(Math.random() * 10) + 1
      //   );
      // }

      ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
      ctx.fillRect(
        Math.random() * innerWidth,
        Math.random() * innerHeight,
        (Math.random() * innerWidth) / 10,
        (Math.random() * innerHeight) / 10
      );
      ctx.setTransform(1, 0, 0, 0.8, 0.2, 0);
    }

    glitch();
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}
