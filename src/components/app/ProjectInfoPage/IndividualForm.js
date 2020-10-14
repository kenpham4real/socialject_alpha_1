import React from "react";
// import Modal from "react-modal";
import "../../styles/ProjectInfoPage/IndividualForm.css";

const AnswerCard = (props) => {
  const studentAnswer = props.studentAnswer;
  return (
    <div className="individual-card">
      <div className="individual-textcontainer">
        <div className="individual-text title">
          {studentAnswer.question}
        </div>
        <div className="individual-textcontainer answer">
          <div className="individual-text">{studentAnswer.answer}</div>
        </div>
      </div>
    </div>
  );
};

const IndividualForm = (props) => {
  
  const studentSubmission = props.studentSubmission;
  const studentAnswers = studentSubmission.answers;

  
  // if (props.userId == props.projectOwnerId)
  return (
    <div className="individual-container">
      <div className="individual-card">
        <img
          src={studentSubmission.studentInfo.studentAvatar}
          alt="Loading..."
          className="individual-avatar"
        />
        <div className="individual-textcontainer">
          <div className="individual-text title">{studentSubmission.studentInfo.studentName}</div>
          <div className="individual-text">{studentSubmission.studentInfo.studentEmail}</div>
        </div>
      </div>
      {studentAnswers.map((studentAnswer) => (
        <AnswerCard studentAnswer={studentAnswer} />
      ))}
      <button onClick={props._onCloseApplicantView}>Close</button>
    </div>
  );
  // return <div style={{ display: "none" }}></div>;
};

export default IndividualForm;
