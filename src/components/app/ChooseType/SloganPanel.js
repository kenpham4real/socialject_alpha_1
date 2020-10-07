import React from "react";
import "../../styles/ChooseType/SloganPanel.css";

function SloganPanel(props) {
  //const background = props.background;
  return (
    <div className="slogan">
      <div className="slogan-title">Your connection to social contribution</div>
      <p className="slogan-text">
        Grow yourself, find great networks and contribute to society by joining
        global projects
      </p>
    </div>
  );
}

export default SloganPanel;
