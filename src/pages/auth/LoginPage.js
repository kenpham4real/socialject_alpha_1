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

const LoginPage = props => {

    console.log('props', props);

    const _onGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('profile');
        provider.addScope('email');

        firebase_auth.signInWithPopup(provider)
        .then(result => {
            console.log('result from log in', result);

            const token = result.credential.accessToken;
            const user = result.user;

            console.log('token', token);
            console.log('user', user);
        })
    }

    const _onFacebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
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