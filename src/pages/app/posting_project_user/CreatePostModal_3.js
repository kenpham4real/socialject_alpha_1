/*
*Contributor: Đạt 4th september 2020
*Function: Project Registeration (render page for PPU to create their project)

*/

import React, { Component } from "react";
import "./styles/CreatePostModal_3.css";

const CreatePostModal = (props) => {
  return (
    <div id="createPostModal_3">
      <h1>Bring it to everyone</h1>
      <p>Let your project applicants know more about how to join</p>
      <div class="addBenefitBox">
        <div>
          Benefits for applicants
          <div class="addBenefitButton">+</div>
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
      <div class="addBenefitBox">
        <div>
          Requirements to join
          <div class="addBenefitButton">+</div>
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
      <div class="avatarBox"> Avatar</div>
      <button>Continue</button>
    </div>
  );
};

export default CreatePostModal;
