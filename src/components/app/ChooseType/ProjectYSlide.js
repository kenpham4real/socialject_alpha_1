import React from "react";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectCard(props) {
  const Data = props.Data;
  const title = props.title;
  return (
    <div>
      <div className="project-title">{title}</div>
      <div className="project-container">
        {/*Render the list*/}
        {Data.map((Data) => (
          <div className="project-card">
            <img alt="" className="project-image" src={Data.url} />
            <img alt="" className="icon project" src={Data.url} />
            <div className="project-text-container">
              <p className="project-text title"> {Data.name} </p>
              <p className="project-text">Organization</p>
              <p className="project-text">Deadline: 6/9/1969</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
