import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectXSlide(props) {
  const Data = props.Data;
  const title = props.title;
  return (
    <div>
      <div class="project-title">{title}</div>
      <div class="project-container">
        {/*Render the list*/}
        {Data.map((Data) => (
          <div class="project-card">
            <Link className="project-link" to="/projectInfo">
              <img class="project-image" src={Data.url} />
              <img class="project-icon" src={Data.url} />
              <div class="project-text-container">
                <p class="project-text title"> {Data.name} </p>
                <p class="project-text">Organization</p>
                <p class="project-text">Deadline: 6/9/1969</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectXSlide;
