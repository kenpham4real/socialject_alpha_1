/**
 * @summary This file renders the Login Page component
 * Main component: LoginPage
 * @author Ken Pham
 */

import React from 'react';

// Firebase
import firebase from 'firebase';
import {firebase_auth} from '../../firebase-config';

// Styles
import './styles/LoginPage.css'
import FeedbackImage from '../../components/FeedbackImage';

/**
 * @summary Rendering the page users use to login
 * @param {} props 
 * @returns JSX Elements
 */
const LoginPage = props => {

    console.log('props', props);

    /**
     * @summary Authenticate users with Google
     */
    const _onGoogleLogin = () => {
        
        // Set a new authenticated provider from Google with firebase
        const provider = new firebase.auth.GoogleAuthProvider();

        // Adding scope (Information that we need from the accounts)
        provider.addScope('profile');
        provider.addScope('email');

        // Signing in with the provider above
        firebase_auth.signInWithPopup(provider)
        .then(result => {
            console.log('result from log in', result);

            // Token is unique and always changed whenever users login in
            const token = result.credential.accessToken;

            // Properties of the user object. 
            // We'll need the uid - a unique and permanent id of the authenticated user
            const user = result.user;

            console.log('token', token);
            console.log('user', user);
        })
    }

    /**
     * @summary Authenticate users with Facebook
     */
    const _onFacebookLogin = () => {

        // Set a new authenticated provider from Google with firebase
        const provider = new firebase.auth.FacebookAuthProvider();

        // Adding scope (Additional information that we need from the accounts)
        provider.addScope('user_birthday');

        // Signing in with the provider above
        firebase_auth.signInWithPopup(provider)
        .then(result => {
            // This gives you a Facebook Access Token.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            console.log('token', token);
            console.log('user', user);
        });
    }

    return(
        <div className="login-container">
            <div className="create-profile-container">
                <div className="create-profile__title">Create profile</div>
                <div className="create-profile__buttons-wrapper">
                    <div className="create-profile__buttons">
                        <button 
                            className="create-profile__buttons--google"
                            onClick={_onGoogleLogin}
                        >
                            Login with Google
                        </button>
                    </div>
                    <div className="create-profile__buttons">
                        <button 
                            className="create-profile__buttons--facebook"
                            onClick={_onFacebookLogin}
                        >
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
            <div className="feedback-container">
                <FeedbackImage/>
            </div>
        </div>
    )
}

export default LoginPage;