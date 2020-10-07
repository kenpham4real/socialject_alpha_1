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
function NavigationBar_Ken(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.autoLoginReducer.userData);
  const user_localStorage = JSON.parse(localStorage.getItem("userData"));
  const user_localStorage_userType = localStorage.getItem("userType");

  let userId = null;
  if (user_localStorage != null) userId = user_localStorage.userId;

  const fetchUser = useCallback(() => {
    autoLoginAction.FetchUser(
      dispatch,
      userId,
      user,
      user_localStorage_userType
    );
  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, [dispatch, fetchUser]);

  console.log("User Data selected: ", user);

  const CreateProfile = (props) => {
    let ifDisplay = "inline";
    if (user.userType != ADMIN) ifDisplay = "none";
    return (
      <div style={{ display: ifDisplay }}>
        <Link
          className="create"
          to={{
            pathname: user.userType === ADMIN ? "/registration" : "",
            profileId: user.userType === ADMIN ? user.orgId : user.userId,
          }}
        >
          <p className="p-create">Create your profile</p>
        </Link>
      </div>
    );
  };

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
        <CreateProfile></CreateProfile>
        <Link
          className="link"
          to={{
            pathname: user.userType === ADMIN ? "/profile" : "",
            profileId: user.userType === ADMIN ? user.orgId : user.userId,
          }}
        >
          <img alt="" className="icon avatar" src={user.orgAvatar} />
          <p className="banner-title">{user.orgName}</p>
        </Link>
        {/* <img alt="" className="icon" src={arrow} /> */}
      </div>
    </div>
  );
}

export default NavigationBar_Ken;
