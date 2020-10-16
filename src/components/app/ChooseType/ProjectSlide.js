import React from "react";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectSlide(props) {
  //get needed data from props
  const Data = props.data;
  const history = props.history;

  console.log('data', Data)
  function handleClick(projectId, projectOrgId) {

    console.log('projectOrgId', projectOrgId)

    const user = JSON.parse(localStorage.getItem("userData"));
    if (user == null) {
      //if there the user didn't login yet, then push them into /choosingUser
      history.push({ pathname: "/choosingUser" });
      sessionStorage.setItem("projectId", projectId);
    } //if they logged in, then flow is normal
    else
      history.push({
        pathname: "/projectInfo",
        projectId: projectId,
        orgId: user.userId,
        projectOrgId: projectOrgId
      });
  }
  return (
    <div className="project-container">
      {/*Render the list*/}
      {Data.map((Data) => (
        <div className="project-card-container">
          <div
            className="project-card"
            onClick={() => handleClick(Data.projectId, Data.orgId)}
          >
            <img alt="" className="project-image" src={Data.projectAvatar} />
            <img alt="" className="project-icon" src={Data.orgAvatar} />
            <div className="project-text-container">
              <p className="project-text title"> {Data.projectName} </p>
              <p className="project-text orgName">by {Data.orgName}</p>
              <p className="project-text deadline">Deadline: {Data.deadline}</p>
              {/* <p class="project-text description">{Data.description}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectSlide;
