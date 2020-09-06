import React from "react";
import "./styles/ChooseTypeStyle.css";
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import SloganPanel from "../../../components/app/ChooseType/SloganPanel.js";
import ProjectSlide from "../../../components/app/ChooseType/ProjectSlide.js";

  /*
const langData = [
  { name: "Engrisk" },
  { name: "Vietnamese" },
  { name: "Spanish" },
];
*/
const imageURL =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11a82051-faf5-408c-91e6-0f6a31cad763/ddu9pqh-cca306ee-b699-44c6-b4ef-d089ca6e3a24.jpg/v1/fill/w_1920,h_1201,q_75,strp/witch_with_eyes_of_emerald_by_luuhienlong201_ddu9pqh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTFhODIwNTEtZmFmNS00MDhjLTkxZTYtMGY2YTMxY2FkNzYzXC9kZHU5cHFoLWNjYTMwNmVlLWI2OTktNDRjNi1iNGVmLWQwODljYTZlM2EyNC5qcGciLCJoZWlnaHQiOiI8PTEyMDEiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xMWE4MjA1MS1mYWY1LTQwOGMtOTFlNi0wZjZhMzFjYWQ3NjNcL2x1dWhpZW5sb25nMjAxLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.H9m-NjiXbxdxAeMEe2Ru8aksBpeHuEE6FEKrQML6lCw";

const progressData = [
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
    <div className="chooseTypePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Slogan Panel*/}
      <SloganPanel></SloganPanel>

      {/*
      <div className="card-panel filter">
        <a className="filter-title">Filter by: </a>
        
        {filterData.map((filterData) => (
          <div className="button filter">
            <a>{filterData.name}</a>
            <IconButton source="https://static.thenounproject.com/png/551749-200.png"></IconButton>
          </div>
        ))}
      </div>
      */}

      {/*Projects*/}
      <ProjectSlide Data={progressData} title="Charity"></ProjectSlide>
      <ProjectSlide Data={progressData} title="Education"></ProjectSlide>
      <ProjectSlide Data={progressData} title="Drawing"></ProjectSlide>

      <CopyrightBar></CopyrightBar>
      {/* End of code */}
    </div>
  );
};

export default ChooseType;
