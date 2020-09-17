/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/CreatePostModal.css";
import { Link } from "react-router-dom";

const CreatePostModal_1 = (props) => {
  //This is to for later use in the "Continue" button. (Redux)
  const dispatch = useDispatch();

  //This is to allow the user to change the value of name, description, etc. (useState hooks)
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [location, setLoca] = useState(null);
  const [deadline, setDeadline] = useState(null);

  //Function to dispatch the data onto the global store. (Redux)
  /* Not finished
  const toNextModal = (name, desc, location, deadline) => {
    dispatch(
      { type: "ADD_NAME", payload: name },);
    dispatch(
    { type: "ADD_DESCRIPTION", payload: desc },);
    dispatch(
      { type: "ADD_LOCATION", payload: location },);
    dispatch(
      { type: "ADD_DEADLINE", payload: deadline });
    );
  };
  */

  //UI rendering
  return (
    <div id="createPostModal_2">
      <h1>Start with the basics</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="modalContent">
        <div className="boxModal">
          <input
            type="text"
            placeholder="Project Name*"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="descriptionBoxModal">
          <input
            type="text"
            placeholder="Description *"
            onChange={(event) => setDesc(event.target.value)}
          ></input>
        </div>
        <div className="boxModal">
          <input
            type="text"
            placeholder="Location *"
            onChange={(event) => setLoca(event.target.value)}
          ></input>
        </div>
        <div className="boxModal">
          <input
            type="text"
            placeholder="Deadline *"
            onChange={(event) => setDeadline(event.target.value)}
          ></input>
        </div>
      </div>
      <Link to="/CreatePostModal_2" className="profile-link">
        <button
          className="profile-button"
          onClick={() => toNextModal(name, desc, location, deadline)}
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default CreatePostModal_1;
