/**
 * @summary This file renders the Login Page component
 * Main component: LoginPage
 * @author Ken Pham
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Firebase
import firebase from "firebase";
import { firebase_auth } from "../../firebase-config";

// Styles
import "./styles/LoginPage.css";
import FeedbackImage from "../../components/FeedbackImage";

// Actions
import * as authActions from "../../store/actions/auth/auth";
import { FACEBOOK_LOGIN, GOOGLE_LOGIN } from "../../constants/auth";

/**
 * @summary Rendering the page users use to login
 * @param {} props
 * @returns JSX Elements
 */
const LoginPage = (props) => {
  const userType =
    props.location.state && props.location.state.userType
      ? props.location.state.userType
      : "NO TYPE";

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authReducer.userData);

  React.useEffect(() => {
    if (userData.isAuth && userData.isAuth === true) {
      const projectId = sessionStorage.getItem("projectId");
      if (projectId != null) {
        //user have just logged in once, now redirect them to the projectInfo page
        props.history.push({ pathname: "/projectInfo", projectId: projectId });
        sessionStorage.removeItem("projectId");
      } else {
        // the user logged in 2 or more times already, so the flow is normal
        props.history.push("/");
        window.location.reload(false);
      }
    }
  }, [userData]);

  return (
    <div className="login-container">
      <div className="create-profile-container">
        <div className="create-profile__title">Create profile</div>
        <div className="create-profile__buttons-wrapper">
          <div className="create-profile__buttons">
            <button
              className="create-profile__buttons--google"
              onClick={() => {
                dispatch(authActions._onAuthentication(GOOGLE_LOGIN, userType));
              }}
            >
              Login with Google
            </button>
          </div>
          <div className="create-profile__buttons">
            {/* <button
              className="create-profile__buttons--facebook"
              onClick={() => {
                dispatch(
                  authActions._onAuthentication(FACEBOOK_LOGIN, userType)
                );
              }}
            >
              Login with Facebook
            </button> */}
          </div>
        </div>
      </div>
      <div className="feedback-container">
        <FeedbackImage />
      </div>
    </div>
  );
};

export default LoginPage;
