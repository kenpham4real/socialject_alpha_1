//Packages
import React, { useState } from "react";
import Select from "react-select";

//Styles
import "./styles/BeautifyProfileStyles.css";

// Helper
//import {_previewImageHandler} from '../../../../src/helper/image/imageHandler'
import { ImagePreview } from "../../../components/app/ImagePreview";
import { LOCATIONS } from "../../../constants/location";
import { selectInputStyles } from "../../../constants/SelectInputStyle";

const BeautifyProfile = (props) => {
  //Get the data from LocalStorage
  const _getBeautifyData = JSON.parse(localStorage.getItem("Beautify"));

  /*
   *Make 1 state of this is null to make the browser run without error
   *pass the state of localStorage to initialize state then we can keep the states when press back button's browser
   */
  let uni = null;
  if (_getBeautifyData != null) {
    uni = _getBeautifyData.university;
  }

  //Intialize the states
  const [location, setLocation] = useState("");
  const [university, setUniversity] = useState(uni);
  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState("");

  const organizationName = props.location.organizationName;
  const category = props.location.category;
  const description = props.location.description;

  const dataBeautify = {
    organizationName,
    category,
    description,
    university,
    location,
  };

  /**
   * @summary Handle Select
   * @param {string} location
   * @return {void}
   * @author TrNgTien
   */
  const handleChange = (location) => {
    setLocation({ selectedOption: location });
  };

  /**
   * @summary Handle states input
   * @param {string} university
   * @return {void}
   * @author TrNgTien
   */

  const _onChangeUniversity = (university) => {
    setUniversity(university);
  };

  return (
    <div className="page">
      <div className="container-BeautifyProfile">
        <div>
          <h1 className="my-header-BeautifyProfile"> Beautify Your Page </h1>
          <p className="description-BeautifyFrofile">
            Polish your page with additional information
          </p>
        </div>
        <div className="view-text-input-beautifyProfile">
          <form>
            <p className="avatar-text">Organization's location?</p>
            <Select
              className="select"
              name="select"
              placeholder="Location *"
              options={LOCATIONS}
              value={location.selectedOption}
              onChange={handleChange}
              styles={selectInputStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "rgba(47,173,88,0.5)",
                  primary: "rgba(47,173,88,1)",
                },
              })}
            />
            <p className="avatar-text">School/University</p>
            <input
              className="input-text-beautifyProfile"
              name="School/universiy"
              type="text"
              placeholder="School/University"
              value={university}
              onChange={(university) =>
                _onChangeUniversity(university.target.value)
              }
            />
            <p className="avatar-text"> Avatar </p>
            <ImagePreview
              setImage={setImage}
              setImageFile={setImageFile}
              image={image}
            />
          </form>
        </div>

        <div>
          <div
            className="container-continue"
            onClick={() => {
              //save the states input to LocalStorage when onClick
              localStorage.setItem("Beautify", JSON.stringify(dataBeautify));
              props.history.push({
                pathname: "/finishCreate",
                organizationName,
                category,
                description,
                university,
                location,
                image,
                imageFile,
              });
            }}
          >
            <span> Next </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifyProfile;
