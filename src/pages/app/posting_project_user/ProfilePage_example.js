// /* Contributor: Long 15th September 2020
// // Component:
// //    In use:
// //    Main: Profile Page (the page)
// //    *Navigation Bar: Header, display user menu and socialject menu
// //    *CopyrightBar: Footer, display text, content is copyright
// //    *ProjectActivity
// //
// // Functionality:
// //    Fetch the data from Cloud Firestore
// //    Dispatch the data fetched into global store
// //    Select data from the global store and render it
// //    Link to next pages:
// //        Create Modal
// //        Project Info

// */

// //Initial stuff
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// // Styles
// import "./styles/ProfilePage.css";

// // Components
// import NavigationBar from "../../../components/app/NavigationBar.js";
// import CopyrightBar from "../../../components/app/CopyrightBar.js";
// import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";

// //Firebase stuff
// import { firebase_db } from "../../../firebase-config";
// import {
//   testing_project_id,
//   testing_organization_id,
// } from "../../../constants/testing-keys";

// const imageURL =
//   "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

// function OrgName(props) {
//   return (
//     <div className="profile-name-container">
//       <img className="profile-avatar" src={imageURL} />
//       <a className="profile-block-container-small">
//         <div className="profile--title">{props.data.orgName}</div>
//         <div style={{ color: "gray" }}>
//           {props.data.location} / {props.data.university} /{" "}
//           {props.data.category}
//         </div>
//         <div>{props.data.description}</div>
//         <Link className="profile-link" to="/createPostModal">
//           <button className="profile-button">Add a project</button>
//         </Link>
//       </a>
//       <a className="profile-block-container-smaller">
//         <div>Email: {props.data.email}</div>
//         <div>Phone: {props.data.phoneNumber}</div>
//         <div>Facebook: {props.data.facebook}</div>
//       </a>
//     </div>
//   );
// }

// function OrgVision(props) {
//   return (
//     <div className="profile-block-container">
//       <div className="profile--title">{props.vision}</div>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// function OrgHistory(props) {
//   // This is a testing array of KEYS
//   // testing_project_id is a testing key which is imported from constants folder
//   const project_activity_ids = ["id1", "id2", "id3", "id4", "id5", "id6"];

//   // Render the list of projects, each of which MUST have a UNIQUE KEY
//   // The keys are extracted from project_activity_ids
//   /**
//    * @summary Render the list of projects, each of which MUST have a UNIQUE KEY. The keys are extracted from project_activity_ids
//    * @param {string[]} project_id
//    * @returns JSX Components
//    * @author Ken Pham, Long Avenger
//    */
//   const project_activity_item = project_activity_ids.map(
//     (project_activity_id) => {
//       return (
//         <li>
//           <ProjectActivity
//             project_key={project_activity_id}
//             project_activity_avatar={null}
//             project_activity_name={props.name}
//             project_activity_date={props.deadline}
//             project_activity_location={props.location}
//             project_activity_description={props.description}
//           />
//         </li>
//       );
//     }
//   );

//   return (
//     <div className="profile-block-container">
//       <div className="profile--title">Projects</div>
//       <div>
//         <ul className="project-activity-list">
//           <a
//             className="project-activity-list--component"
//             //href="/projectInfo/project_1"
//             //onClick={() => props.history.push("/projectInfo/project_1")}
//           >
//             {project_activity_item}
//           </a>
//         </ul>
//       </div>
//     </div>
//   );
// }

// //The code to fetch data lies below
// const ProfilePage_example = (props) => {
//   //Initialise the data container variable
//   let projectData = {
//     deadline: null,
//     description: null,
//     orgAvatar: null,
//     orgId: null,
//     orgName: null,
//     projectAvatar: null,
//     projectId: null,
//     projectName: null,
//   };
//   let profileData = {
//     orgId: null,
//     orgName: null,
//     location: null,
//     university: null,
//     category: null,
//     description: null,
//     email: null,
//     facebook: null,
//     phoneNumber: null,
//     vision: null,
//   };

//   //Declare useDispatch hook to use;
//   const dispatch = useDispatch();

//   //Load data from global store into variables variable using useSelector() hook
//   const selectedProject = useSelector(
//     (state) => state.profileReducer.projectData.props
//   );
//   const selectedProfile = useSelector(
//     (state) => state.profileReducer.profileData.props
//   );

//   //Update the data from the 'selectedData' variable into the local variable
//   //If the data is equal to undefined (not fetched succesfully) then execute the FetchData() function.
//   if (selectedProject != undefined) {
//     projectData = selectedProject;
//   } else FetchData("public-projects", `${testing_project_id}`);
//   console.log("Profile data saved succesfully:", profileData.orgName); //For testing purpose
//   //Similar for Profile Data
//   if (selectedProfile != undefined) {
//     profileData = selectedProfile;
//   } else FetchData("organization", `${testing_organization_id}`);
//   console.log("Profile data saved succesfully:", profileData.orgName); //For testing purpose

//   //Function to fetch data and dispatch it into the global store.
//   //The function need to use async and await to be able to fetch.
//   async function FetchData(collection, fetchId) {
//     let fetchedData; //This will later be used to fetch data.
//     console.log("Starting to fetch data: "); //For testing purpose
//     console.log("Params: ", collection, " + ", fetchId); //For testing purpose

//     try {
//       // Retrieve the data from Firestore Cloud database. Need to be 'await'
//       await firebase_db
//         .collection(collection) //access public projects
//         .doc(fetchId) //access the docs with this id
//         .get() //not sure what this do
//         .then((documentSnapshot) => (fetchedData = documentSnapshot.data())); //fetch data into a variable.
//       console.log("Profile Data fetched succesfully", fetchedData); //For testing purpose
//       const saveData = (props) => {
//         //Dispatch this to the global store using "profileReducer"
//         dispatch({
//           type: collection,
//           payload: { props }, //data need to pass
//         });
//       };
//       saveData(fetchedData); //now the data is dispatched into global store.
//     } catch (error) {
//       console.log("error", error);
//     }
//   }

//   //The data now is passed into this profile Page UI
//   return (
//     <div className="profilePage">
//       {/*Navigation Bar*/}
//       <NavigationBar> </NavigationBar>

//       {/*Org. Name Panel*/}
//       <OrgName data={profileData}></OrgName>

//       {/*Org. Vision*/}
//       <OrgVision
//         vision={profileData.vision}
//         description={profileData.description}
//       ></OrgVision>

//       {/*Org. History*/}
//       <OrgHistory
//         name={projectData.projectName}
//         id={projectData.projectId}
//         deadline={projectData.deadline}
//         description={projectData.description}
//       ></OrgHistory>

//       {/*Copyright*/}
//       <CopyrightBar></CopyrightBar>

//       {/* End of code */}
//     </div>
//   );
// };

// export default ProfilePage_example;
