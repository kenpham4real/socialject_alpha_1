import { IoMdImage } from "react-icons/io";
import { firebase_storage } from "../../../firebase-config";


//Packages
import React, { useState} from "react";
import Select from "react-select";

//Styles
import "./styles/BeautifyProfileStyles.css";
import { storage } from "firebase";

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
  const [university, setUniversity]= useState("");
  const [image, setImage]= useState(null);
  const [imageName,setImageName]=useState("");
 

  const orginaztionName = props.location.orginaztionName;
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

	const _onChangeUniversity=(university)=>{
    setUniversity(university);
  }

   
  /**
   * @summary Handle change the image
   * @param {file} avatar
   * @return {void}
   * @author TrNgTien
   */
  
  //  const handleImageChange =(e) =>{
  //    console.log("hey",e.target.file[0])
  //  }

   /**
   * @summary Handle change the image
   * @param {file} avatar
   * @return {void}
   * @author TrNgTien
   */
  //  const handleImageChange =(e)=>{
  //     if(e.target.files[0]){
  //       setImage(e.target.files[0]);
  //     }
  //  };

   const imageHandler =(e) =>{
     const reader =new FileReader();
     console.log("e",e.files)
     reader.onload= (event) =>{
       console.log('event',event)
       if(reader.readyState===2){
         setImage(event.target.result)
       }
     }
     reader.readAsDataURL(e.files[0])
     setImageName(e.files[0]);
     console.log("image name",imageName)
   }
       /**
   * @summary Handle upload the image
   * @param {file} avatar
   * @return {void}
   * @author TrNgTien
   */
  const handleUpLoad =()=>{
    const uploadTask = firebase_storage.ref(`images/${imageName.name}`).put(imageName);
    uploadTask.on(
        "state_changed",
        error =>{
          console.log(error);
        },
        ()=>{
          storage
            .ref("images")
            .child(imageName.name)
            .getDownloadURL()
            .then(url=>{
              console.log(url)
            });
        }
      );
    
 };
 
 console.log("imageName: ",imageName)
   
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
            onChange={(university)=> _onChangeUniversity(university.target.value)}
          />
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
              onChange={(img) => imageHandler(img.target)}
            />
            <div className="add-advatar">
                <IoMdImage />
            </div>
          </div>
        </div>
      
        <div>
          <button
            className="container-continue"
            // onClick={() => props.history.push({ 	
            //       pathname:'/finishCreate',
            //       orginaztionName,
            //       description,
            //       university,
            //       location,
            //       image,
            //   })
            // }
            onClick={handleUpLoad}
          >
            <span> Next </span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default BeautifyProfile;
