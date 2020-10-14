/**
 *Contributor :Tien 24th September 2020
 *Component:
  In use:
  *Application Form for the recruit info questions 
 */


 //Packages
 import React from "react";
 
// Components
import {FormInput} from '../../components/app/Form/FormInput'

 //Styles
 import "../../pages/app/searching_project_user/styles/ApplyFormStyles.css";


 const QuestionLabel=(props)=>{

	/**
	 * @summary Set the state of the input 
	 * @param {string} text The input user is typing in
	 */
	const _answerInputHandler = (text) => {

		// The function plays as a prop, which is executed from the parent component: ApplyForm
		props._onChangeAnswerInput(text)
	}

    return(
         
        <div className="contact">
            {/* <form  className="contact-form" autoComplete="off"> */}
                {/* <div className="contact-form-group"> */}
                    <FormInput
                        formInputLabel={props.questionTitle}
                        formInputValue={props.answer}
                        _formInputOnchangeText={_answerInputHandler}
                    />
                {/* </div> */}
                
            {/* </form> */}
        </div>
    );
 }
 export default QuestionLabel;