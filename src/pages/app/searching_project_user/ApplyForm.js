/**
 * Contributor: TrNgTien
 * Day: 19/9/2020
 * Main function: render IU of application form
 */

 //Packages
 import React, {useState} from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { upDataForm } from "../../../store/actions/searching-project-user/project/project";
import QuestionLabel from "../../../components/app/QuestionLabel";

 //Styles
 import "./styles/ApplyFormStyles.css";


 const ApplyForm = (props) => {
    //Initialize the states
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [valueFromChild, setValueFromChild] = useState('');


    //Dispatch
    const dispatch = useDispatch();

    //Global state
    const projectsData = useSelector(
        (state) => state.projectReducerSPU.projectsData
      );
    // State of the Form
    const FormState ={
        valueFromChild,
    }


    const submitForm =() =>{
        console.log("Sumbit form succesful!");
        dispatch(upDataForm(FormState));
    }


    console.log("value",FormState)

    return (
        
        <div className="page" >
            <h1 className="h1">{projectsData.projectInfo.projectName}</h1>
            <p className="location">{projectsData.projectInfo.location}</p>
               
                {/* <QuestionLabel
                    // truyền data ở đây
                    
                /> */}
                {projectsData.projectDetail.questions.map((question) => (
                    <QuestionLabel
                        questionTitle={question}
                        value={valueFromChild}
                        setValueFromChild={setValueFromChild}
                    />
                ))}
                    <button 
                        type="submit" 
                        className="contact-form-submit"
                        onClick={() => {
                            submitForm();
                            props.history.push({
                              pathname: "/projectInfo",
                            });
                          }}
                    >
                        Submit
                    </button>
            
        </div>
        );
    };
  export default ApplyForm;
  