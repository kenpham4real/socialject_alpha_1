/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { useState } from "react";

// Helper
import { _onAddInput, _onChangeInputValue } from "../../../helper/form/Input";

// Style
import "./styles/CreatePostModal_2.css";

const CreatePostModal_2 = (props) => {

  const [questionCount, setQuestionCount] = useState([0]);
  const [questions, setQuestions] = useState([""]);


  const _onChangeHandleContinue = () => {
    props.history.push({
      pathname: "/createPostModal_3",
      projectName: props.location.state.projectName,
      projectDescription: props.location.state.projectDescription,
      projectLocation: props.location.state.projectLocation,
      projectDeadline: props.location.state.projectDeadline,
      projectQuestions: questions
    });
  };

  return (
    <div id="createPostModal_2">
      <h1>Recruiting your Members</h1>
      <p>Create a form with simple questions for your applicants</p>
      <div class="addQuestionBox">
        <div>
          Question
          <div class="addQuestionButton">

            <button onClick={() => _onAddInput(setQuestionCount,setQuestions,questionCount,questions)} >Add your question</button>
            <ul>
              <li>
                {questionCount.map((index) => (
                  <input
                    placeholder="Your question"
                    value={questions[index]}
                    onChange={(text) => _onChangeInputValue(text.target.value, index, setQuestions, questions)}
                  />
                ))}
              </li>
            </ul>
           </div>
        </div>
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
