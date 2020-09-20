/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";

import "./styles/CreatePostModal_3.css";

// Actions
import * as projectActions from "../../../store/actions/posting-project-user/project/project";

// Components
import {ImagePreview} from '../../../components/app/ImagePreview'

const CreatePostModal_3 = (props) => {
  const dispatch = useDispatch();

  //Initialize the state
  const [projectBenefitArray, setProjectBenefitArray] = useState([]);
  const [projectBenefit, setProjectBenefit] = useState("");

  const [projectRequirementArray, setProjectRequirementArray] = useState([]);
  const [projectRequirement, setProjectRequirement] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectImageFile, setProjectImageFile] = useState(null);

  //Handling Add benefits and requirements event

  const _onChangeAddBenefit = (benefit) => {
    setProjectBenefit(benefit);
    // setProjectBenefitArray((benefit) => projectBenefitArray.concat(benefit));
    setProjectBenefitArray((prev) => [...prev, benefit]);
    console.log("projectBenefitArray", projectBenefitArray);
  };

  const _onChangeAddRequirement = (requirement) => {
    setProjectRequirement(requirement);
    setProjectRequirementArray((req) => req.concat(requirement));
    console.log("projectRequirementArray", projectRequirementArray);
  };

  const {
    projectName,
    projectDescription,
    projectLocation,
    projectDeadline,
    question
  } = props.location;

  return (
    <div id="createPostModal_3">
      <h1>Bring it to everyone</h1>
      <p>Let your project applicants know more about how to join</p>
      <div className="addBenefitBox">
        <div>
          Benefits for applicants
          <div className="addBenefitButton">+</div>
        </div>
        <ul>
          {" "}
          {/*Add benefit*/}
          <li>
            <input
              type="text"
              placeholder=""
              value={projectBenefit}
              onChange={(projectBenefit) =>
                _onChangeAddBenefit(projectBenefit.target.value)
              }
            />
          </li>
          {/* <li>
            <input
              type="text"
              placeholder=""
              value={projectRequirement}
              onChange={(projectRequirement) =>
                _onChangeAddRequirement(projectRequirement.target.value)
              }
            />
          </li> */}
        </ul>
      </div>
      {/*REQUIREMENTS*/}
      <div className="addBenefitBox">
        <div>
          Requirements to join
          <div className="addBenefitButton">+</div>
        </div>
        <ul>
          <li>
            <input
              type="text"
              placeholder=""
              value={projectRequirement}
              onChange={(projectRequirement) =>
                _onChangeAddRequirement(projectRequirement.target.value)
              }
            />
          </li>
          {/* <li>
            <input
              type="text"
              placeholder=""
              value={projectRequirement}
              onChange={(projectRequirement) =>
                _onChangeAddRequirement(projectRequirement.target.value)
              }
            />
          </li> */}
        </ul>
      </div>

      <ImagePreview
        image={projectImage}
        setImage={setProjectImage}
        setImageFile={setProjectImageFile}
      />

      <button
        className="profile-button"
        onClick={
          //Now push the data onto Firebase.
          () =>
            dispatch(
              projectActions._createProject_ppu(
                projectName,
                projectDescription,
                projectLocation,
                projectDeadline,
                projectBenefitArray[projectBenefitArray.length - 1],
                projectRequirementArray[projectRequirementArray.length - 1],
                projectImageFile,
              )
            )
        }
      >
        Continue
      </button>
      <button className="profile-button">Go Back</button>
    </div>
  );
};

export default CreatePostModal_3;
