import {firebase_storage} from '../../firebase-config'

/**
 * @summary This file contains all the helper functions used to handle any functionalities relating to images
 * @author Ken Pham
 * @function {
 *  _imageUploadHandler,
 *  _previewImageHandler
 * }
 */


/**
 * @summary Upload the image to storage of Firebase and then return the downloadable URL of the image
 * @param {object} imageFile An object containing the image's properties such as {name:...,type:img/png,...vv}
 * @return {string} The image's downloadable url
 * @author TrNgTien, Ken Pham
 */
export const _imageUploadHandler = async (imageFile)=>{

    const projectImageRef = firebase_storage.ref(`images/${imageFile.name}`)

    return new Promise(async (res, rej) => {
        projectImageRef.put(imageFile).on(
            "state_changed",
            snapshot =>{},
            error =>{
                // // console.log("big erroor",error);
                rej(error)
            },
            ()=>{ 
                firebase_storage
                .ref("images")
                .child(imageFile.name)
                .getDownloadURL()
                .then(url=>{
                    // // console.log(url)
                    res(url)
                });
            }
        );
    })    
}

/**
 * @summary Read the image file and show it's preview
 * @param {object} file The files property which locates in the target of the event passed from onChange
 * @param {function} setImage The callback function to set the state of the data of the image in order to preview (read) it
 * @param {function} setImageFile The callback function to set the state of the image file to it's properties
 * @author TrNgTien, Ken Pham
 */

export const _previewImageHandler =(file, setImage, setImageFile) =>{
    const reader =new FileReader();
    reader.onload= (event) =>{
        if(reader.readyState===2){
            setImage(event.target.result)
        }
    }
    reader.readAsDataURL(file[0])
    setImageFile(file[0]);
}