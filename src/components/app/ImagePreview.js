/*
 * Contributor:
 *Ken Pham ..... handle upload preview Image
 *TrNgTien 3rd October edited UI
 *Main function: Import preview image
 */

import React from "react";
import { FcCompactCamera } from "react-icons/fc";

// Styles
import "../styles/ImagePreview.css";

// Helper
import { _previewImageHandler } from "../../helper/image/imageHandler";

export const ImagePreview = (props) => {
  return (
    <div className="avatar-box">
      <img className="image-holder" alt="" src={props.image} />
      <label className="label">
        <input
          className="import-file"
          alt=""
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(img) =>
            _previewImageHandler(
              img.target.files,
              props.setImage,
              props.setImageFile
            )
          }
        />
        <FcCompactCamera className="icon-img" />
        <span className="choose-picture">Choose your picture</span>
      </label>
    </div>
  );
};
