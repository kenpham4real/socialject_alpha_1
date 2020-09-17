/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component } from "react";
import "./styles/CreatePostModal.css";
import { Link } from "react-router-dom";

const CreatePostModal_1 = (props) => {
  return (
    <div id="createPostModal_2">
      <h1>Start with the basics</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="modalContent">
        <div className="boxModal">
          <input type="text" placeholder="Project Name*"></input>
        </div>
        <div className="descriptionBoxModal">
          <input type="text" placeholder="Description *"></input>
        </div>
        <div className="boxModal">
          <input type="text" placeholder="Location *"></input>
        </div>
        <div className="boxModal">
          <input type="text" placeholder="Deadline *"></input>
        </div>
      </div>
      <Link to="/CreatePostModal_2" className="profile-link">
        <button className="profile-button">Continue</button>
      </Link>
    </div>
  );
};

export default CreatePostModal_1;
