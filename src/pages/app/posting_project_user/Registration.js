/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

import React from "react";
import "./styles/RegistrationStyles.css";

const Registration = (props) => {
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
						placeholder= "Orginaztion's name *" >
							</input>


							<input 
						className='input-text-registration description'
						type='text'
						placeholder= "Description" >
							</input>
					</div>


						<div>
								<button 
							onClick={()=> props.history.push('/beautifyProfile')} 
							className="container-continue" >
								<span> Continue </span>
								</button>
						</div>
									
				
		</div>
				
	</div>
	);
};

export default Registration;