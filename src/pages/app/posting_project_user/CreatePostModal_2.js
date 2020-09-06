/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component } from "react";
import "./styles/CreatePostModal_2.css";

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
      <button>Continue</button>
    </div>
  );
};

export default CreatePostModal_2;
