/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component } from "react";
import "./styles/CreatePostModal_2.css";
import { Link } from "react-router-dom";

const CreatePostModal_2 = (props) => {
  return (
    <div id="createPostModal_2">
      <h1>Recruiting your Members</h1>
      <p>Create a form with simple questions for your applicants</p>
      <div className="addQuestionBox">
        <div>
          Question
          <div className="addQuestionButton">+</div>
        </div>

        <ul>
          <li>
            <input type="text" placeholder="What do you want?" />
          </li>
        </ul>
      </div>
      <Link to="/CreatePostModal_3" className="profile-link">
        <button className="profile-button">Continue</button>
      </Link>
      <Link to="/CreatePostModal" className="profile-link">
        <button className="profile-button">Go Back</button>
      </Link>
    </div>
  );
};

export default CreatePostModal_2;
