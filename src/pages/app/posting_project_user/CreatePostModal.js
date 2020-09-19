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
  const [location, setLocation] = useState(null);
  const [deadline, setDeadline] = useState(null);

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
            onChange={(event) => setLocation(event.target.value)}
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
        <button
          className="profile-button"
          onClick={() => props.history.push('/createPostModal_2')}
        >
          Continue
        </button>
    </div>
  );
};

export default CreatePostModal_1;
