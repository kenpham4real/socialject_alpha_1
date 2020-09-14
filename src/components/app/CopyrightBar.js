import React from "react";
import "../styles/CopyrightBar.css";

function CopyrightBar(props) {
  return (
    <div className="copyright-container">
      {/*Copyright*/}
      <p className="copyright-text">Copyrighted by ...</p>
      {/*Top right corner*/}
      <p className="copyright-text right">SocialJect </p>
    </div>
  );
}

export default CopyrightBar;
