import React from "react";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectSlide(props) {
  //get needed data from props
  const Data = props.data;
  const history = props.history;
  console.log("Data in slide is: ", Data);
  function handleClick(id) {
    console.log("Button clicked.");
    const userId = JSON.parse(localStorage.getItem("userData"));
    if (userId == null) {
      //if there the user didn't login yet, then push them into /choosingUser
      history.push({ pathname: "/choosingUser" });
      sessionStorage.setItem("projectId", id);
    } //if they logged in, then flow is normal
    else history.push({ pathname: "/projectInfo", projectId: id });
  }
  return (
    <div>
      <div class="project-container">
        {/*Render the list*/}
        {Data.map((Data) => (
          <div className="project-card-container">
            <div
              className="project-card"
              onClick={() => handleClick(Data.projectId)}
            >
              <img className="project-image" src={Data.projectAvatar} />
              <img className="project-icon" src={Data.organizationAvatar} />
              <div className="project-text-container">
                <p className="project-text title"> {Data.projectName} </p>
                <p className="project-text ">
                  Organization: {Data.organizationName}
                </p>
                <p className="project-text ">Deadline: {Data.deadline}</p>
                <p className="project-text description">{Data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSlide;
