/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { useState, useReducer } from "react";
import "./styles/CreatePostModal_2.css";

const CreatePostModal_2 = (props) => {
  //Initialize the state
  const [projectQuestionArray, setProjectQuestionArray] = useState([]);
  const [projectQuestion, setProjectQuestion] = useState("");
  //Handle add question Event
  console.log(props);
  const _onChangeAddProjectQuestion = (question) => {
    setProjectQuestion(question);

    setProjectQuestionArray((projectQuestionArray) =>
      projectQuestionArray[0].concat(question)
    );
  };
  console.log(projectQuestionArray);
  const _onChangeHandleContinue = () => {
    props.history.push({
      pathname: "/createPostModal_3",
      projectName: props.location.projectName,
      projectDescription: props.location.projectDescription,
      projectLocation: props.location.projectLocation,
      projectDeadline: props.location.projectDeadline,
      projectQuestionArray:
        projectQuestionArray[projectQuestionArray.length - 1],
    });
  };

  return (
    <div id="createPostModal_2">
      <h1>Recruiting your Members</h1>
      <p>Create a form with simple questions for your applicants</p>
      <div class="addQuestionBox">
        <div>
          Question
          <div class="addQuestionButton">+</div>
        </div>

        <ul>
          <li>
            <input
              type="text"
              placeholder="What do you want?"
              value={projectQuestion}
              onChange={(e) => _onChangeAddProjectQuestion(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          _onChangeHandleContinue();
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default CreatePostModal_2;
