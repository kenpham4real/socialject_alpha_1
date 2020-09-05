import React, { Component } from "react";
import "./styles/CreatePostModal.css";

const CreatePostModal_2 = (props) => {
  return (
    <div id="createPostModal_2">
      <h1>Start with the basics</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="modalContent">
        <div class="boxModal">
          <input type="text" placeholder="Project Name*"></input>
        </div>
        <div class="descriptionBoxModal">
          <input type="text" placeholder="Description *"></input>
        </div>
        <div class="boxModal">
          <input type="text" placeholder="Location *"></input>
        </div>
        <div class="boxModal">
          <input type="text" placeholder="Deadline *"></input>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default CreatePostModal_2;
