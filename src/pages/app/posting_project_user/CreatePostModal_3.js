/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";

import "./styles/CreatePostModal_3.css";

//Firebase stuff. Include this allow the PushData() function to run properly
import { firebase_db } from "../../../firebase-config";
import { _createProject_ppu } from "../../../store/actions/posting-project-user/project/project";

//Function to pushdata on Firebase. The id of the object will be generated randomly
function PushData(data, profileId) {
  //To Organization
  firebase_db
    .collection("organization") //Go to the collection: organization

    .add(data) //add a new object in that collection, with the data taken from the parameter.
    //Those two next function are to make the debug/testing process easier.
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  //To public project
  firebase_db
    .collection("public-projects") //Go to the collection: public-project
    .add(data) //add a new object in that collection, with the data taken from the parameter.
    //Those two next function are to make the debug/testing process easier.
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

//Main function.
const CreatePostModal_3 = (props) => {
  const dispatch = useDispatch();

  //Initialize the state
  const [projectBenefitArray, setProjectBenefitArray] = useState([]);
  const [projectBenefit, setProjectBenefit] = useState("");

  const [projectRequirementArray, setProjectRequirementArray] = useState([]);
  const [projectRequirement, setProjectRequirement] = useState("");

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

  //The data to push to Fire Base. This is selected from the global store (Redux)
  const postData = {
    projectName: props.location.projectName,
    projectDescription: props.location.projectDescription,
    projectLocation: props.location.projectLocation,
    projectDeadline: props.location.projectDeadline,
    question: props.location.projectQuestionArray,
    // benefit: projectBenefitArray,
    // requirement: projectRequirementArray,
    avatar: null,
  };
  console.log("Post Data: ", postData);

  //Make this to allow the the user to input the data.
  const [temporary, setTemporary] = useState(null);
  console.log("Rendering repeated"); //For testing.
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
      <div className="avatarBox"> Avatar</div>
      {/*<Link> </Link> component is to navigate*/}
      {/* <Link to="/projectInfo" className="profile-link"> */}
      <button
        className="profile-button"
        onClick={
          //Now push the data onto Firebase.
          () =>
            dispatch(
              _createProject_ppu(
                postData,
                projectBenefitArray[projectBenefitArray.length - 1],
                projectRequirementArray[projectRequirementArray.length - 1]
              )
            )
        }
      >
        Continue
      </button>
      {/* </Link> */}
      {/* <Link to="/CreatePostModal_2" className="profile-link"> */}
      <button className="profile-button">Go Back</button>
      {/* </Link> */}
    </div>
  );
};

export default CreatePostModal_3;
