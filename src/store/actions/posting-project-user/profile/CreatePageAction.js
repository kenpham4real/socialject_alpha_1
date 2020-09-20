/**
 * (*)Contributor: 
 * 
 * (+)TrNgTien
 * (+)Ken
 * 
 * (*)Day:
 *  
 * (+)Tien forgot the day I started
 * (+)Ken started with Tien to hanlde upload image - 17/9/2020
 * 
 * (*)Main function:
 *  
 * (-) ACtion: 
 * (+) Upload image to storage, put the url of the image into cloud firestore.
 * (+) Upload text to clould firestrore
 */

// Firebase database
import {firebase_db} from '../../../../firebase-config';
import { firebase_storage } from "../../../../firebase-config";
import { storage } from "firebase";

// Constants
import { testing_organization_id} from '../../../../constants/testing-keys';


// Export all the action types
export const CREATE_PROFILE = "CREATE_PROFILE";

/******************************** ACTIONS ********************************/

  
    /**
     * @summary Handle upload the image to storage of Firebase
     * @param {Object} imageFile An object containning such as {name:...,type:img/png,...vv}
     * @return {void}
     * @author TrNgTien
     */
    const handleUpLoad = async (imageFile)=>{
    
        const uploadTask = firebase_storage.ref(`images/${imageFile.name}`)

        return new Promise(async (res, rej) => {
            uploadTask.put(imageFile).on(
                "state_changed",
                snapshot =>{},
                error =>{
                    console.log("big erroor",error);
                    rej(error)
                },
                ()=>{ 
                    firebase_storage
                    .ref("images")
                    .child(imageFile.name)
                    .getDownloadURL()
                    .then(url=>{
                        console.log(url)
                        res(url)
                        });
                }
            );
        })
        
            
    }
 


 



    export const _createProfile_ppu = (orgId, orgName, description, location, University,email,phoneNumber,facebook,imageFile) => {
        /**
         * @summary Asynchronous function calling the database to push the data
         * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
         * @param {function} getState => Function used to access the current state of the application
         * @returns {void}
         * @author TrNgTien
         */
        return async (dispatch, getState) => {
            const imageUrl = await handleUpLoad(imageFile);
            try {
                await
                firebase_db
                .collection('organization')
                .doc(`${testing_organization_id}`)
                .set({
                    orgId:orgId,
                    orgName:orgName,
                    description:description,
                    location:location,
                    university:University,
                    email:email,
                    phoneNumber:phoneNumber,
                    facebook:facebook,
                    imageFile:imageUrl,
                }, {merge: true})
                console.log('Create profile successfully');

                
                dispatch({
                    type: CREATE_PROFILE,
                    finishCreate: {
                        orgId:orgId,
                        orgName:orgName,
                        description:description,
                        location:location,
                        university:University,
                        email:email,
                        phoneNumber:phoneNumber,
                        facebook:facebook,
                        imageFile:imageFile,
                    }
                })
                
            } catch (error) {
                console.log('Error::', error);
            }
        }
}