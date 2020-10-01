import React from "react";

import "../../styles/ProjectInfoPage/FormSubmission.css";

const SubmissionCard = (props) => {
  const formSubmissionData = props.data;
  return (
    <div className="formsub-card">
      <img
        src={formSubmissionData.avatar}
        alt="Loading..."
        className="formsub-avatar"
        onClick={() => console.log("Handle Clicked")}
      />
      <div className="formsub-textcontainer">
        <div className="formsub-text title">{formSubmissionData.name}</div>
        <div className="formsub-text">{formSubmissionData.email}</div>
      </div>
    </div>
  );
};

const FormSubmission = (props) => {
  //These data are just example.
  const imageURL =
    "https://i.pinimg.com/originals/39/46/55/39465510117c36c2023b2d72cdcf05b3.jpg";
  const formSubmissionData = props.data;

  return (
    <div className="formsub-container">
      <div className="formsub-text title big"> Form Submissions</div>
      {formSubmissionData.map((formSubmissionData) => (
        <SubmissionCard data={formSubmissionData} />
      ))}
    </div>
  );
};

export default FormSubmission;
