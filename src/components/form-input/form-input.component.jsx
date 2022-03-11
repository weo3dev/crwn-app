import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...remainProps}) => (
    <div className='input-group'>
        <input className='form-input' onChange={handleChange} {...remainProps} />
        {
            label ? 
            (<label className={`${remainProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
             : null
        }
    </div>
)

export default FormInput;