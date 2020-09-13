import React from "react";
import { useDispatch } from "react-redux";
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
} from "history";
import "../../styles/ProjectInfoPage/ProjectActivity.css";

// This component is used for both Project Timeline and Activity timeline
// Be careful to use to avoid confusion

// Testing static data
// This data will be fetched from the database when the PPU enters the profile page

const ProjectActivity = (props) => {
  //Constant to navigate to the Project Info page
  const id = props.project_key;
  const dispatch = useDispatch();
  //UI rendering
  return (
    <div className="projectActivity">
      <div className="activityPicture">{props.project_activity_avatar}</div>
      <div> {props.project_key}</div>
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
      {/*Button to navigate*/}
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE_KEY",
            payload: { id },
          });
          //props.history.push("/projectInfo/project_1");
        }}
      >
        Read more
      </button>
    </div>
  );
};

export default ProjectActivity;
