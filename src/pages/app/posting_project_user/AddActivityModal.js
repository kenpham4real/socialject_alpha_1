/*
*Contributor: 
  Đạt 4th september 2020
  Tiến 2nd October 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

// Packages
import React, { useState, useReducer } from "react";
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
import {_previewImageHandler} from '../../../helper/image/imageHandler'

// Components
import FeedbackImage from '../../../components/FeedbackImage'
import { ImagePreview } from "../../../components/app/ImagePreview";
import { selectInputStyles } from "../../../constants/SelectInputStyle";
import { FormInput } from "../../../components/app/Form/FormInput";


const AddActivityModal = (props) => {

  const {projectId} = props.location.state.projectId ? props.location.state : "";

  // Initialize the states
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityLocation, setActivityLocation] = useState("");
  const [activityCategory,setActivityCategory] =useState("");
  const [activityDate, setActivityDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [activityImage, setActivityImage] = useState(null)
  const [activityImageFile, setActivityImageFile] = useState(false);

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
   * @param {string} activityCategory
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
      activityCategory,
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
              <FcCalendar size={23} onClick={_showCalendar} className="add-activity--calendar--icon" />
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
            onClick={_onAddActivity}>
            Add
          </div>
        </div>
      </div>
      <FeedbackImage className="add-activity--feedback-container" />
    </div>
  );
};

export default AddActivityModal;
