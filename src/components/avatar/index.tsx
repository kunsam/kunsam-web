import React, { memo, useState, useEffect } from "react";
import styles from "./index.module.scss";

interface Props {
  uri?: string;
  name?: string;
  size?: number;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
}

// ASCII
export enum UserAvatarBackgroundColor {
  color1 = "#66A3FF",
  color2 = "#B599FF",
  color3 = "#FACF5A",
  color4 = "#7AD3FF",
}

const Avatar: React.FC<Props> = memo(function UserAvatar({
  uri,
  name,
  size,
  style,
  onClick,
  textStyle,
}) {
  const sizeStyle = size ? { width: size, height: size } : {};
  if (uri) {
    return (
      <img
        className={styles.avatarImage}
        src={uri}
        style={{ ...style, ...sizeStyle }}
      />
    );
  }

  const [displayName, setdisplayName] = useState("");
  const [firstAbbrAciiNumber, setfirstAbbrAciiNumber] = useState<number>(0);

  useEffect(() => {
    // 动态引入
    if (name) {
      const dname = name; //getValidDisplayName(name);
      setdisplayName(dname);
      setfirstAbbrAciiNumber(dname.charCodeAt(0));
    } else {
      setdisplayName("");
    }
  }, [name]);

  const colors = [
    UserAvatarBackgroundColor.color1,
    UserAvatarBackgroundColor.color2,
    UserAvatarBackgroundColor.color3,
    UserAvatarBackgroundColor.color4,
  ];

  return (
    <div
      onClick={onClick}
      className={styles.nameAvatar}
      style={{
        ...style,
        ...sizeStyle,
        backgroundColor: colors[firstAbbrAciiNumber % 4],
      }}
    >
      <span className={styles.nameAvatarText} style={textStyle}>
        {displayName}
      </span>
    </div>
  );
});

export default Avatar;
