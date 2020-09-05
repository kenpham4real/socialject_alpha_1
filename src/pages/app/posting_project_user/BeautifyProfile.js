/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

import React from "react";
import "./styles/BeautifyProfileStyles.css";
import Select from 'react-select';



const options=[
    {value: 'ha noi', label:'Ha Noi' },
    {value: 'ho chi minh', label:'Ho Chi Minh' },
    {value: 'hai phong', label:'Hai Phong' },
    {value: 'da nang', label:'Da Nang' },
];


const BeautifyProfile = (props) => {
  return (
    <div className="page" >
        <div className="container-BeautifyProfile" >
            <div>
                <h1 className='my-header-BeautifyProfile'> Beautify Your Page </h1>
                <p className='description-BeautifyFrofile'> Polish your page with additional information </p>
            </div>
            <div className="view-text-input-beautifyProfile">
                        <Select 
                    options = {options} 
                    className="select" 
                    placeholder="Location *" 
                        />
                        <input 
                    className='input-text-beautifyProfile'
                    type='text'
                    placeholder="School/University" > 
                        </input>
                <div className='avatar-box'>
                    <p className="avatar-text"> Avatar * </p>
                    <img 
                className="image"
                alt="Search icon"
                src={require("../../../assets/images/camera.png")}
                    />
                </div>
            </div>

            
            <div>
                    <button
                onClick={()=> props.history.push('/finishCreate')}
                className="container-continue" >
                    <span> Next </span>
                    </button>
            </div>
        </div>
    </div>
  );
};

export default BeautifyProfile;