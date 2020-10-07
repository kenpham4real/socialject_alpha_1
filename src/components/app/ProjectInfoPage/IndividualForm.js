import React from "react";
// import Modal from "react-modal";
import "../../styles/ProjectInfoPage/IndividualForm.css";

const AnswerCard = (props) => {
  const studentSubmission = props.formData;
  return (
    <div className="individual-card">
      <div className="individual-textcontainer">
        <div className="individual-text title">
          {studentSubmission.id}. {studentSubmission.question}
        </div>
        <div className="individual-textcontainer answer">
          <div className="individual-text">{studentSubmission.answer}</div>
        </div>
      </div>
    </div>
  );
};

const IndividualForm = (props) => {
  //These data are just example.
  const studentSubmissions = props.formData;
  const studentAnswers = props.formData.answers;
  console.log("Form Data in Individual Form", studentSubmissions);
  // if (props.userId == props.projectOwnerId)
  return (
    <div className="individual-container">
      <div className="individual-card">
        <img
          src={props.formData.avatar}
          alt="Loading..."
          className="individual-avatar"
        />
        <div className="individual-textcontainer">
          <div className="individual-text title">{props.formData.name}</div>
          <div className="individual-text">{props.formData.email}</div>
        </div>
      </div>
      {studentAnswers.map((studentAnswer) => (
        <AnswerCard formData={studentAnswer} />
      ))}
      <button onClick={props.onModalClosing}> Close</button>
    </div>
  );
  // return <div style={{ display: "none" }}></div>;
};

export default IndividualForm;
