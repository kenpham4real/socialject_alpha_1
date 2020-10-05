import React from "react";

import "../../styles/ProjectInfoPage/FormSubmission.css";
import Modal from "react-modal";

const SubmissionCard = (props) => {
  const formSubmissionData = props.formData;
  console.log("Form Submission Data", formSubmissionData);
  return (
    <div className="formsub-card">
      <img
        src={formSubmissionData.avatar}
        alt="Loading..."
        className="formsub-avatar"
        onClick={() => props.onModalOpening()}
      />
      <div
        className="formsub-textcontainer"
        onClick={() => console.log("Modal's username clicked")}
      >
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
  const formSubmissions = props.formData;
  console.log("Form Submission", formSubmissions);
  // if (props.userId == props.projectOwnerId)
  return (
    <div className="formsub-container">
      <div className="formsub-text title big"> Form Submissions</div>
      {formSubmissions.map((formSubmissionData) => (
        <SubmissionCard
          formData={formSubmissionData}
          onModalOpening={() => props.onModalOpening(formSubmissionData)}
        />
      ))}
    </div>
  );
  // return <div style={{ display: "none" }}></div>;
};

export default FormSubmission;
