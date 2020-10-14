import React from "react";

import "../../styles/ProjectInfoPage/FormSubmission.css";

const SubmissionCard = (props) => {
  const applicantInfo = props.applicantInfo;

  
  const _onViewStudentAnswer = () => {
    props._onViewStudentAnswer();
    
  }

  return (
    <div className="formsub-card" onClick={_onViewStudentAnswer} >
      <img src={applicantInfo.studentInfo.studentAvatar} alt="Loading..." className="formsub-avatar" />
      <div className="formsub-textcontainer">
        <div className="formsub-text title">{applicantInfo.studentInfo.studentName}</div>
        <div className="formsub-text">{applicantInfo.studentInfo.studentEmail}</div>
      </div>
    </div>
  );
};

const FormSubmission = (props) => {
  if (props.userId === props.projectOwnerId){

    const _onViewStudentAnswer = (submission) => {
      props._onViewStudentAnswer(submission)
    }

    return (
      <div className="formsub-container">
        <div className="formsub-text title big">Form Submissions</div>
        {props.isFetchedRecruitInfo && props.formSubmissions.map((formSubmission) => (
          <SubmissionCard
            applicantInfo={formSubmission}
            // onModalOpening={() => props.onModalOpening(formSubmissionData)}
            _onViewStudentAnswer={() => _onViewStudentAnswer(formSubmission)}
          />
        ))}
      </div>
    );
  }
  return <div style={{ display: "none" }}></div>;
};

export default FormSubmission;


