import React, { Component } from "react";
import "../styles/CopyrightBar.css";

function CopyrightBar(props) {
  return (
    <div>
      {/*Copyright*/}
      <a class="copyright-text"> Copyrighted by ...</a>
      {/*Top right corner*/}
      <a class="copyright-text right">SocialJect </a>
    </div>
  );
}

export default CopyrightBar;
