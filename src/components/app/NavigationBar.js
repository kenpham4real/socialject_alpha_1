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

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/NavigationBar.css";
import IconButton from "./IconButton";
import SJ from "../../assets/images/SJ.png";
import arrow from "../../assets/images/arrow.png";

import * as autoLoginAction from "../../store//actions/auth/autoLoginAction";

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
  //Get data from global store
  const userData = useSelector((state) => state.autoLoginReducer.userData);
  console.log("User Data selected: ", userData);
  //Call the auto login function.
  //Get Id
  const userId = JSON.parse(localStorage.getItem("userData")).userId;
  const dispatch = useDispatch();
  console.log("User id in app is: ", userId);
  //Call the function
  const fetchUser = useCallback(() => {
    autoLoginAction.FetchUser(dispatch, userId, userData);
  });
  useEffect(() => fetchUser(), []);
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
        <img alt="" className="icon avatar" src={userData.userAvatar} />
        <a className="banner-title">{userData.userName}</a>
        <img alt="" className="icon" src={arrow} />
      </div>
    </div>
  );
}

export default NavigationBar;
