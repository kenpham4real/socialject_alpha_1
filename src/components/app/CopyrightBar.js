import React from "react";
import "../styles/CopyrightBar.css";

function CopyrightBar(props) {
  return (
    <div>
      <div className="line"></div>

      <div className="copyright-container">
        <p className="copyright-text">Copyrighted by ...</p>
        <div>
          <div className="copyright-text right"> SocialJect </div>
          <img
            alt=""
            className="copyright-icon"
            src={require("../../assets/images/SJ.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default CopyrightBar;
