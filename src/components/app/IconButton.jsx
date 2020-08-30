import React, { Component } from "react";
import "../styles/IconButton.css";

function IconButton(props) {
  return <img class="icon" src={props.source} />;
}

export default IconButton;
