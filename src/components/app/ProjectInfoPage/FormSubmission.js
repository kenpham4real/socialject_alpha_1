import React from "react";

import "../../styles/ProjectInfoPage/FormSubmission.css";

const SubmissionCard = (props) => {
  const data = props.data;
  return (
    <div className="formsub-card">
      <img src={data.avatar} alt="Loading..." className="formsub-avatar" />
      <div className="formsub-textcontainer">
        <div className="formsub-text title">{data.name}</div>
        <div className="formsub-text">{data.email}</div>
      </div>
    </div>
  );
};

const FormSubmission = (props) => {
  //These data are just example.
  const imageURL =
    "https://i.pinimg.com/originals/39/46/55/39465510117c36c2023b2d72cdcf05b3.jpg";
  const data = [
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
  const userType = props.userType;
  if (userType !== "STUDENT")
    return (
      <div className="formsub-container">
        <div className="formsub-text title big"> Form Submissions</div>
        {data.map((element) => (
          <SubmissionCard data={element} />
        ))}
      </div>
    );
  else return <div style={{ display: "none" }}></div>;
};

export default FormSubmission;
