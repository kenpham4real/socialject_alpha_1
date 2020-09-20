import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import "../../styles/ProjectInfoPage/ProjectActivity.css";

// This component is used for both Project Timeline and Activity timeline
// Be careful to use to avoid confusion

// Testing static data
// This data will be fetched from the database when the PPU enters the profile page

const ProjectActivity = (props) => {
  //Constant to navigate to the Project Info page
  const id = props.project_key;
  const dispatch = useDispatch();

  //console.log("This is the activity props: ", props);
  //The function to navigate. Will be put in the "onClick" event handler
  const Navigate = () => {
    dispatch({
      type: "CHANGE_KEY",
      payload: id,
    });
  };
  //UI rendering
  return (
    <div>
      <Link className="activityLink" to="/projectInfo">
        <button className="activityContainerButton" onClick={Navigate}>
          <div className="projectActivity">
            <div className="activityPicture">
              {props.project_activity_avatar}
            </div>
            <div className="activityInfo">
              <div className="activityName">{props.project_activity_name}</div>
              <div className="activityTime">{props.project_activity_date}</div>
              <div className="activityLocation">
                {props.project_activity_location}
              </div>
              <p className="activityDescription">
                {props.project_activity_description}
              </p>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ProjectActivity;
