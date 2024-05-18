import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

// const Like = ({onClick}: Props) => {

const Like = ({ onClick }: Props) => {
  const [active, toggleActive] = useState(false);

  const handleClick = () => {
    toggleActive(!active);
    onClick();
  };

  return (
    <BsFillHeartFill
      onClick={handleClick}
      size={30}
      color={active ? "red" : "grey"}
      className={[styles.like].join(" ")}
    />
  );
};

export default Like;
