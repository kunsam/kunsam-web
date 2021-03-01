import React, { PropsWithChildren } from "react";
import CSS from "csstype";

interface Props {
  align?: CSS.Property.AlignContent;
  justify?: CSS.Property.JustifyContent;
  style?: React.CSSProperties;
}

export default function IRow({
  children,
  justify,
  align,
  style = {},
}: PropsWithChildren<Props>) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
