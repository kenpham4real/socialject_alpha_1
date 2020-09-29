
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
    const _onChooseStudentRole = () => {
        props.history.push('/login',{
            userType: userTypes.STUDENT
        });
    }

    /**
     * @summary Navigate to the Login Page with the user type of PPU
     */
    const _onChooseAdminRole = () => {
        props.history.push('/login',{
            userType: userTypes.ADMIN
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
                            onClick={_onChooseStudentRole}
                        >Student</button>
                    </div>
                    <div className="choose-user__buttons">
                        <button 
                            className="choose-user__buttons--button--ppu"
                            onClick={_onChooseAdminRole}
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