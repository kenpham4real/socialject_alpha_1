/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component } from "react";
import "./styles/CreatePostModal.css";

const AddActivityModal = (props) => {
  return (
    <div id="createPostModal_2">
      <h1>Start with the basics</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="modalContent">
        <div className="boxModal">
          <input type="text" placeholder="Activity Name*"></input>
        </div>
        <div className="descriptionBoxModal">
          <input type="text" placeholder="Description *"></input>
        </div>
        <div className="boxModal">
          <input type="text" placeholder="Location *"></input>
        </div>
        <div className="boxModal">
          <input type="text" placeholder="Date *"></input>
        </div>
      </div>
      <button>Add</button>
    </div>
  );
};

export default AddActivityModal;
