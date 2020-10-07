/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project

*/

import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import "./styles/CreatePostModal.css";
// import { Link } from "react-router-dom";

const CreatePostModal = (props) => {
  //initialize the state
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");

  // Dispatch

  /**
   * @summary Handle the state of project name
   * @param {string} name
   * @returns {void}
   */
  const _onChangeProjectName = (name) => {
    console.log("name", name);
    setProjectName(name);
  };

  /**
   * @summary Handle the state of project name
   * @param {string} name
   * @returns {void}
   */
  const _onChangeProjectDescription = (name) => {
    setProjectDescription(name);
    console.log(name);
  };

  /**
   * @summary Handle the state of project name
   * @param {string} name
   * @returns {void}
   */
  const _onChangeProjectLocation = (name) => {
    setProjectLocation(name);
  };

  const _onChangeProjectDeadline = (name) => {
    setProjectDeadline(name);
  };

  const _onChangeProjectContinue = () => {
    props.history.push("/createPostModal_2", {
      projectName: projectName,
      projectDescription: projectDescription,
      projectLocation: projectLocation,
      projectDeadline: projectDeadline,
    });
  };
  return (
    <div id="createPostModal_2">
      <h1>Start with the basics</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="modalContent">
        <div className="boxModal">
          <input
            type="text"
            placeholder="Project Name*"
            value={projectName}
            onChange={(name) => _onChangeProjectName(name.target.value)}
          ></input>
        </div>
        <div className="descriptionBoxModal">
          <input
            type="text"
            placeholder="Description *"
            value={projectDescription}
            onChange={(projectDescription) =>
              _onChangeProjectDescription(projectDescription.target.value)
            }
          ></input>
        </div>
        <div className="boxModal">
          <input
            type="text"
            placeholder="Location *"
            value={projectLocation}
            onChange={(projectLocation) =>
              _onChangeProjectLocation(projectLocation.target.value)
            }
          ></input>
        </div>
        <div className="boxModal">
          <input
            type="text"
            placeholder="Deadline *"
            value={projectDeadline}
            onChange={(projectDeadline) =>
              _onChangeProjectDeadline(projectDeadline.target.value)
            }
          ></input>
        </div>
      </div>
      <button onClick={() => _onChangeProjectContinue()}>Continue</button>
    </div>
  );
};

export default CreatePostModal;
