/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

// Packages
import React, { useState } from "react";

//Styles
import "./styles/RegistrationStyles.css";

//Components
import { FormInput } from "../../../../components/app/Form/FormInput";

const Registration = (props) => {
  //Get the data from LocalStorage
  const _getRegistrationData = JSON.parse(localStorage.getItem("Registration"));
  /*
   *Make 3 states of this is null to make the browser run without error
   *pass the state of localStorage to initialize state then we can keep the states when press back button's browser
   */
  let orgName = null;
  let cate = null;
  let des = null;
  if (_getRegistrationData != null) {
    orgName = _getRegistrationData.organizationName;
    cate = _getRegistrationData.category;
    des = _getRegistrationData.description;
  }

  //Initialize the states
  const [organizationName, setOrganizationName] = useState(orgName);
  const [category, setCategory] = useState(cate);
  const [description, setDescription] = useState(des);

  const dataRegistration = {
    organizationName,
    category,
    description,
  };
  const sendDataRegistration = () => {
    if (
      organizationName !== null &&
      category !== null &&
      description !== null
    ) {
      //save the states input to LocalStorage when onClick
      localStorage.setItem("Registration", JSON.stringify(dataRegistration));
      props.history.push({
        pathname: "/beautifyProfile",
        organizationName,
        category,
        description,
      });
    } else alert("PLEASE ENTER FULLY INFORMATION!");
  };
  return (
    <div className="registration-page">
      <div className="registration-container">
        <div>
          <h1 className="registration-page__header"> Start with the basics </h1>
          <p className="registration-page__description">
            {" "}
            Tell people about your organization{" "}
          </p>
        </div>
        <form>
          <div className="registration-page__view-text-input">
            <FormInput
              formInputLabel="Organization's name"
              formInputPlaceholder="What is your organization's name?"
              formInputValue={organizationName}
              _formInputOnchangeText={setOrganizationName}
            />

            <FormInput
              formInputLabel="Category"
              formInputPlaceholder="What is your organization's category?"
              formInputValue={category}
              _formInputOnchangeText={setCategory}
            />

            <FormInput
              formInputLabel="Description"
              formInputPlaceholder="Describe about your organization!"
              formInputValue={description}
              _formInputOnchangeText={setDescription}
            />
          </div>
        </form>
        <div>
          <div
            className="registration-page__btn--continue"
            onClick={() => {
              sendDataRegistration();
            }}
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
