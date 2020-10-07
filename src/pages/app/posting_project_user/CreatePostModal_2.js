/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { useState } from "react";
import "./styles/CreatePostModal_2.css";

const CreatePostModal_2 = (props) => {
 
  //Initialize the state
  // const [projectQuestionArray, setProjectQuestionArray] = useState("");
  // const [projectQuestion, setProjectQuestion] = useState("");
  const [inputList, setInputList] = useState([""]);
  

  //Handle add question Event
  console.log("props",props);


  // const _onChangeAddProjectQuestion = (question) => {
  //   setProjectQuestion(question);


  //   setProjectQuestionArray((projectQuestionArray) =>
  //     projectQuestionArray.concat(question)
  //   );
  // };


  const Input = () => {
    return(
        // <input 
        //   type="text"
        //   placeholder="What do you want?" 
        //   // value={projectQuestion}
        //   // onChange={(e) => _onChangeAddProjectQuestion(e.target.value)}
        //  >
        //  </input>

        <ul>
        <li>
          <input
            type="text"
            placeholder="Enter your question?"
            // value={projectQuestion}
            // onChange={(e) => _onChangeAddProjectQuestion(e.target.value)}
          />
        </li>
        </ul>
        
    )
  };
  const _onAddBtnClick = (props) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  // if(onAddBtnClick(props)===true){
    
  // }
  


  // console.log("projects",projectQuestionArray);


  const _onChangeHandleContinue = () => {
    props.history.push({
      pathname: "/createPostModal_3",
      projectName: props.location.state.projectName,
      projectDescription: props.location.state.projectDescription,
      projectLocation: props.location.state.projectLocation,
      projectDeadline: props.location.state.projectDeadline,
      // projectQuestionArray:
      // projectQuestionArray[projectQuestionArray.length - 1],
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
            <button onClick={_onAddBtnClick}> Add Your question</button> 
                  {inputList}
           </div>
        </div>
        
        {/* <ul>
          <li>
            <input
              type="text"
              placeholder="What do you want?"
              value={projectQuestion}
              onChange={(e) => _onChangeAddProjectQuestion(e.target.value)}
            />
          </li>
        </ul> */}
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
