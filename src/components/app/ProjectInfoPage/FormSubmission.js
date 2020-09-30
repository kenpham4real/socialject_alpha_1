import React from "react";

import "../../styles/ProjectInfoPage/FormSubmission.css";

const SubmissionCard = (props) => {
  const cardData = props.cardData;
  return (
    <div className="formsub-card">
      <img src={cardData.avatar} alt="Loading..." className="formsub-avatar" />
      <div className="formsub-textcontainer">
        <div className="formsub-text title">{cardData.name}</div>
        <div className="formsub-text">{cardData.email}</div>
      </div>
    </div>
  );
};

const FormSubmission = (props) => {
  //These data are just example.
  const imageURL =
    "https://i.pinimg.com/originals/39/46/55/39465510117c36c2023b2d72cdcf05b3.jpg";
  const SubmissionData = [
    { name: "Ken Pham", email: "kanekiken@gmail.com", avatar: imageURL },
    {
      name: "Long Wibu",
      email: "longthewibulord@gmail.com",
      avatar: imageURL,
    },
    {
      name: "Long Artist",
      email: "chillisaucery@gmail.com",
      avatar: imageURL,
    },
    {
      name: "Dat Uchiha",
      email: "uchihasasudat@gmail.com",
      avatar: imageURL,
    },
    { name: "Tien kun", email: "tranngoctien@gmail.com", avatar: imageURL },
    { name: "Imposter", email: "amongus@gmail.com", avatar: imageURL },
  ];
  if (props.userId == props.projectOwnerId)
    return (
      <div className="formsub-container">
        <div className="formsub-text title big"> Form Submissions</div>
        {SubmissionData.map((element) => (
          <SubmissionCard cardData={element} />
        ))}
      </div>
    );
  return <div style={{ display: "none" }}></div>;
};

export default FormSubmission;
