/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

// Packages
import React, { useState} from "react";


//Styles
import "./styles/RegistrationStyles.css";


const Registration = (props) => {

	//Initialize the states
	const [organizationName, setOrganizationName]=useState("");
	const [description,setDescription]=useState("");
	

	/**
	 * @summary Handle the state of organiztion's name
	 * @param {string} name
	 * @returns {void} 
	 */
	const _onChangeOrganizationName = (name) => {
		setOrganizationName(name);
	}
	/**
	 * @summary Handle the state of description
	 * @param {string} description
	 * @returns {void}
	 */
	const _onChangeDescription = (description) => {
		setDescription(description);
	}

	
	return (
		<div className="page" >
			<div className="container-registration">
				<div>  
					<h1 className='my-header-registration'> Start with the basics </h1>
					<p className='description-registration'>  Tell people about your organiztion  </p>
				</div>
				<div className = "view-text-input-registration" >
					<input 
						className='input-text-registration'
						type= 'text'
						placeholder= "Organization's name *" 
						value={organizationName}
						onChange={(name)=> _onChangeOrganizationName(name.target.value)}
					/>
					<textarea 
						className='input-text-registration description'
						type='text'
						placeholder= "Description" 
						value={description}
						onChange={(description) => _onChangeDescription(description.target.value)} 
					/>
				</div>
				<div>
					<button 
						className="container-continue" 
						onClick =
						{()=> props.history.push
							({ 	
								pathname:'/beautifyProfile',
								organizationName,
								description,
							})
						}
					>
						<span> Continue </span>
					</button>
					
				</div>
			</div>
					
		</div>
	);
};

export default Registration;