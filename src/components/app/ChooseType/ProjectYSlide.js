import React, { Component } from "react";
import "../../styles/ChooseType/ProjectSlide.css";

function ProjectCard(props) {
  const Data = props.Data;
  const title = props.title;
  return (
    <div>
      <div class="project-title">{title}</div>
      <div class="project-slider-vertical">
        {/*Render the list*/}
        {Data.map((Data) => (
          <div class="project-card">
            <img class="project-image" src={Data.url} />
            <img class="icon project" src={Data.url} />
            <div class="project-text-container">
              <p class="project-text title"> {Data.name} </p>
              <p class="project-text">Organization</p>
              <p class="project-text">Deadline: 6/9/1969</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
