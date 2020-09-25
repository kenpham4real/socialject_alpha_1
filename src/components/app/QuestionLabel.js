/**
 *Contributor :Tien 24th September 2020
 *Component:
  In use:
  *Application Form for the recruit info questions 
 */


 //Packages
 import React from "react";
 

 //Styles
 import "../../pages/app/searching_project_user/styles/ApplyFormStyles.css";






 const QuestionLabel=(props)=>{

    const [answerInput, setAnswerInput] = React.useState("");
    React.useEffect(() => {
        props.setValueFromChild(answerInput);
    }, [answerInput]);



     return(
         
         <div className="contact">
            <form  className="contact-form" autocomplete="off">
                <div class="contact-form-group">
                    <label 
                        for="name" 
                        class="contact-form-label"
                    >
                        {props.questionTitle}
                    </label>
                    <input 
                        id="name" 
                        type="text" 
                        class="contact-form-input"
                        value={answerInput}
                        onChange={(answer) => setAnswerInput(answer.target.value)}

                />
                </div>
                
            </form>
     </div>
     );
 }
 export default QuestionLabel;