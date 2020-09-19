//Packages
import React, { useState} from "react";
import Select from "react-select";
import { IoMdImage } from "react-icons/io";


//Styles
import "./styles/BeautifyProfileStyles.css";

// Helper
import {_previewImageHandler} from '../../../../src/helper/image/imageHandler'
import { ImagePreview } from "../../../components/app/ImagePreview";

//Select
const options = [
  { id: "ha_noi", value: "ha noi", label: "Ha Noi" },
  { id: "ho_chi_minh", value: "ho chi minh", label: "Ho Chi Minh" },
  { id: "hai_phong", value: "hai phong", label: "Hai Phong" },
  { id: "da_nang", value: "da nang", label: "Da Nang" },
];

   


const BeautifyProfile = (props) => {

  //Intialize the states
  const [location, setLocation]= useState("");
  const [University, setUniversity]= useState("");
  const [image, setImage]= useState(null);
  const [imageFile,setImageFile]=useState("");
 

  const organizationName = props.location.organizationName;
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
	 * @param {string} University
	 * @return {void}
   * @author TrNgTien
	 */

	const _onChangeUniversity=(University)=>{
    setUniversity(University);
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
          <Select
            className="select"
            placeholder="Location *"
            options={options}
            value={location.selectedOption}
            onChange={handleChange}
          />
          <input
            className="input-text-beautifyProfile"
            type="text"
            placeholder="School/University"
            value={University}
            onChange={(University)=> _onChangeUniversity(University.target.value)}
          />
          <ImagePreview
            setImage={setImage}
            setImageFile={setImageFile}
            image={image}
          />
        </div>
      
        <div>
          <button
            className="container-continue"
            onClick={() => props.history.push({ 	
                  pathname:'/finishCreate',
                  organizationName,
                  description,
                  University,
                  location,
                  image,
                  imageFile,
              })
            }
          >
            <span> Next </span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default BeautifyProfile;
