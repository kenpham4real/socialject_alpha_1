//Packages
import React, { useState} from "react";
import Select from "react-select";


//Styles
import "./styles/BeautifyProfileStyles.css";

// Helper
import {_previewImageHandler} from '../../../../src/helper/image/imageHandler'
import { ImagePreview } from "../../../components/app/ImagePreview";
import { LOCATIONS } from "../../../constants/location";
import { selectInputStyles } from "../../../constants/SelectInputStyle";

const BeautifyProfile = (props) => {

  //Intialize the states
  const [location, setLocation]= useState("");
  const [university, setUniversity]= useState("");
  const [image, setImage]= useState();
  const [imageFile,setImageFile]=useState("");


  const organizationName = props.location.organizationName;
  const category=props.location.category;
  const description=props.location.description;
  /**
   * @summary Handle Select
   * @param {string} location
   * @return {void}
   * @author TrNgTien
   */
  const handleChange =(location) =>{
    setLocation({selectedOption:location})
  }
  

  /**
	 * @summary Handle states input
	 * @param {string} university
	 * @return {void}
   * @author TrNgTien
	 */

	const _onChangeUniversity=(university)=>{
    setUniversity(university);
  }
  

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
            <Select
              className="select"
              name="select"
              placeholder="Location *"
              required="required"
              options={LOCATIONS}
              value={location.selectedOption}
              onChange={handleChange}
              styles={selectInputStyles}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'rgba(47,173,88,0.5)', 
                  primary: 'rgba(47,173,88,1)',
                },
              })}
            />
            <input
              className="input-text-beautifyProfile"
              name="School/universiy"
              type="text"
              placeholder="School/University"
              required=" required"
              value={university}
              onChange={(uni)=> _onChangeUniversity(uni.target.value)}
            /> 
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
            onClick={() =>{
              props.history.push({ 	
                  pathname:'/finishCreate',
                  organizationName,
                  category,
                  description,
                  university,
                  location,
                  image,
                  imageFile,
              })}
            }
          >
            <span> Next </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BeautifyProfile;
