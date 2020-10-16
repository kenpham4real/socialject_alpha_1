/**
 * Contributor: TrNgTien
 * Day: 19/9/2020
 * Main function: render IU of application form
 */

//Packages
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { _onSubmitFormAnswers } from "../../../store/actions/searching-project-user/project/project";
import QuestionLabel from "../../../components/app/QuestionLabel";
//  import _loadProjects from "./ProjectInfoPage";

 //Styles
import "./styles/ApplyFormStyles.css";
import FeedbackImage from "../../../components/FeedbackImage";

// import NavigationBar_Ken from '../../../components/app/NavigationBar_Ken'


const ApplyForm = (props) => {
    //Dispatch
    const dispatch = useDispatch();

    // Global state
	const projectsData = useSelector((state) => state.projectReducerSPU.projectsData);

	// Depending on the number of questions, we'll initialize the according number of states for the inputs
	// Eg: If there're 2 questions, the answerInput will be initialized as an array of 2 objects, containing "question" and "answer" properties
	const [answerInput, setAnswerInput] = useState(projectsData.projectDetail.questions.map((question) => {
		return{
			question: question,
			answer: "",
		}
	}))


	/**
	 * @summary Dispatching the answers to firestore
	 * @author Ken Pham
	 */
    const _onSubmitAnswers =() =>{
		const orgId = projectsData.projectInfo.orgId;
		const projectId = projectsData.projectInfo.projectId;

		dispatch(_onSubmitFormAnswers(answerInput, orgId, projectId));  
		props.history.push({
			pathname: "/projectInfo",
			answerInput,
		}); 
	}


	/**
	 * @summary Finding the position of the object containing the question in the answerInput
	 * @param {string} question 
	 * @returns {number} foundAnswerPosition - The position of the object containing the question parameter in the answerInput array
	 * @author Ken Pham
	 */
	const _findAnswerPosition = (question) => {
		let foundAnswerPosition;
		let ref, questionRef;
		for(const key in answerInput){
			ref = answerInput[key];
			questionRef = ref["question"]
			if(question === questionRef) foundAnswerPosition = key
		}
		return foundAnswerPosition;
	}
	

	/**
	 * @summary Set the state of the answerInput
	 * @param {string} input The answer input state
	 * @param {string} question The static question included in the answerInput state
	 */
	const _onChangeAnswerInput = (input, question) => {

		let newAnswerList = [...answerInput];

		// Find the position of the answer input state
		let inputPosition = _findAnswerPosition(question);
		
		// Change (aka update) the current answer in the newAnswerList to be the new one user is inputting 
		newAnswerList[inputPosition]["answer"] = input;

		// Set the new state
		setAnswerInput(newAnswerList)

	}

    return (
        <div className="apply-form-container" >
			{/* <div>
				<NavigationBar_Ken/>
			</div> */}
            <div className="apply-form--project">
				<p className="apply-form--project-name">{projectsData.projectInfo.projectName}</p>
				<p className="apply-form--project-location">{projectsData.projectInfo.location}</p>
				<ul>
					<li>
						{projectsData.projectDetail.questions.map((question) => {

							const answerPosition = _findAnswerPosition(question);
							const answer = answerInput[answerPosition]["answer"];

							return(
								<QuestionLabel
									questionTitle={question}
									answer={answer}
									_onChangeAnswerInput={(answerText) => {
										_onChangeAnswerInput(answerText, question)
									}}
								/>
							)
						})}
					</li>
				</ul>
				<div
					className="apply-form--submit-button"
					onClick={() => {
						_onSubmitAnswers();
						}}
				>
					Submit
				</div>
			</div>

			<div className="apply-form--feedback-image">
				<FeedbackImage/>
			</div>
            
        </div>
	);
};
export default ApplyForm;
  