import React from "react";
import "../../styles/ChooseType/SloganPanel.css";

function SloganPanel(props) {
  return (
    <div className="slogan">
      <a href="www.facebook.com" style={{ color: "silver" }}>Explore</a>
      <a href="www.facebook.com" style={{ color: "white" }}>{">"}Language</a>
      <div className="slogan-title">Language</div>
    </div>
  );
}

export default SloganPanel;
