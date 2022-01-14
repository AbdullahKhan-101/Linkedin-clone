import React from "react";
import "./InputOption.css";

const InputOption = ({ color, Icon, title, titleColor }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color }} className="inputOption_Iconhe" />
      <h4 style={{ titleColor }}>{title}</h4>
    </div>
  );
};

export default InputOption;
