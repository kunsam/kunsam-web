import React from "react";
import LeftArrow from "./svgs/LeftArrow.svg";
import Wechat from "./svgs/wechat.svg";
import Share from "./svgs/share.svg";
// import styles from "./index.module.scss";

type IAppSvgIds = "LeftArrow" | "Wechat" | "Share";

interface Props {
  id: IAppSvgIds;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  className?: string;
}

function Component({ id, style, onClick, className }: Props) {
  const withClickableProps = {
    onClick,
    className,
    style: { cursor: onClick ? "pointer" : "", ...style },
  };

  switch (id) {
    default: {
      return null;
    }
    case "LeftArrow": {
      return <LeftArrow {...withClickableProps} />;
    }
    case "Wechat": {
      return <Wechat {...withClickableProps} />;
    }
    case "Share": {
      return <Share {...withClickableProps} />;
    }
  }
}
const AppSvgs: React.FC<Props> = React.memo(Component);
export default AppSvgs;
