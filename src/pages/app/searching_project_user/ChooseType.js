import React from "react";
import "./styles/ChooseTypeStyle.css";

const langData = [
  { name: "Engrisk" },
  { name: "Vietnamese" },
  { name: "Spanish" },
];

const progressData = [
  {
    id: "1",
    name: "name1",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
  {
    id: "2",
    name: "name2",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
  {
    id: "3",
    name: "name3",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
  {
    id: "4",
    name: "name4",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
  {
    id: "5",
    name: "name5",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
  {
    id: "6",
    name: "name6",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
  {
    id: "7",
    name: "name7",
    url: "https://i.kym-cdn.com/photos/images/facebook/001/602/751/099.png",
  },
];

const ChooseType = (props) => {
  return (
    <div class="page">
      {/*Top*/}
      <div class="banner">
        {/*Menu Icon*/}
        <img
          class="icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        {/*Title*/}
        <a class="banner-title">SOCIAL JECT</a>
        {/*Search Bar*/}
        <a class="banner-search-bar">
          <input
            class="search-input"
            type="text"
            placeholder="Search somthing..."
          ></input>
          <img
            class="icon"
            src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
          />
        </a>
        {/*Top right corner*/}
        <a class="banner-user-bar">
          <a class="banner-title">USER</a>
          <img
            class="icon"
            src="https://cdn.iconscout.com/icon/free/png-512/down-arrow-16-460295.png"
          />
        </a>
      </div>

      {/*Language*/}
      <div class="card-panel language">
        <div class="language-title">Language</div>
        {/*Criteria*/}
        {langData.map((langData) => (
          <p class="button">
            <a> {langData.name}</a>
          </p>
        ))}
      </div>

      {/*Filter*/}
      <div class="filter-container">
        <a class="filter-title">Filter by: </a>
        {/*Criteria*/}
        <div class="button">
          <a> Progress </a>
        </div>
        <div class="button">
          <a> Places </a>
        </div>
        <div class="button">
          <a> Popularities </a>
        </div>
      </div>

      {/*According to Progress*/}
      <div class="project-title">Places</div>
      <div class="project-container">
        {/*Render the list*/}
        {progressData.map((progressData) => (
          <div class="project-card">
            <img class="project-image" src={progressData.url} />
            <a class="button project"> {progressData.name} </a>
            <a>Description</a>
          </div>
        ))}
      </div>
      {/*According to Places*/}
      <div class="project-title">Progress</div>
      <div class="project-container">
        {/*Render the list*/}
        {progressData.map((progressData) => (
          <div class="project-card">
            <img class="project-image" src={progressData.url} />
            <a class="button project"> {progressData.name} </a>
            <a>Description</a>
          </div>
        ))}
      </div>
      {/*According to Popularity*/}
      <div class="project-title">Popularity</div>
      <div class="project-container">
        {/*Render the list*/}
        {progressData.map((progressData) => (
          <div class="project-card">
            <img class="project-image" src={progressData.url} />
            <a class="button project"> {progressData.name} </a>
            <a>Description</a>
          </div>
        ))}
      </div>
      {/* End of code */}
    </div>
  );
};

export default ChooseType;
