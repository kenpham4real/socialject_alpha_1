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
import arrow from "../../assets/images/arrow.png";

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
      <a href="www.facebook.com" class="banner-title"> SOCIALJECT </a>
      {/*Search Bar*/}
      {/*<SearchBar></SearchBar>*/}
      {/*Top right corner*/}
      <a class="user-bar">
        <img class="icon avatar" src={SJ} />
        <a class="banner-title">Username</a>
        <img class="icon" src={arrow} />
      </a>
    </div>
  );
}

export default NavigationBar;
