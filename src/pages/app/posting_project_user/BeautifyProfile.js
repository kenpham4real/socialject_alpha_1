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
<<<<<<< HEAD
  const [University, setUniversity]= useState("");
  const [image, setImage]= useState(require("../../../assets/images/blank-profile.png"));
=======
  const [university, setUniversity]= useState("");
  const [image, setImage]= useState(null);
>>>>>>> 8764661b751c5d07a856753d26a10023609a33a7
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
	 * @param {string} university
	 * @return {void}
   * @author TrNgTien
	 */

	const _onChangeUniversity=(university)=>{
    setUniversity(university);
  }
<<<<<<< HEAD


   /**
   * @summary Handle change the image
   * @param {file} avatar
   * @return {void}
   * @author TrNgTien
   */

   const imageHandler =(e) =>{
     const reader =new FileReader();
     console.log('e', e)
     reader.onload= (event) =>{
       console.log('event', event)
       if(reader.readyState===2){
         setImage(event.target.result)
       }
     }
     reader.readAsDataURL(e[0])
     setImageFile(e[0]);
   }
=======
     
>>>>>>> e6b208961f173e554b9b31d507faa4ea86f5b9c4

   
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
            value={university}
            onChange={(uni)=> _onChangeUniversity(uni.target.value)}
          />
<<<<<<< HEAD
          <div className="avatar-box">
            <p className="avatar-text"> Avatar * </p>
            <img
              className="image-holder"
              alt=""
              src={image}
            />
            <input
              className="import-file"
              alt="hi"
              type="file" 
              name="image" 
              capture='camera'
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(img) => imageHandler(img.target.files)}
         
            />
            <div >
                <IoMdImage className="add-advatar" />
            </div>
          </div>
=======
          <ImagePreview
            setImage={setImage}
            setImageFile={setImageFile}
            image={image}
          />
>>>>>>> e6b208961f173e554b9b31d507faa4ea86f5b9c4
        </div>
      
        <div>
          <button
            className="container-continue"
            onClick={() => props.history.push({ 	
                  pathname:'/finishCreate',
                  organizationName,
                  description,
                  university,
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
