/*
*Contributor: 
  Đạt 4th september 2020
  Tiến 2nd October 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

// Packages
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid_v4} from 'uuid';
import Calendar from "react-calendar";
import { FcCalendar } from "react-icons/fc";
import Select from 'react-select'

// Styles
import "./styles/AddActivity.css";
import 'react-calendar/dist/Calendar.css';

// Actions
import * as _activityActions from '../../../store/actions/posting-project-user/activity/activity';

// Constants
import {LOCATIONS} from '../../../constants/location'

// Helper

// Components
import FeedbackImage from '../../../components/FeedbackImage'
import { ImagePreview } from "../../../components/app/ImagePreview";
import { selectInputStyles } from "../../../constants/SelectInputStyle";
import { FormInput } from "../../../components/app/Form/FormInput";


const AddActivityModal = (props) => {

  //Get the data from LocalStorage
	const _getAddActivityData =JSON.parse(localStorage.getItem ("AddActivity"));


  /*
	*Make 2 states of this is null to make the browser run without error
	*pass the state of localStorage to initialize state then we can keep the states when press back button's browser
	*/
  let des=null;
  let name=null;
	if(_getAddActivityData!=null) 
	{
    name=_getAddActivityData.activityName;
    des=_getAddActivityData.activityDescription;
  }

  const {projectId} = props.location.state.projectId ? props.location.state : "";

  // Initialize the states
  const [activityName, setActivityName] = useState(name);
  const [activityDescription, setActivityDescription] = useState(des);
  const [activityLocation, setActivityLocation] = useState("");
  const [activityDate, setActivityDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [activityImage, setActivityImage] = useState(null)
  const [activityImageFile, setActivityImageFile] = useState(false);


  const dataAddActivity={
    activityName,
    activityDescription,
  }

  // Dispatch 
  const dispatch = useDispatch();

  /**
   * @summary Handle the state of activity name
   * @param {string} name
   * @returns {void} 
   */
  const _onChangeActivityName = (name) => {
    setActivityName(name);
  }

  /**
   * @summary Handle the state of activity description
   * @param {string} description
   * @returns {void}
   */
  const _onChangeActivityDescription = (description) => {
    setActivityDescription(description);
  }

  /**
   * @summary Handle the state of activity location
   * @param {string} location
   * @returns {void}
   */
  const _onChangeActivityLocation = (location) => {
    setActivityLocation(location);
  }

  /**
   * @summary Handle the state of activity date
   * @param {string} date
   * @returns {void}
   */
  const _onChangeActivityDate = (date) => {
    setActivityDate(date);
  }
  

  /**
   * @summary Trigger the ADD_ACTIVITY action
   * @param {string} projectId 
   * @param {string} activityName
   * @param {string} activityDescription
   * @param {string} activityLocation
   * @param {string} activityDate
   * @returns {void}
   */
  const _onAddActivity = () => {
    console.log('activityDate', activityDate)
    dispatch(_activityActions._addActivity_ppu(
      projectId,
      uuid_v4(), 
      activityName, 
      activityDescription,
      activityLocation, 
      activityDate.toDateString(), 
      activityImageFile
    ))
    props.history.push('/projectInfo')
  }

  const _showCalendar = () => {
    setShowCalendar(prevState => !prevState)
  }


  return (
    <div className="add-activity-container">
      <div className="add-activity--form-container">
        <div className="add-activity-titles">
          <p className="add-activity--title">
            Create your activity
          </p>
          <p className="add-activity--subtitle">
            What are you going to do?
          </p>
        </div>
        <div className="add-activity--content">
          <div className="add-activity--input activity-name">
            <FormInput
              formInputLabel="Activity name"
              formInputPlaceholder="Finish funding"
              formInputValue={activityName}
              _formInputOnchangeText={setActivityName}
            />
          </div>
          <div className="add-activity--input activity-description">
            
            <FormInput
              formInputLabel="Description"
              formInputPlaceholder="Describe your activity"
              formInputValue={activityDescription}
              _formInputOnchangeText={setActivityDescription}
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
              value={activityLocation.selectedOption}
              onChange={setActivityLocation}
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
          <div className="add-activity--avatar-preview">
            <p>Avatar</p>
            <ImagePreview
              setImage={setActivityImage}
              setImageFile={setActivityImageFile}
              image={activityImage}
            />
          </div>
          <div className="add-activity--input activity-calendar">
            <i>
              <FcCalendar size={23} onClick={ ()=>{
                _showCalendar();
                localStorage.setItem("AddActivity",JSON.stringify(dataAddActivity));
              }} 
              className="add-activity--calendar--icon" />
            </i>
            
            <FormInput
              formInputLabel="Deadline"
              formInputPlaceholder={activityDate.toDateString()}
              formInputValue={activityDate.toDateString()}
              _formInputOnchangeText={setActivityDate}
            />

          </div>
          {showCalendar && 
            <Calendar
              view='month'
              value={activityDate}
              onClickDay={_onChangeActivityDate}
              activeStartDate={activityDate}
              onDrillUp={() => console.log('drilled')}
            />
          }
          
        </div>
        
        <div
          className="add-activity--add"
        >
          <div 
            className="add-activity--add__button" 
            onClick={()=>{
                //When PPUs click on Add Activity they will delete the key "AddActivity" in LocalStorage!!
             localStorage.removeItem("AddActivity")
              _onAddActivity();
            }
             
            }>
            Add
          </div>
        </div>
      </div>
      <FeedbackImage className="add-activity--feedback-container" />
    </div>
  );
};

export default AddActivityModal;
