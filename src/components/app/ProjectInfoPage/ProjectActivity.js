import React from "react";
import "../../styles/ProjectInfoPage/ProjectActivity.css";

// This component is used for both Project Timeline and Activity timeline
// Be careful to use to avoid confusion


// Testing static data
// This data will be fetched from the database when the PPU enters the profile page

const ProjectActivity = props => {
    return (
      <div className="projectActivity">
        <div className="activityPicture">{props.project_activity_avatar}</div>
        <div className="activityInfo">
          <div className="activityName">{props.project_activity_name}</div>
          <div className="activityTime">{props.project_activity_date}</div>
          <div className="activityLocation">{props.project_activity_location}</div>
          <p className="activityDescription">{props.project_activity_description}</p>
        </div>
      </div>
    );
}

export default ProjectActivity;
