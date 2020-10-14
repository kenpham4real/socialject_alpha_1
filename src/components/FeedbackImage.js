import React from 'react';

// Constants
import {FEEDBACKS} from '../constants/feedback'

// Styles
import './styles/FeedbackImage.css'

const FeedbackImage = props => {

    const feedbackInfo = FEEDBACKS[Math.floor(Math.random()*FEEDBACKS.length)]

    return(
        <div className="illustration-wrapper">
            <img alt="" className="illustration__image--person" src={feedbackInfo["avatar"]} />
            <div className="illustration__feedback-wrapper">
                <img alt="" className="illustration__image--quote" src={require('../assets/images/left-quote-white.png')} />
                <p className="illustration__feedback" >{feedbackInfo["feedback"]}</p>
                <p className="illustration__feedback--name" >-{feedbackInfo["name"]}-</p>
            </div>
        </div>
    )
}

export default FeedbackImage