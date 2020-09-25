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

    //Dispatch
    const dispatch = useDispatch();

    //Global state
    const projectsData = useSelector(
        (state) => state.projectReducerSPU.projectsData
      );

      
    const [valueFromChild, setValueFromChild] = useState('');
    
    // State of the Form
    const FormState ={
        valueFromChild,
    }

   
    /**
     * @summary Handle State of Name
     * @param {string} Name
     * @return {void}
     */
    const onChangeName=(Name) =>{
        setName(Name);
    }

    
    /**
     * @summary Handle State of Email
     * @param {string} Email
     * @return {void}
     */
    const onChangeEmail=(Email) =>{
        setEmail(Email);
    }


    /**
     * @summary Handle State of Message
     * @param {string} Message
     * @return {void}
     */
    const onChangeMessage=(Message) =>{
        setMessage(Message);
    }

    // data

    const submitForm =() =>{
        console.log("Sumbit form succesful!");
        dispatch(upDataForm(FormState));
    }


    console.log("value",FormState)

    return (
        
        <div className="page" >
            <h1 className="h1">Project's Name</h1>
            <p className="location">Location</p>
               
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
  