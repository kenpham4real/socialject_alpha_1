/**
 * Contributor: TrNgTien
 * Day: 19/9/2020
 * Main function: render IU of application form
 */

 //Packages
 import React, {useState,useCallback} from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { upDataForm } from "../../../store/actions/searching-project-user/project/project";
 import QuestionLabel from "../../../components/app/QuestionLabel";
 import _loadProjects from "./ProjectInfoPage";

//Funtions
import * as projectActions from "../../../store/actions/searching-project-user/project/projectAction";


 //Styles
 import "./styles/ApplyFormStyles.css";


 const ApplyForm = (props) => {
    //Initialize the state
    const [valueFromChild, setValueFromChild] = useState('');

    const projectId = props.history.location.projectId;

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


    const _loadProjects = useCallback(async () => {
        try {
          dispatch(projectActions.FetchProjectInfo(dispatch, projectId));
        } catch (error) {
          console.log("error", error);
        }
      }, [dispatch]);

    console.log("value",FormState)

    return (
        
        <div className="page" >
            <h1 className="h1">{projectsData.projectInfo.projectName}</h1>
            <p className="location">{projectsData.projectInfo.location}</p>
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
                            _loadProjects();
                            props.history.push({
                              pathname: "/projectInfo",
                              FormState,
                            });
                          }}
                    >
                        Submit
                    </button>
            
        </div>
        );
    };
  export default ApplyForm;
  