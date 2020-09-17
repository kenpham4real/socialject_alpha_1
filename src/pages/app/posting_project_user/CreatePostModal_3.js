/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/CreatePostModal_3.css";
import { Link } from "react-router-dom";
//Firebase stuff. Include this allow the PushData() function to run properly
import { firebase_db } from "../../../firebase-config";

//Function to pushdata on Firebase. The id of the object will be generated randomly
function PushData(data, profileId) {
  //To Organization
  firebase_db
    .collection("organization") //Go to the collection: organization
    .doc(profileId)
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
  //The data to push to Fire Base. This is selected from the global store (Redux)
  const postData = {
    name: useSelector((state) => state.project.name),
    description: useSelector((state) => state.project.description),
    location: useSelector((state) => state.project.location),
    deadline: useSelector((state) => state.project.deadline),
    question: ["You like art?", "You like coding?"],
    benefit: ["Improve your knowledge", "Improve your money"],
    requirement: ["Artistic Soul", "Coder Endurence"],
    avatar: null,
  };

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
          <li>
            <input
              type="text"
              placeholder=""
              onChange={(event) => {
                setTemporary(event.target.value); //Change the value of text input. I couldn't solve the problem you mentioned this noon, so I guess you solve this.
                postData.benefit[0] = temporary; //Set this into the postData.
              }}
            />
          </li>
          <li>
            <input type="text" placeholder="" />
          </li>
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
            <input type="text" placeholder="" />
          </li>
          <li>
            <input type="text" placeholder="" />
          </li>
        </ul>
      </div>
      <div className="avatarBox"> Avatar</div>
      {/*<Link> </Link> component is to navigate*/}
      <Link to="/projectInfo" className="profile-link">
        <button
          className="profile-button"
          onClick={
            //Now push the data onto Firebase.
            () => PushData(postData)
          }
        >
          Continue
        </button>
      </Link>
      <Link to="/CreatePostModal_2" className="profile-link">
        <button className="profile-button">Go Back</button>
      </Link>
    </div>
  );
};

export default CreatePostModal_3;
