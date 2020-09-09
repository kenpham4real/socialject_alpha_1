import React from "react";
import "../styles/IconButton.css";

function IconButton(props) {
  return <img alt="" className="icon" src={props.source} />;
}

export default IconButton;
