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

import React from "react";
import "./styles/ChooseTypeStyle.css";
//General
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import IconButton from "../../../components/app/IconButton.js";
//Specific
import SloganPanel from "../../../components/app/ChooseType/SloganPanel.js";
import ProjectXSlide from "../../../components/app/ChooseType/ProjectXSlide.js";

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

const projectData = [
  {
    id: "1",
    topic: "Charity",
    name: "Project name1",
    url: imageURL,
  },
  {
    id: "2",
    topic: "Charity",
    name: "Project name2",
    url: imageURL,
  },
  {
    id: "3",
    topic: "Charity",
    name: "Project name3",
    url: imageURL,
  },
  {
    id: "4",
    topic: "Drawing",
    name: "Project name4",
    url: imageURL,
  },
  {
    id: "5",
    topic: "Drawing",
    name: "Project name5",
    url: imageURL,
  },
  {
    id: "6",
    topic: "Charity",
    name: "Project name6",
    url: imageURL,
  },
  {
    id: "7",
    topic: "Drawing",
    name: "Project name7",
    url: imageURL,
  },
  {
    id: "8",
    topic: "Education",
    name: "Project name8",
    url: imageURL,
  },
];

const ChooseType = (props) => {
  return (
    <div class="chooseTypePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Slogan Panel*/}
      <SloganPanel></SloganPanel>

      {/* <FilterBar></FilterBar> */}

      {/*Projects*/}
      <ProjectXSlide Data={projectData} title="Charity"></ProjectXSlide>

      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ChooseType;

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
