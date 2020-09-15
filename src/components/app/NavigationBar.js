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
import { Link } from "react-router-dom";
import "../styles/NavigationBar.css";
import IconButton from "./IconButton";
import SJ from "../../assets/images/SJ.png";
import arrow from "../../assets/images/arrow.png";

function SearchBar(props) {
  return (
    <a className="search-container">
      <input
        className="search-input"
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
    <div className="navigationBar">
      {/*Menu Icon*/}

      {/*Title*/}
      <Link className="link" to="/">
        <img alt="" className="icon avatar" src={SJ} />
        <p className="banner-title">SOCIALJECT</p>
      </Link>
      {/*Search Bar*/}
      {/*<SearchBar></SearchBar>*/}
      {/*Top right corner*/}
      <div className="user-bar">
        <img alt="" className="icon avatar" src={SJ} />
        <a className="banner-title">Username</a>
        <img alt="" className="icon" src={arrow} />
      </div>
    </div>
  );
}

export default NavigationBar;
