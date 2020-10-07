/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

// Packages
import React, { useState} from "react";


//Styles
import "./styles/RegistrationStyles.css";

//Components
import { FormInput } from "../../../components/app/Form/FormInput";


 
const Registration = (props) => {

	//Get the data from LocalStorage
	const _getRegistrationData =JSON.parse(localStorage.getItem ("Registration"));
	/*
	*Make 3 states of this is null to make the browser run without error
	*pass the state of localStorage to initialize state then we can keep the states when press back button's browser
	*/
	let orgName =null;
	let cate =null;
	let des = null;
	if(_getRegistrationData!=null) 
	{
		orgName=_getRegistrationData.organizationName
		cate=_getRegistrationData.category
		des= _getRegistrationData.description
	}

	
	//Initialize the states
	const [organizationName, setOrganizationName]=useState(orgName);
	const [category,setCategory]=useState(cate);
	const [description,setDescription]=useState(des);

	
	const dataRegistration={
		organizationName,
		category,
		description,
	}
	
	/**
	 * @summary Handle the state of organiztion's name
	 * @param {string} name
	 * @returns {void} 
	 */
	// const _onChangeOrganizationName = (name) => {
	// 	setOrganizationName(organizationName);
	// }

	// /**
	//  * @summary Handle the state of category
	//  * @param {string} category
	//  * @returns {void} 
	//  */
	// const _onChangeCategory = (category) => {
	// 	setCategory(category);
	// }
	

	// /**
	//  * @summary Handle the state of description
	//  * @param {string} description
	//  * @returns {void}
	//  */
	// const _onChangeDescription = (description) => {
	// 	setDescription(description);
	// }
	

	return (
		<div className="page" >
			<div className="container-registration">
				<div>  
					<h1 className='my-header-registration'> Start with the basics </h1>
					<p className='description-registration'>  Tell people about your organiztion  </p>
				</div>
				<form>
				<div className = "view-text-input-registration" >
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
						className="container-continue" 
						onClick =
						{()=> 
							{
								//save the states input to LocalStorage when onClick 
								localStorage.setItem("Registration",JSON.stringify(dataRegistration));
								props.history.push
							({ 	
								
								pathname:'/beautifyProfile',
								organizationName,
								category,
								description,
							})
							}
							
						}
					>
						Continue 
					</div>
					
				</div>
			</div>
					
		</div>
	);
};

export default Registration;