/*
*Contributor: Long 19th August 2020
*Component:
    In use:
    *Main: ChooseType (the page)
    *Navigation Bar: Header, display user menu and socialject menu
    *CopyrightBar: Footer, display text, content is copyright
    *ProjectActivity
*Data needed: (currently provided in this file already)
    texts
*/

import React from "react";
import "./styles/ProfilePage.css";
//General
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

const loremText =
  "Khi Beyond Birthday lấy mạng nạn nhân thứ ba của mình, hắn định làm một thử nghiệm—để xem có cách nào làm một con người chết vì xuất huyết trong mà không cần phải hủy hoại một bộ phận cơ thể nào hay không. Cụ thể, hắn cho nạn nhân chìm vào trạng thái vô thức bằng thuốc mê; ...";

function OrgName(props) {
  return (
    <div class="profile-name-container">
      <img class="profile-avatar" src={imageURL} />
      <a class="profile-block-container-small">
        <div class="profile--title">Organization's Name</div>
        <div style={{ color: "gray" }}>Location Category</div>
        <div>{loremText}</div>
        <div class="profile-button">Add a project</div>
      </a>
      <a class="profile-block-container-smaller">
        <div>Email: chillisaucery@gmail.com</div>
        <div>Phone: 0912345678</div>
      </a>
    </div>
  );
}

function OrgVision(props) {
  return (
    <div class="profile-block-container">
      <div class="profile--title">Our vision</div>
      <p>{loremText}</p>
    </div>
  );
}

function OrgHistory(props) {
  return (
    <div class="profile-block-container">
      <div class="profile--title">Projects</div>
      <ProjectActivity></ProjectActivity>
      <ProjectActivity></ProjectActivity>
      <ProjectActivity></ProjectActivity>
    </div>
  );
}

const ProfilePage = (props) => {
  return (
    <div class="profilePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Org. Name Panel*/}
      <OrgName></OrgName>

      {/*Org. Vision*/}
      <OrgVision></OrgVision>

      {/*Org. History*/}
      <OrgHistory></OrgHistory>
      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ProfilePage;
