import React from "react";
import "../styles/CopyrightBar.css";

function CopyrightBar(props) {
  return (
    <div class="copyright-container">
      {/*Copyright*/}
      <a href="www.facebook.com" class="copyright-text"> Copyrighted by ...</a>
      {/*Top right corner*/}
      <a href="www.facebook.com" class="copyright-text right">SocialJect </a>
    </div>
  );
}

export default CopyrightBar;
