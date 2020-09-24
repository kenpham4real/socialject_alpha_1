import React from 'react';

// Styles
import './styles/FeedbackImage.css'

const FeedbackImage = props => {
    return(
        <div className="illustration-wrapper">
            <img className="illustration__image--person" src={require('../assets/images/ken3.png')} />
            <div className="illustration__feedback-wrapper">
                <img className="illustration__image--quote" src={require('../assets/images/left-quote-white.png')} />
                <p className="illustration__feedback" >SocialJect has given me the opportunity to grow by helping me find great clubs and organization</p>
                <p className="illustration__feedback--name" >-Ken Pham-</p>
            </div>
        </div>
    )
}

export default FeedbackImage