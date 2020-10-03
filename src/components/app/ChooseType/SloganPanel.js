import React from "react";
import "../../styles/ChooseType/SloganPanel.css";

function SloganPanel(props) {
  const background = props.background;
  return (
    <div className="slogan">
      <div className="slogan-title">Some Slogan</div>
      <p href="www.facebook.com" className="slogan-text">
        Another small motivational slogan
      </p>
    </div>
  );
}

export default SloganPanel;
