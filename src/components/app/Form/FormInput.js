import React from 'react';

import '../../styles/Form/FormInput.css'

export const FormInput = props => {
    return(
        <div className="form-input-style">
            <p>{props.formInputLabel}</p>
            <input
                type="text" 
                placeholder={props.formInputPlaceholder}
                value={props.formInputValue}
                onChange={(text) => props._formInputOnchangeText(text.target.value)}
            />
        </div>
    )
}