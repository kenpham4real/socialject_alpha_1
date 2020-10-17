/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

// Styles
import "./styles/CreatePostModal_3.css";

// Actions
import * as projectActions from "../../../store/actions/posting-project-user/project/project";

// Components
import { ImagePreview } from "../../../components/app/ImagePreview";
import { _onAddInput, _onChangeInputValue } from "../../../helper/form/Input";

const CreatePostModal_3 = (props) => {
  const dispatch = useDispatch();
  const organization = useSelector((state) => state.autoLoginReducer.userData);

  // console.log('organization', organization)

  //Initialize the state
  const [projectBenefitCount, setProjectBenefitCount] = useState([0]);
  const [projectBenefits, setProjectBenefits] = useState([""]);

  const [projectRequirementCount, setProjectRequirementCount] = useState([0]);
  const [projectRequirements, setProjectRequirements] = useState([""]);

  const [projectImage, setProjectImage] = useState(null)
  const [projectImageFile, setProjectImageFile] = useState(null);

  const {
    projectName,
    projectDescription,
    projectLocation,
    projectDeadline,
    projectQuestions,
    projectCategory,
  } = props.location;


    // console.log('props in create post modal 3', props)

  const _PostProject = () =>{
    props.history.push({
      pathname: "/profile",
    });
    dispatch(
      projectActions._createProject_ppu(
        organization.orgId,
        uuid_v4(),
        projectName,
        projectDescription,
        projectLocation,
        projectDeadline.toDateString(),
        projectBenefits,
        projectRequirements,
        projectImageFile,
        projectQuestions,
        projectCategory
      )
    )
  }
  return (
    <div id="createPostModal_3">
      <h1>Bring it to everyone</h1>
      <p>Let your project applicants know more about how to join</p>
      <div className="addBenefitBox">
        <div>
          Benefits for applicants
          <div
            onClick={() =>
              _onAddInput(
                setProjectBenefitCount,
                setProjectBenefits,
                projectBenefitCount,
                projectBenefits
              )
            }
            className="addBenefitButton"
          >
            +
          </div>
        </div>
        <ul>
          {" "}
          {/*Add benefit*/}
          <li>
            {projectBenefitCount.map((benefitIndex) => (
              <input
                className="form-input"
                type="text"
                placeholder="Your benefit"
                value={projectBenefits[benefitIndex]}
                onChange={(benefit) =>
                  _onChangeInputValue(
                    benefit.target.value,
                    benefitIndex,
                    setProjectBenefits,
                    projectBenefits
                  )
                }
              />
            ))}
          </li>
        </ul>
      </div>
      {/*REQUIREMENTS*/}
      <div className="addBenefitBox">
        <div>
          Requirements to join
          <div
            onClick={() =>
              _onAddInput(
                setProjectRequirementCount,
                setProjectRequirements,
                projectRequirementCount,
                projectRequirements
              )
            }
            className="addBenefitButton"
          >
            +
          </div>
        </div>
        <ul>
          <li>
            {projectRequirementCount.map((requirementIndex) => (
              <input
                className="form-input"
                type="text"
                placeholder="Your requirements"
                value={projectRequirements[requirementIndex]}
                onChange={(requirement) =>
                  _onChangeInputValue(
                    requirement.target.value,
                    requirementIndex,
                    setProjectRequirements,
                    projectRequirements
                  )
                }
              />
            ))}
          </li>
        </ul>
      </div>
      <div className="add-activity--avatar-preview">
        <p>Avatar for your project</p>
        <ImagePreview
          setImage={setProjectImage}
          setImageFile={setProjectImageFile}
          image={projectImage}
        />
      </div>
      <div
        //className="profile-button"
        className="continue-post-modal"
        onClick={
          //Now push the data onto Firebase.
          () =>{
            localStorage.removeItem("CreateModal_1");
            _PostProject();
          }
        }
      >
        Post
      </div>
    </div>
  );
};

export default CreatePostModal_3;
