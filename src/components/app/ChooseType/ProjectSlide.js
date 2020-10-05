import React from "react";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectSlide(props) {
  //get needed data from props
  const Data = props.data;
  const history = props.history;
  console.log("Data in slide is: ", Data);
  function handleClick(id) {
    console.log("Button clicked.");
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user == null) {
      //if there the user didn't login yet, then push them into /choosingUser
      history.push({ pathname: "/choosingUser" });
      sessionStorage.setItem("projectId", id);
    } //if they logged in, then flow is normal
    else history.push({ pathname: "/projectInfo", projectId: id, orgId: user.userId });
  }
  return (
    <div>
      <div class="project-container">
        {/*Render the list*/}
        {Data.map((Data) => (
          <div class="project-card" onClick={() => handleClick(Data.projectId)}>
            <img class="project-image" src={Data.projectAvatar} />
            <img class="project-icon" src={Data.orgAvatar} />
            <div class="project-text-container">
              <p class="project-text title"> {Data.projectName} </p>
              <p class="project-text orgName">by {Data.orgName}</p>
              <p class="project-text deadline">Deadline: {Data.deadline}</p>
              {/* <p class="project-text description">{Data.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSlide;
