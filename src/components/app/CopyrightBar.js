import React from "react";
import "../styles/CopyrightBar.css";

function CopyrightBar(props) {
  return (
    <div>
      <div className="line"></div>

      <div className="copyright-container">
        {/*Copyright*/}
        <p className="copyright-text">Copyrighted by ...</p>
        {/*Right corner*/}
        <div>
          <div className="copyright-text right"> SocialJect </div>
          <img
            className="copyright-icon"
            src={require("../../assets/images/SJ.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default CopyrightBar;
