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
import "../../pages/app/styles/GlobalStyles.css";
import IconButton from "./IconButton";
import SJ from "../../assets/images/SJ.png";
import arrow from "../../assets/images/arrow.png";

import * as autoLoginAction from "../../store//actions/auth/autoLoginAction";

//constant
import { ADMIN } from "../../constants/user-types";

/*
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
*/

//Main
function NavigationBar(props) {
  //Declare hooks
  const dispatch = useDispatch();
  //Get data from global store
  const user = useSelector((state) => state.autoLoginReducer.userData);
  console.log("User Data selected: ", user);
  //Decide the path to push base on the userData
  let path = "";
  if (user.userType == ADMIN) path = "/profile";
  //Get Id from local storage
  //Get the user data from local storage, if there is no data, 'user_localStorage' will be 'null'
  const user_localStorage = JSON.parse(localStorage.getItem("userData"));
  let userId = null;
  if (user_localStorage != null) userId = user_localStorage.userId; //if there is an user data, get userId from that.
  console.log("User id in app is: ", userId); //For testing
  //Call the function of auto-login using useCallback and useEffect
  const fetchUser = useCallback(() => {
    autoLoginAction.FetchUser(dispatch, userId, user);
  });
  useEffect(() => fetchUser(), []);
  return (
    <div className="navigationBar">
      {/*Menu Icon*/}

      {/*Title*/}

      <Link className="SocialJect" to="/">
        {/*<img alt="" className="icon avatar" src={SJ} />*/}
        <p className="banner-title" style={{ fontSize: "30px" }}>
          SOCIALJECT
        </p>
      </Link>
      {/*Search Bar*/}
      {/*<SearchBar></SearchBar>*/}
      {/*Top right corner*/}
      <div className="user-bar">
        <Link
          className="link"
          to={{
            pathname: path,
            profileId: userId,
          }}
        >
          <img alt="" className="icon avatar" src={user.userAvatar} />
          <p className="banner-title">{user.userName}</p>
        </Link>
        {/*<img alt="" className="icon" src={arrow} />*/}
      </div>
    </div>
  );
}

export default NavigationBar;
