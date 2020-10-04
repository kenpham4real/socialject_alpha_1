/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

// Packages
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as profileActions from "../../../store/actions/posting-project-user/profile/profileAction";

//Styles
import "./styles/FinishCreateStyles.css";

//Components
import { FormInput } from "../../../components/app/Form/FormInput";


const FinishCreate = (props) => {
  //Initialize the states
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Facebook, setFacebook] = useState("");

  // const organization = useSelector(state => state.authReducer.userData);
  const organization = JSON.parse(localStorage.getItem("userData"));
  
  //Handle state of 3 screen
  const organizationProperties = {
    orgName: props.location.organizationName,
    category: props.location.category,
    description: props.location.description,
    location: props.location.location.selectedOption.label,
    university: props.location.university,
    image: props.location.image,
    imageFile: props.location.imageFile,
    email: Email,
    phoneNumber: PhoneNumber,
    facebook: Facebook,
  };

  //Dispatch
  const dispatch = useDispatch();

  /**
   * @summary Handle the state of email
   * @param {string} Email
   * @return {void}
   */
  const _onChangeEmail = (Email) => {
    setEmail(Email);
  };

  /**
   * @summary Handle the state of description
   * @param {string} PhoneNumber
   * @return {void}
   */
  const _onChangePhoneNumber = (PhoneNumber) => {
    setPhoneNumber(PhoneNumber);
  };

  /**
   * @summary Handle the state of Facebook
   * @param {string} facebook
   * @return {void}
   */
  const _onChangeFacebook = (Facebook) => {
    setFacebook(Facebook);
  };

  /**
   * @summary Trigger the Registration action
   * @param {string} FinishEmail
   * @param {number} FinishPhoneNumber
   * @param {string} FinishFacebook
   * @returns {void}
   */

  const _onFinish = () => {
    dispatch(
      profileActions._createProfile_ppu(
        organization.userId,
        organizationProperties.orgName,
        organizationProperties.category,
        organizationProperties.description,
        organizationProperties.location,
        organizationProperties.university,
        organizationProperties.email,
        organizationProperties.phoneNumber,
        organizationProperties.facebook,
        organizationProperties.imageFile,
      )
    );
    props.history.push({
      pathname: "/profile",
      profileId: organization.userId,
    });
  };

  return (
    <div className="page">
      <div className="container-FinishCreate">
        <div>
          <h1 className="my-header-FinishCreate"> Finish off </h1>
          <p className="description-FinishCreate">
            {" "}
            Tell people about how to contact your page{" "}
          </p>
        </div>
        <div className="view-text-input-FinishCreate">
          <FormInput
						formInputLabel="Email"
						formInputPlaceholder="Your Email?" 
						formInputValue={Email}
						_formInputOnchangeText={setEmail}
            className="input-text-FinishCreate"
          />

          <FormInput
              formInputLabel="PhoneNumber"
              formInputPlaceholder="Your Phone number?" 
              formInputValue={PhoneNumber}
              _formInputOnchangeText={setPhoneNumber}
              className="input-text-FinishCreate"
          />
          <FormInput
              formInputLabel="Facebook"
              formInputPlaceholder="Your Facebook?" 
              formInputValue={Facebook}
              _formInputOnchangeText={setFacebook}
          />
        </div>

        <div>
          <div
            className="container-continue"
            onClick={() => {
              _onFinish();
              
            }}
          >
            <span> Finish </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishCreate;
