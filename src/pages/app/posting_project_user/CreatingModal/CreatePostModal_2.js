/*
*Contributor: 
    *Đạt 4th september 2020
    *Tiến 
    12th October 2020
    12/12/2020 Refactor code
*Function: Create Form for PPU to create Project


*/
//Packages
import React, { useState } from "react";

// Helper
import { _onAddInput, _onChangeInputValue } from "../../../../helper/form/Input";

// Style
import { IoIosAdd } from "react-icons/io";
import {Link} from "react-router-dom";
import "./styles/CreatePostModal_2.css";


const CreatePostModal_2 = (props) => {
  

  let locationLabel="";
  if(props.location.projectLocation)
    if (props.location.projectLocation.selectedOption!==undefined)
      {
        locationLabel = props.location.projectLocation.selectedOption.label;
      }
  
  // console.log('props in post modal 2', props)


  const [questionCount, setQuestionCount] = useState([0]);
  const [questions, setQuestions] = useState([""]);


  return (
    <div id="createPostModal_2">
      <h1 className="h1-post-modal-2">Recruiting your Members</h1>
      <p className="p-post-modal-2">Create a form with simple questions for your applicants</p>
      <div className="addQuestionBox">
        <div>
          <p className="question">Question</p>
          
          <div >
            <i>
              <IoIosAdd
                className="add-question"
                onClick={() => _onAddInput(setQuestionCount,setQuestions,questionCount,questions)} 
              />
            </i>
            <ul>
              <li>
                
                {questionCount.map((index) => (
                  <li>
                    <input
                      className="form-input"
                      placeholder="Your question"
                      value={questions[index]}
                      onChange={(text) => _onChangeInputValue(text.target.value, index, setQuestions, questions)}
                    />
                  </li>
                ))}
              </li>
            </ul>
           </div>
        </div>
      </div>
      <div
        className="continue-post-modal"
        onClick={() => {
          props.history.push({
            pathname: "/createPostModal_3",
            projectName:props.location.projectName,
            projectDescription:props.location.projectDescription,
            projectLocation:locationLabel,
            projectCategory:props.location.projectCategory,
            projectDeadline: props.location.projectDeadline,
            showCalendar:props.location.showCalendar,
            projectQuestions: questions
          });
        }}
      >
        Continue
      </div>
      <Link
        className="link-post-modal"
        to={{
          pathname:"/createPostModal_3",
          projectName:props.location.projectName,
          projectDescription:props.location.projectDescription,
          projectLocation:locationLabel,
          projectCategory:props.location.projectCategory,
          projectDeadline: props.location.projectDeadline,
          showCalendar:props.location.showCalendar,
        }}
      > 
        I don't need a form
      </Link>
    </div>
  );
};

export default CreatePostModal_2;
