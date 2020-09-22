/**
 * @summary This file renders the Choose user type component
 * Main component: LoginPage
 * @author Ken Pham
 */

import React from 'react';
import FeedbackImage from '../../components/FeedbackImage';

// Constants
import * as userTypes from '../../constants/user-types'

// Styles
import './styles/ChoosingUser.css'

/**
 * @summary Rendering the page which users use to choose their user type
 * @param {} props 
 * @returns JSX Elements
 */
const ChoosingUser = props => {

    /**
     * @summary Navigate to the Login Page with the user type of SPU
     */
    const _onChooseSPU = () => {
        props.history.push('/login',{
            userType: userTypes.IS_SPU
        });
    }

    /**
     * @summary Navigate to the Login Page with the user type of PPU
     */
    const _onChoosePPU = () => {
        props.history.push('/login',{
            userType: userTypes.IS_PPU
        });
    }

    return(
        <div className="container">
            <div className="choose-user-container">
                <div className="choose-user__title">Choose your type of user</div>
                <div className="choose-user__buttons-wrapper">
                    <div className="choose-user__buttons">
                        <button 
                            className="choose-user__buttons--button--spu"
                            onClick={_onChooseSPU}
                        >Student</button>
                    </div>
                    <div className="choose-user__buttons">
                        <button 
                            className="choose-user__buttons--button--ppu"
                            onClick={_onChoosePPU}
                        >Organization</button>
                    </div>
                </div>
            </div>
            <div className="illustration-container">
                <FeedbackImage/>
            </div>
        </div>
    )
}

export default ChoosingUser;