/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

// Packages
import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid_v4} from 'uuid';

// Styles
import "./styles/CreatePostModal.css";

// Actions
import * as _activityActions from '../../../store/actions/posting-project-user/activity/activity';

// Constants
import {testing_project_id} from '../../../constants/testing-keys'


const AddActivityModal = (props) => {

  // Initialize the states
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityLocation, setActivityLocation] = useState("");
  const [activityDate, setActivityDate] = useState(null);

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
    dispatch(_activityActions._addActivity_ppu(uuid_v4(), activityName, activityDescription,activityLocation, activityDate))
  }

  return (
    <div id="createPostModal_2">
      <h1>Start with the basics</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="modalContent">
        <div className="boxModal">
          <input 
            type="text" 
            placeholder="Activity Name*"
            value={activityName}
            onChange={(name) => _onChangeActivityName(name.target.value)}
          />
        </div>
        <div className="descriptionBoxModal">
          <input 
            type="text" 
            placeholder="Description *"
            value={activityDescription}
            onChange={(description) => _onChangeActivityDescription(description.target.value)}
          />
        </div>
        <div className="boxModal">
          <input 
            type="text" 
            placeholder="Location *"
            value={activityLocation}
            onChange={(location) => _onChangeActivityLocation(location.target.value)}
          />
        </div>
        <div className="boxModal">
          <input 
            type="text" 
            placeholder="Date *"
            value={activityDate}
            onChange={(date) => _onChangeActivityDate(date.target.value)}
          />
        </div>
      </div>
      <button 
        onClick={_onAddActivity}
      >
        Add
      </button>
    </div>
  );
};

export default AddActivityModal;
