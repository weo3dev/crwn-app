import React from 'react';

import './crown-button.styles.scss';

const CrownButton = ({children, ...remainProps}) => (
    <button className='crown-button' {...remainProps}>
        {children}
    </button>
)

export default CrownButton
