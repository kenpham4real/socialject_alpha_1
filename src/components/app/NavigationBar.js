/*
*Contributor: Long 19th August 2020
*Component:
    In use:
    *SocialJect menu: navigate to the homepage. (will be coded)
    *Username menu: a drop list, current not coded yet
    Not in use:
    *Search bar: search engine for the website, not coded yet
    *IconButton: 32x32 container for image, used for the searchbar
  *Data needed: (currently none)
*/

import React, { Component } from "react";
import "../styles/NavigationBar.css";
import IconButton from "./IconButton";
import SJ from "../../assets/images/SJ.png";

//Search Bar
function SearchBar(props) {
  return (
    <a class="search-container">
      <input
        class="search-input"
        type="text"
        placeholder="Search something..."
      ></input>
      <IconButton source="https://img.icons8.com/pastel-glyph/2x/search--v2.png"></IconButton>
    </a>
  );
}

//Main
function NavigationBar(props) {
  return (
    <div class="navigationBar">
      {/*Menu Icon*/}
      <img class="icon avatar" src={SJ} />
      {/*Title*/}
      <a class="banner-title">SOCIALJECT</a>
      {/*Top right corner*/}
      <a class="user-bar">
        <img class="icon avatar" src={SJ} />
        <a class="banner-title"> Username</a>
        <img
          class="icon"
          src="https://cdn.iconscout.com/icon/free/png-512/down-arrow-16-460295.png"
        />
      </a>
    </div>
  );
}

export default NavigationBar;
