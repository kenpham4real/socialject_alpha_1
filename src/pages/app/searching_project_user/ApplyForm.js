/**
 * Contributor: TrNgTien
 * Day: 19/9/2020
 * Main function: render IU of application form
 */

 //Packages
 import React from "react";

 //Styles
 import "./styles/ApplyFormStyles.css";

 const ApplyForm = (props) => {
    return (
        <div className="page" >
            <h1 className="h1">Project's Name</h1>
            <p className="location">Location</p>
            <div className="contact">
                <form  className="contact-form" autocomplete="off">
                    <div className="contact-form-group">
                        <label 
                            for="name" 
                            className="contact-form-label"
                        >
                            Your Name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            className="contact-form-input" 
                        />
                    </div>
                    <div className="contact-form-group">
                        <label 
                            for="email" 
                            className="contact-form-label"
                        >
                            Your Email
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            className="contact-form-input" />
                    </div>
                        <div className="contact-form-group">
                        <label for="message" className="contact-form-label">Your Message</label>
                        <textarea name="message" id="message" className="contact-form-area" placeholder="Type something if you want"></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="contact-form-submit"
                    >
                        Submit
                    </button>
                </form>
</div>
        </div>
        );
    };
  export default ApplyForm;
  