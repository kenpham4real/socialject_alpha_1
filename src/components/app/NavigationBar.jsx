import React, { Component } from "react";
import "../styles/NavigationBar.css";
const imageURL =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11a82051-faf5-408c-91e6-0f6a31cad763/ddu9pqh-cca306ee-b699-44c6-b4ef-d089ca6e3a24.jpg/v1/fill/w_1920,h_1201,q_75,strp/witch_with_eyes_of_emerald_by_luuhienlong201_ddu9pqh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTFhODIwNTEtZmFmNS00MDhjLTkxZTYtMGY2YTMxY2FkNzYzXC9kZHU5cHFoLWNjYTMwNmVlLWI2OTktNDRjNi1iNGVmLWQwODljYTZlM2EyNC5qcGciLCJoZWlnaHQiOiI8PTEyMDEiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xMWE4MjA1MS1mYWY1LTQwOGMtOTFlNi0wZjZhMzFjYWQ3NjNcL2x1dWhpZW5sb25nMjAxLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.H9m-NjiXbxdxAeMEe2Ru8aksBpeHuEE6FEKrQML6lCw";
class NavigationBar extends Component {
  render() {
    return (
      <div class="navigationBar">
        {/*Menu Icon*/}
        <img
          class="icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        {/*Title*/}
        <a class="banner-title"> SOCIALJECT</a>
        {/*Search Bar*/}
        <a class="banner-search-bar">
          <input
            class="search-input-banner"
            type="text"
            placeholder="Search something..."
          ></input>
          <img
            class="icon"
            src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
          />
        </a>
        {/*Top right corner*/}
        <a class="banner-user-bar">
          <img class="icon avatar" src={imageURL} />
          <a class="banner-title">max11letter</a>
          <img
            class="icon"
            src="https://cdn.iconscout.com/icon/free/png-512/down-arrow-16-460295.png"
          />
        </a>
      </div>
    );
  }
}

export default NavigationBar;
