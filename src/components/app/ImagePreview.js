import React from 'react';
import { IoMdImages } from "react-icons/io";

// Styles
import '../styles/ImagePreview.css'

// Helper
import {_previewImageHandler} from '../../helper/image/imageHandler'

export const ImagePreview = props => {
    return(
        <div className="avatar-box">
            <p className="avatar-text"> Avatar * </p>
            <img
              className="image-holder"
              alt=""
              src={props.image}
            />
            <input
              className="import-file"
              alt="hi"
              type="file" 
              name="image" 
              capture='camera'
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(img) => _previewImageHandler(img.target.files, props.setImage, props.setImageFile)}
            />
        </div>
    )
}