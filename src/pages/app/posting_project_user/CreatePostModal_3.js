/*
*Contributor: Đạt 4th september 2020
*Function: Create Form for PPU to create Project


*/

import React, { useState, useDispatch } from "react";
import "./styles/CreatePostModal_3.css";

const CreatePostModal_3 = (props) => {
  //Initialize the state
  const [projectBenefitArray, setProjectBenefitArray] = useState([]);
  const [projectBenefit, setProjectBenefit] = useState("");

  const [projectRequirementArray, setProjectRequirementArray] = useState([]);
  const [projectRequirement, setProjectRequirement] = useState("");

  //Handling Add benefits and requirements event

  const _onChangeAddBenefit = (benefit) => {
    setProjectBenefit(benefit);
    setProjectBenefitArray((benefit) => projectBenefitArray.concat(benefit));
  };

  const _onChangeAddRequirement = (requirement) => {
    setProjectRequirement(requirement);
    setProjectRequirementArray((requirement) =>
      projectRequirementArray.concat(requirement)
    );
  };

  return (
    <div id="createPostModal_3">
      <h1>Bring it to everyone</h1>
      <p>Let your project applicants know more about how to join</p>
      <div className="addBenefitBox">
        <div>
          Benefits for applicants
          <div className="addBenefitButton">+</div>
        </div>
        <ul>
          {" "}
          {/*Add benefit*/}
          <li>
            <input
              type="text"
              placeholder=""
              value={projectBenefit}
              onChange={(projectBenefit) =>
                _onChangeAddBenefit(projectBenefit.target.value)
              }
            />
          </li>
          <li>
            <input
              type="text"
              placeholder=""
              value={projectRequirement}
              onChange={(projectRequirement) =>
                _onChangeAddRequirement(projectRequirement.target.value)
              }
            />
          </li>
        </ul>
      </div>
      {/*REQUIREMENTS*/}
      <div className="addBenefitBox">
        <div>
          Requirements to join
          <div className="addBenefitButton">+</div>
        </div>
        <ul>
          <li>
            <input
              type="text"
              placeholder=""
              value={projectRequirement}
              onChange={(projectRequirement) =>
                _onChangeAddRequirement(projectRequirement.target.value)
              }
            />
          </li>
          <li>
            <input
              type="text"
              placeholder=""
              value={projectRequirement}
              onChange={(projectRequirement) =>
                _onChangeAddRequirement(projectRequirement.target.value)
              }
            />
          </li>
        </ul>
      </div>
      <div className="avatarBox"> Avatar</div>
      <button>Continue</button>
    </div>
  );
};

export default CreatePostModal_3;
