/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { useState } from "react";
import { FormInput } from "../../../components/app/Form/FormInput";
import "./styles/CreatePostModal_2.css";

const CreatePostModal_2 = (props) => {
 
  //Initialize the state
  // const [projectQuestionArray, setProjectQuestionArray] = useState("");
  // const [projectQuestion, setProjectQuestion] = useState("");
  const [inputList, setInputList] = useState([""]);

  const [questionCount, setQuestionCount] = useState([0]);
  const [questions, setQuestions] = useState([""]);

  const _onAddQuestionInput = () => {
    
    const currentQuestionCount = questionCount;
    const addedQuestionCount = currentQuestionCount.concat(currentQuestionCount[currentQuestionCount.length-1] + 1);
    setQuestionCount(addedQuestionCount)
    console.log('questionCount', questionCount)
  }

  console.log('questions outside', questions)

  const _onChangeQuestion = (text, questionIndex) => {
    console.log('index', questionIndex)
    let changingQuestion = questions[questionIndex];
    console.log('changingQuestion', changingQuestion)
    changingQuestion = text;
    const allQuestions = [...questions];
    allQuestions[questionIndex] = changingQuestion;
    setQuestions(allQuestions);
  }


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

            <button onClick={_onAddQuestionInput} >Add your question</button>
            <ul>
              <li>
                {questionCount.map((index) => (
                  <input
                    placeholder="Your question"
                    value={questions[index]}
                    onChange={(text) => _onChangeQuestion(text.target.value, index)}
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
