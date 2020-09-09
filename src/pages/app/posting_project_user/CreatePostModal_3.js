/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component } from "react";
import "./styles/CreatePostModal_3.css";

const CreatePostModal_3 = (props) => {
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
            <input type="text" placeholder="" />
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
      <button>Continue</button>
    </div>
  );
};

export default CreatePostModal_3;
