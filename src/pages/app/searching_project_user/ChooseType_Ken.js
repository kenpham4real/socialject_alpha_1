//Fixer

/*
*Contributor: Long 22nd September 2020
*Component:
    In use:
    *Main, Navigation Bar, SloganPanel, ProjectXSlide, CopyrightBar, 
    Not in use:
    *Filter bar: horizontal panel, containing 3 button to filter
    *IconButton: 32x32 container for image, used for the filter
*Function:
  Fetch data: import from "landingAction"
    FetchCalling: to call the fetching action
    FetchLanding: to fetch the data from Firebase into the landing page 
  Hooks: 
    useCallback, useEffect: To avoid re-fetching, but it still re-fetch anyway.
    useDispatch: to pass into the action so that the action can dispatch data onto global store
    useSelector: select data from global store to use
*Data in this file: (currently provided in this file already)
  *data needed: 
    Concept: an array contain objects, each object is a project.
    Source: global store, and before that, Firebase Cloud Firestore
    Element: Project. Each project contain:
      deadline: string,
      description: string,
      orgId: string
      organizationAvatar: a link to an image. Still don't know why this isn't named "orgAvatar" for short
      organizationName: string. Again, this should have been "orgName"
      projectAvatar: a link to an image
      projectId: a string
      projectName: string
  *data to pass:
    projectId
      pass to /projectInfo
*/

import React, { /*useCallback,*/ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/ChooseTypeStyle.css";
//General
//import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
//import IconButton from "../../../components/app/IconButton.js";
//Specific
import SloganPanel from "../../../components/app/ChooseType/SloganPanel.js";
import ProjectSlide from "../../../components/app/ChooseType/ProjectSlide.js";

//Data
import * as landingAction from "../../../store/actions/searching-project-user/landing/landingAction";
//import * as autoLoginAction from "../../../store/actions/auth/autoLoginAction";
import NavigationBar from "../../../components/app/NavigationBar_Ken";

//import { ADMIN, STUDENT } from "../../../constants/user-types";

//Main function
const ChooseType = (props) => {
  //Declare hooks as variables to be more flexible.
  const dispatch = useDispatch();
  //const callback = useCallback;
  //Select data from the global state.
  const selectData = useSelector((state) => state.landingReducer.projectData);

  //Use 2 hooks useEffect and useCallback to prevent re-render, but it still re-render anyway.
  /**
   * @summary A callback to fetch projects, then an useEffect to call it.
   * @param (Function to fetch, current data, usedispatch, useCallback),
   *        then (the callback function, useDispatch)
   * @returns {void} (it pass the data into global store)
   * @author Long Wibu
   */
  /*const fetchCallback = landingAction.FetchCalling(
    landingAction.FetchLanding,
    selectData,
    dispatch,
    callback
  );*/
  useEffect(() => {
    landingAction.FetchLanding(dispatch);
  }, [dispatch]);

  //For testing purpose.
  console.log("Selected Data:", selectData);

  /*
  const _pathOfUser = (userData) => {
    return userData.userType === ADMIN ? "/profile" : null;
  };*/

  return (
    <div className="chooseTypePage">
      {/*Navigation Bar*/}
      <NavigationBar />

      {/*Slogan Panel*/}
      <SloganPanel background={imageURL}></SloganPanel>

      {/*Filter (NA now)*/}

      {/*Projects*/}

      <ProjectSlide data={selectData} history={props.history}></ProjectSlide>

      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ChooseType;

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

/*
const langData = [
  { name: "Engrisk" },
  { name: "Vietnamese" },
  { name: "Spanish" },
];

const filterData = [
  { name: "Location" },
  { name: "Progress" },
  { name: "Popularity" },
];

function FilterBar(props) {
  return (
    <div class="card-panel filter">
      <a class="filter-title">Filter by: </a>

      {filterData.map((filterData) => (
        <div class="button filter">
          <a>{filterData.name}</a>
          <IconButton source="https://static.thenounproject.com/png/551749-200.png"></IconButton>
        </div>
      ))}
    </div>
  );
}
*/
