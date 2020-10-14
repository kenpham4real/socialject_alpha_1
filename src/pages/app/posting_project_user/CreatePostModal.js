/*
*Contributor: 
    *Đạt 4th september 2020
    *Tiến 12th October 2020
*Function: Create Form for PPU to create Project

*/

//Packages
import React, { useState } from "react";
import Calendar from "react-calendar";
import { FcCalendar } from "react-icons/fc";

//Component
import {FormInput} from "../../../components/app/Form/FormInput";
import {LOCATIONS} from "../../../constants/location";
import Select from 'react-select';
import {selectInputStyles} from "../../../constants/SelectInputStyle";
import {ImagePreview} from "../../../components/app/ImagePreview";

//Styles
import 'react-calendar/dist/Calendar.css' ;
import "./styles/CreatePostModal.css";

const CreatePostModal = (props) => {


  const _getCreateModalData=JSON.parse(localStorage.getItem("CreateModal_1"));
  let projName=null;
  let projDes=null;
  let projCate=null;
  let projDate=null;

	if(_getCreateModalData!=null) 
	{
    projName=_getCreateModalData.projectName
    projDes=_getCreateModalData.projectDescription
    projCate=_getCreateModalData.projectCategory
    
  }
  //initialize the state
  const [projectName, setProjectName] = useState(projName);
  const [projectDescription, setProjectDescription] = useState(projDes);
  const [projectLocation, setProjectLocation] = useState("");
  const [projectCategory,setProjectCategory]=useState(projCate);
  const [projectDate, setProjectDate] = useState(new Date(projDate));
  const [showCalendar, setShowCalendar] = useState(false);
  const [projectImage, setProjectImage] = useState(null)
  const [projectImageFile, setProjectImageFile] = useState(false);

  const dataCreateModal={
    projectName,
    projectDescription,
    projectLocation,
    projectCategory,
    projectDate,
  }
  console.log("location",projectLocation.selectedOption)
  /**
   * @summary Handle Select
   * @param {string} location
   * @return {void}
   * @author TrNgTien
   */
  const handleChange =(projectLocation) =>{
    setProjectLocation({selectedOption:projectLocation})
  }
 

  /**
   * @summary Handle the state of activity date
   * @param {string} date
   * @returns {void}
   */
  const _onChangeProjectDate = (date) => {
    setProjectDate(date);
  }
  
  const _showCalendar = () => {
    setShowCalendar(prevState => !prevState)
  }
  
  const _onContinue =()=>
  {
   
      localStorage.setItem("CreateModal_1",JSON.stringify(dataCreateModal));
     
      props.history.push({
      pathname:"/createPostModal_2",
      projectName,
      projectDescription,
      projectLocation,
      projectCategory,
      projectDate,
      showCalendar,
      projectImage,
      projectImageFile
      })
    
  }

  return (
    <div className="add-activity-container">
      <div className="add-activity--form-container">
      <div className="add-activity-titles">
        <p className="add-activity--title">
          Add a project
        </p>
        <p className="add-activity--subtitle">
          Start adding a new project
        </p>
      </div>
        <div className="add-activity--content">
          <div className="add-activity--input activity-name">
            <FormInput
              formInputLabel="Project Name"
              formInputValue={projectName}
              _formInputOnchangeText={setProjectName}
            />
          </div>
          <div className="add-activity--input activity-description">
            <FormInput
              formInputLabel="Description"
              formInputPlaceholder="Describe your activity"
              formInputValue={projectDescription}
              _formInputOnchangeText={setProjectDescription}
            />
          </div>
          <div className="add-activity--input activity-location">
            <p>Location</p>
              <Select
                className="add-activity--input__select-button"
                name="select"
                placeholder="Choose"
                required="required"
                options={LOCATIONS}
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
          </div>
          <div className="add-activity--input activity-name">
            <FormInput
              formInputLabel="Category"
              formInputPlaceholder=""
              formInputValue={projectCategory}
              _formInputOnchangeText={setProjectCategory}
            />
          </div>
          <div className="add-activity--avatar-preview">
            <p>Avatar</p>
            <ImagePreview
              setImage={setProjectImage}
              setImageFile={setProjectImageFile}
              image={projectImage}
            />
          </div>
          <div className="add-activity--input activity-calendar">
              <i>
                <FcCalendar size={23} onClick={ ()=>{
                  _showCalendar();
                }} 
                className="add-activity--calendar--icon" />
              </i>
              <FormInput
                formInputLabel="Deadline"
                formInputPlaceholder={projectDate.toDateString()}
                formInputValue={projectDate.toDateString()}
                _formInputOnchangeText={projectDate}
              />
          </div>
          {showCalendar && 
            <Calendar
              view='month'
              value={projectDate}
              onClickDay={_onChangeProjectDate}
              activeStartDate={projectDate}
              onDrillUp={() => console.log('drilled')}
            />
          }
        </div>
          <div className="add-activity--add">
                <div 
                  className="add-activity--add__button" 
                  onClick={()=>{
                    _onContinue();
                  }}
                  >
                  Continue
                </div>
           </div>  
      </div>
    </div>  
  );
};

export default CreatePostModal;
