import React from "react";

import "../../styles/ProjectInfoPage/FormSubmission.css";

const SubmissionCard = (props) => {
  const applicantInfo = props.applicantInfo;

  console.log("applicantInfo", applicantInfo);

  return (
    <div
      className="formsub-card"
      onClick={() => props._onViewStudentAnswer(props.applicantInfo)}
    >
      <img
        src={applicantInfo.studentInfo.studentAvatar}
        alt="Loading..."
        className="formsub-avatar"
      />
      <div className="formsub-textcontainer">
        <div className="formsub-text title">
          {applicantInfo.studentInfo.studentName}
        </div>
        <div className="formsub-text">
          {applicantInfo.studentInfo.studentEmail}
        </div>
      </div>
    </div>
  );
};

const FormSubmission = (props) => {
<<<<<<< HEAD
  console.log('props in form submission', props)
  console.log('props.userId: ', props.userId, "vs props.projectOwnerId", props.projectOwnerId)
  if (props.userId === props.projectOwnerId){

=======
  console.log("props in form submission", props);
  console.log(
    "props.userId: ",
    props.userId,
    "vs props.projectOwnerId",
    props.projectOwnerId
  );
  if (props.userId === props.projectOwnerId) {
>>>>>>> bd0adc953ee8320b33cfd896458091d4131c4f35
    return (
      <div className="formsub-container">
        <div className="formsub-text title big"> Form Submissions</div>
        {props.isFetchedRecruitInfo &&
          props.formSubmissions.map((formSubmission) => (
            <SubmissionCard
              applicantInfo={formSubmission}
              // onModalOpening={() => props.onModalOpening(formSubmissionData)}
            />
          ))}
      </div>
    );
  }
  return <div style={{ display: "none" }}></div>;
};

export default FormSubmission;
