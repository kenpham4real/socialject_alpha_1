import React from "react";

import "../../styles/ProjectInfoPage/IndividualForm.css";

const individualData = [
  { id: "1", question: "Your favorite pokemon?" },
  { id: "2", question: "Your favorite 6 digit code?" },
  {
    id: "3",
    question: "Your favorite type of girl?",
  },
];

const AnswerCard = (props) => {
  const data = props.data;
  return (
    <div className="individual-card">
      <div className="individual-textcontainer">
        <div className="individual-text title">
          {data.id}. {data.question}
        </div>
        <div className="individual-textcontainer answer">
          <div className="individual-text">{data.answer}</div>
        </div>
      </div>
    </div>
  );
};

const IndividualForm = (props) => {
  //These data are just example.
  const formSubmissionData = props.data;
  console.log("Form Submission Data for Individual Form", formSubmissionData);
  return (
    <div className="individual-container">
      <div className="individual-card">
        <img
          src={formSubmissionData[0].avatar}
          alt="Loading..."
          className="individual-avatar"
        />
        <div className="individual-textcontainer">
          <div className="individual-text title">Name: Long wibu</div>
          <div className="individual-text">email: hahahhahha@gmail.com</div>
        </div>
      </div>
      {formSubmissionData.map((element) => (
        <AnswerCard data={element} />
      ))}
    </div>
  );
};

export default IndividualForm;
