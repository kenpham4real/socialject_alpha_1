/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

import React from "react";
import "./styles/FinishCreateStyles.css";

 
const FinishCreate = (props) => {
  return (
    <div className="page" >

        <div className="container-FinishCreate" >

                <div>  

                    <h1 className='my-header-FinishCreate'> Finish off </h1>

                        <p className='description-FinishCreate'> Tell people about how to contact your page </p>

                </div>

                            <div className="view-text-input-FinishCreate">

                                    <input 
                                        className='input-text-FinishCreate'
                                            type='text'
                                            placeholder="Email * "  >

                                    </input>
                                    
                                            <input 
                                                className='input-text-FinishCreate'
                                                    type='text'
                                                        placeholder="Phone number" > 

                                            </input>

                                                    <input 
                                                        className='input-text-FinishCreate'
                                                            type='text'
                                                                placeholder="Facebook" > 

                                                    </input>

                            </div>

                    <div>

                        <button 
                            onClick={()=> props.history.push('/profile')} 
                                className="container-finish" >
                        
                                    <span> Finish </span>
                        
                            </button>
                    </div>
                    
        </div>
                
        
            
    </div>
  );
};

export default FinishCreate;