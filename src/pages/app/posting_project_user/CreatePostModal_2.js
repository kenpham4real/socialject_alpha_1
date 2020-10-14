/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/
//Packages
import React, { useState } from "react";

// Helper
import { _onAddInput, _onChangeInputValue } from "../../../helper/form/Input";

// Style
import { IoIosAdd } from "react-icons/io";
import {Link} from "react-router-dom";
import "./styles/CreatePostModal_2.css";


const CreatePostModal_2 = (props) => {

  console.log("props",props)
  const [questionCount, setQuestionCount] = useState([0]);
  const [questions, setQuestions] = useState([""]);

  const createPostModal={
    projectName:props.location.projectName,
    projectDescription:props.location.projectDescription,
    projectLocation:props.location.projectLocation,
    projectCategory:props.location.projectCategory,
    projectDate:props.location.projectDate,
    showCalendar:props.location.showCalendar,
    projectImageFile:props.location.projectImageFile
  }


  return (
    <div id="createPostModal_2">
      <h1 className="h1-post-modal-2">Recruiting your Members</h1>
      <p className="p-post-modal-2">Create a form with simple questions for your applicants</p>
      <div class="addQuestionBox">
        <div>
          <p className="question">Question</p>
          
          <div >
            <i>
              <IoIosAdd
                className="add-question"
                onClick={_onAddQuestionInput} 
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
                      onChange={(text) => _onChangeQuestion(text.target.value, index)}
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
          createPostModal();
          props.history.push({
            pathname: "/createPostModal_3",
            projectName: props.location.state.projectName,
            projectDescription: props.location.state.projectDescription,
            projectLocation: props.location.state.projectLocation,
            projectDeadline: props.location.state.projectDeadline,
            projectQuestions: questions
          });
        }}
      >
        Continue
      </div>
      <Link
      className="link-post-modal"
        to={"/createPostModal_3"
        }
      > 
      I don't need a form
      </Link>
    </div>
  );
};

export default CreatePostModal_2;
