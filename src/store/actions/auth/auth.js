
// Firebase
import firebase from 'firebase';
import {firebase_auth, firebase_db} from '../../../firebase-config'

// Constants: Login medias
import {GOOGLE_LOGIN, FACEBOOK_LOGIN} from '../../../constants/auth'

// Actions
export const [
    LOG_IN,
    SIGN_UP,
    AUTHENTICATE
] = [
    "LOG_IN",
    "SIGN_UP",
    "AUTHENTICATE"
];



/**
 * @summary Authenticate users with Google
 */
 export const _onGoogleLogin = async () => {

    // Set a new authenticated provider from Google with firebase
    const provider = new firebase.auth.GoogleAuthProvider();

    // Adding scope (Information that we need from the accounts)
    provider.addScope('profile');
    provider.addScope('email');

    return new Promise((resolve, reject) => {
        // Signing in with the provider above
        firebase_auth
        .signInWithPopup(provider)
        .then(result => {
            console.log('result from log in', result);

            // Token is unique and always changed whenever users login in
            const token = result.credential.accessToken;

            // Properties of the user data
            // We'll need the uid - a unique and permanent id of the authenticated user
            const {
                displayName,
                email,
                photoURL,
                uid
            } = result.user

            console.log('token', token);
            console.log('user', result.user);

            resolve({
                token,
                displayName,
                email,
                photoURL,
                uid,
                authenticatedMethod: GOOGLE_LOGIN
            })
        })
        .catch(err => reject(err))
    })
}

/**
 * @summary Authenticate users with Facebook
 */
export const _onFacebookLogin = async () => {

    // Set a new authenticated provider from Google with firebase
    const provider = new firebase.auth.FacebookAuthProvider();

    // Adding scope (Additional information that we need from the accounts)
    provider.addScope('user_birthday');

    return new Promise((resolve, reject) => {
        // Signing in with the provider above
        firebase_auth
        .signInWithPopup(provider)
        .then(result => {
            // This gives you a Facebook Access Token.
            const token = result.credential.accessToken;

            // Properties of the user data
            // We'll need the uid - a unique and permanent id of the authenticated user
            const {
                displayName,
                email,
                photoURL,
                uid
            } = result.user

            console.log('token', token);
            console.log('user', result.user);

            resolve({
                token,
                displayName,
                email,
                photoURL,
                uid,
                authenticatedMethod: FACEBOOK_LOGIN
            })
        })
        .catch(err => reject(err)) 
        
    })
    
}

/**
 * @summary Dispatching and adding the authenticated data of the user to the store and to firestore, respectively
 * @param {function} dispatch The reference of the  dispatch function of Redux store
 * @param {function} getState The reference of the getState function used to get the current state of the Redux global store
 * @param {object} authenticatedUserData The object contains authenticated data of the users after they log in
 * @param {string} userType The type of the user
 */
const _addUser = async (dispatch, getState, authenticatedUserData, userType) => {

    const uid = authenticatedUserData.uid;

    // Push the authenticated data of the user to firestore
    try {
        await
        firebase_db
        .collection('student')
        .doc(`${uid}`)
        .set({
            userEmail: authenticatedUserData.email,
            userName: authenticatedUserData.displayName,
            userAvatar: authenticatedUserData.photoURL,
            userId: authenticatedUserData.uid,
            userType: userType,
            authenticatedMethod: authenticatedUserData.authenticatedMethod
        })
    } catch (error) {
        console.error(error)
    }

    // Dispatching the data to the global store
    dispatch({
        type: AUTHENTICATE,
        userData: {
            userEmail: authenticatedUserData.email,
            userName: authenticatedUserData.displayName,
            userToken: authenticatedUserData.token,
            userAvatar: authenticatedUserData.photoURL,
            userId: authenticatedUserData.uid,
            userType: userType,
            authenticatedMethod: authenticatedUserData.authenticatedMethod,
            isAuth: true,
        },
    })

    const userDataStored = {
        userType: userType,
        userId: authenticatedUserData.uid,
        authenticatedMethod: authenticatedUserData.authenticatedMethod,
        isAuth: true,
    }

    localStorage.setItem("userData", JSON.stringify(userDataStored))

}


/**
 * @summary Receive the authenticated data from the login functions and dispatch them to the store
 * @param {string} loginMediaType The type of the media users use to login (eg: Google, Facebook...)
 * @param {string} userType The type of the users: SPU/ PPU
 */
export const _onAuthentication = (loginMediaType, userType) => {
    return async (dispatch, getState) => {

        switch(loginMediaType){
            case GOOGLE_LOGIN:
                await _onGoogleLogin().then((authenticatedUserData) => _addUser(dispatch, getState, authenticatedUserData, userType))
                break;
            case FACEBOOK_LOGIN:
                await _onFacebookLogin().then((authenticatedUserData) => _addUser(dispatch, getState, authenticatedUserData, userType))
                break;
            default: break;
        }
   
    }
}