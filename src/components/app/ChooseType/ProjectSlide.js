import React from "react";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectXSlide(props) {
  const Data = props.data;
  const history = props.history;
  console.log("Data in slide is: ", Data);
  function handleClick(id) {
    console.log("Button clicked.");
    history.push({ pathname: "/projectInfo", projectId: id });
  }
  return (
    <div>
      <div class="project-container">
        {/*Render the list*/}
        {Data.map((Data) => (
          <div class="project-card">
            <button
              className="project-container-button"
              onClick={() => handleClick(Data.projectId)}
            >
              <img class="project-image" src={Data.projectAvatar} />
              <img class="project-icon" src={Data.organizationAvatar} />
              <div class="project-text-container">
                <p class="project-text title"> {Data.projectName} </p>
                <p class="project-text">
                  Organization: {Data.organizationName}
                </p>
                <p class="project-text">Deadline: {Data.deadline}</p>
                <p class="project-text">{Data.description}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectXSlide;
