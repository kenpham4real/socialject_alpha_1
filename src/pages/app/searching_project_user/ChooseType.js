/*
*Contributor: Long 19th August 2020
*Component:
    In use:
    *Main: ChooseType (the page)
    *Navigation Bar: Header, display user menu and socialject menu
    *CopyrightBar: Footer, display text, content is copyright
    *SloganPanel: a horizontal panel with background image, displaying texts
    *ProjectXSlide: slider over the X axis, containing project cards
    Not in use:
    *Filter bar: horizontal panel, containing 3 button to filter
    *IconButton: 32x32 container for image, used for the filter
  *Data needed: (currently provided in this file already)
    *projectData: an array of object, each is:
      {
      id: "text",
      topic: "text",
      name: "text",
      url: text-link to an image,
      }
*/

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/ChooseTypeStyle.css";
import { Link } from "react-router-dom";
//General
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import IconButton from "../../../components/app/IconButton.js";
//Specific
import SloganPanel from "../../../components/app/ChooseType/SloganPanel.js";
import ProjectXSlide from "../../../components/app/ChooseType/ProjectXSlide.js";

//Data
import * as landingAction from "../../../store/actions/searching-project-user/landing/landingAction";

//Main function
const ChooseType = (props) => {
  //Declare hooks as variables to be more flexible.
  const dispatch = useDispatch();
  const callback = useCallback;
  //Select data from the global state.
  let data = [];
  const selectData = useSelector((state) => state.landingReducer.projectData);
  if (selectData != undefined) data = selectData;
  //Use 2 hooks useEffect and useCallback to prevent re-render, but it still re-render anyway.
  const fetchCallback = landingAction.FetchCalling(
    landingAction.FetchLanding,
    selectData,
    dispatch,
    callback
  );
  useEffect(() => {
    fetchCallback();
  }, [dispatch]);

  //For testing purpose.
  console.log("Selected Data:", selectData);

  return (
    <div className="chooseTypePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Slogan Panel*/}
      <SloganPanel background={imageURL}></SloganPanel>

      {/*Filter (NA now)*/}

      {/*Projects*/}

      <ProjectSlide data={data} history={props.history}></ProjectSlide>

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
