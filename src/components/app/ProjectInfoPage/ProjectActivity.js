import React, { Component } from "react";
import "../../styles/ProjectInfoPage/ProjectActivity.css";
class ProjectActivity extends Component {
  render() {
    return (
      <div class="projectActivity">
        <div class="activityPicture"></div>
        <div class="activityInfo">
          <div class="activityName"> Name of activity</div>
          <div class="activityTime">Oct 13 - Prensent - 11 months</div>
          <div class="activityLocation">Location</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            auctor, diam in interdum semper, lacus odio tincidunt velit, id
            luctus mauris lorem tincidunt nisl....
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectActivity;
