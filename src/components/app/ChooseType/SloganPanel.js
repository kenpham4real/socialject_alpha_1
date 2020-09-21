import React from "react";
import "../../styles/ChooseType/SloganPanel.css";

function SloganPanel(props) {
  const background = props.background;
  return (
    <div className="slogan">
      <p href="www.facebook.com" style={{ color: "silver", display: "inline" }}>
        Explore
      </p>
      <p href="www.facebook.com" style={{ color: "white", display: "inline" }}>
        {">"}Language
      </p>
      <div className="slogan-title">Language</div>
    </div>
  );
}

export default SloganPanel;
