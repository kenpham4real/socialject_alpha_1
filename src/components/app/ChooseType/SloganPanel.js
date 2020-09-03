import React from "react";
import "../../styles/ChooseType/SloganPanel.css";

function SloganPanel(props) {
  return (
    <div class="slogan">
      <a style={{ color: "silver" }}>Explore</a>
      <a style={{ color: "white" }}>{">"}Language</a>
      <div class="slogan-title">Language</div>
    </div>
  );
}

export default SloganPanel;
