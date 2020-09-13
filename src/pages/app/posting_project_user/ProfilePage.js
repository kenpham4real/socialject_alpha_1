// Contributor: Long 19th August 2020
// Component:
//    In use:
//    Main: ChooseType (the page)
//    *Navigation Bar: Header, display user menu and socialject menu
//    *CopyrightBar: Footer, display text, content is copyright
//    *ProjectActivity
// *Data needed: (currently provided in this file already)
//    texts
//

//Initial stuff
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import "./styles/ProfilePage.css";

// Components
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";

//Firebase stuff
import { firebase_db } from "../../../firebase-config";
import { testing_project_id } from "../../../constants/testing-keys";

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

const loremText =
  "Khi Beyond Birthday lấy mạng nạn nhân thứ ba của mình, hắn định làm một thử nghiệm—để xem có cách nào làm một con người chết vì xuất huyết trong mà không cần phải hủy hoại một bộ phận cơ thể nào hay không. Cụ thể, hắn cho nạn nhân chìm vào trạng thái vô thức bằng thuốc mê; ...";

function OrgName(props) {
  //UI
  return (
    <div className="profile-name-container">
      <img className="profile-avatar" src={imageURL} />
      <a className="profile-block-container-small">
        <div className="profile--title">{props.name}</div>
        <div style={{ color: "gray" }}>
          {props.location} / {props.category}
        </div>
        <div>{props.description}</div>
        <button className="profile-button">Add a project</button>
      </a>
      <a className="profile-block-container-smaller">
        <div>Email: chillisaucery@gmail.com</div>
        <div>Phone: 0912345678</div>
      </a>
    </div>
  );
}

function OrgVision(props) {
  return (
    <div className="profile-block-container">
      <div className="profile--title">Our vision</div>
      <p>{loremText}</p>
    </div>
  );
}

function OrgHistory(props) {
  // This is a testing array of KEYS
  // testing_project_id is a testing key which is imported from constants folder
  const project_activity_ids = ["id1", "id2", "id3", "id4", "id5"];

  // Render the list of projects, each of which MUST have a UNIQUE KEY
  // The keys are extracted from project_activity_ids
  const project_activity_item = project_activity_ids.map(
    (project_activity_id) => {
      return (
        <li>
          <ProjectActivity
            project_key={project_activity_id}
            project_activity_avatar={null}
            project_activity_name="Name of project/activity"
            project_activity_date={new Date().toUTCString()}
            project_activity_location="Ho Chi Minh"
            project_activity_description={loremText}
          />
        </li>
      );
    }
  );

  return (
    <div className="profile-block-container">
      <div className="profile--title">Projects</div>
      <div>
        <ul className="project-activity-list">
          <a
            className="project-activity-list--component"
            //href="/projectInfo/project_1"
            //onClick={() => props.history.push("/projectInfo/project_1")}
          >
            {project_activity_item}
          </a>
        </ul>
      </div>
    </div>
  );
}

//The code to fetch data lies below
function ProfilePage(props) {
  //Fetchdata once user enter the page using useEffect(). The function to fetch is declared below.
  useEffect(() => FetchData(), []);
  //Declare useDispatch hook to use;
  const dispatch = useDispatch();
  //Load profileData from global store using useSelector() hook
  const profileData = useSelector(
    (state) => state.profileReducer.profileData.props
  );
  console.log("Profile data saved succesfully", profileData); //For testing purpose
  //Function to fetch data and dispatch it into the global store. I will move this is the profileAction.js later
  //The function need to use async and await to be able to fetch.
  async function FetchData() {
    let fetchedData; //This will later be used to fetch data.
    //try and catch (from the concept promises) is to catch error.
    try {
      // Retrieve the data from Firestore Cloud database. Need to be 'await'
      await firebase_db
        .collection("public-projects") //access public projects
        .doc(`${testing_project_id}`) //access the docs with this id
        .get() //not sure what this do
        .then((documentSnapshot) => (fetchedData = documentSnapshot.data())); //fetch data into a variable.
      console.log("Profile Data fetched succesfully", fetchedData); //For testing purpose
      const save = (props) => {
        //Dispatch this to the global store using "profileReducer"
        dispatch({
          type: "CHANGE_TEXT",
          payload: { props }, //data need to pass
        });
      };
      save(fetchedData); //now the data is dispatched
    } catch (error) {
      console.log("error", error);
    }
  }

  //The data will later be passed into this profile Page
  return (
    <div className="profilePage">
      {/*Navigation Bar*/}
      <NavigationBar> </NavigationBar>

      {/*Org. Name Panel*/}
      <OrgName
        name="Pokemon"
        location="Ho Chi Minh"
        category="Gaming"
        description={loremText}
      ></OrgName>

      {/*Org. Vision*/}
      <OrgVision></OrgVision>

      {/*Org. History*/}
      <OrgHistory></OrgHistory>
      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
}

export default ProfilePage;
