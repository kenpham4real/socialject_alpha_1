import React from "react";
import NavigationBar from "../../../components/app/NavigationBar.js";
import "./styles/ProjectInfoPage.css";
import ListedItems from "../../../components/app/ProjectInfoPage/ListedItems.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity.js";

const ProjectInfoPage = (props) => {
  return (
    <div class="projectInfoPage">
      <div>
        <NavigationBar />
      </div>

      <div class="generalInfoBoard">
        {/* The 'generalInfo' division is divided into 2 smaller division: 'generInfoComponents' and 'projectPicture' */}

        {/*'generalInfo' division*/}
        <div class="generalInfoComponents">
          <div class="tags">
            <a>Explore</a> <span>  </span>
            <a>Language</a> <span>  </span>
            <a class="currentTags">Tags</a> <span> </span>
          </div>
          <div class="projectName">Project's Name</div>
          <div class="location">Location</div>
          <div class="organizationNameandPicture">
            <img
              class="projectLogo"
              src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
              alt="orgLogo"
            />
            <div class="organizationName">Organization's Name </div>
            <button>Follow</button>
          </div>
          <div class="applyButton">
            <div class="applyNow">Apply Now</div>
            <div class="dueDay">Ends Juls 29</div>
          </div>
          <div class="joinedUsers">
            <span>100, 000</span> has joined
          </div>
        </div>

        {/*'projectPicture' division*/}
        <div>
          <img
            class="projectPicture"
            src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/10514712_1441620719449458_2919014509954445678_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=S_vl00GT_9sAX9yvuwq&_nc_ht=scontent-xsp1-1.xx&oh=a0b2a92958685faec2cc28775a437903&oe=5F69B421"
            alt="projectPicture"
          />
        </div>
      </div>

      <div class="content">
        <div class="leftColumn">
          <div class="heldByContainer">
            <h1 class="projectHeadings"> Held by</h1>
            <img
              class="projectLogo"
              src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
              alt="orgLogo"
            />
            <span>
              <text class="organizationName">Organization's Name</text>
              <p>
                This paragraph will be the section “About” in the Profile of the
                Organization.
              </p>
            </span>
            <div class="viewAllButton">View all</div>
          </div>
          <div class="benefitContainer">
            <h1 class="projectHeadings">Benefit</h1>
            <ListedItems />
            <ListedItems />
            <ListedItems />
          </div>
          <div class="requirementsContaner">
            <h1 class="projectHeadings">Requirements</h1>
            <ListedItems />
            <ListedItems />
            <ListedItems />
          </div>
          <div class="teamContainer">
            <h1 class="projectHeadings">Team</h1>
            <ListedItems />
            <ListedItems />
            <ListedItems />
          </div>
        </div>
        <div class="rightColumn">
          <div class="aboutContainer">
            <h1 class="projectHeadings">About</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              auctor, diam in interdum semper, lacus odio tincidunt velit, id
              luctus mauris lorem tincidunt nisl. Donec auctor, diam in interdum
              semper, lacus odio tincidunt velit, id luctus mauris lorem
              tincidunt nisl.
            </div>
            <div class="viewAllButton">View all</div>
          </div>
          <div class="progressContainer">
            <h1 class="projectHeadings">Progress</h1>
            <ProjectActivity />
            <ProjectActivity />
            <ProjectActivity />
            <div class="viewAllButton">View all</div>
          </div>
        </div>
      </div>
      <div class="footer">footer</div>
    </div>
  );
};

export default ProjectInfoPage;
