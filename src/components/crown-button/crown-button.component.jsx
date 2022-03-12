import React from 'react';

import './crown-button.styles.scss';

const CrownButton = ({children, isGoogleSignIn, ...remainProps}) => (
    <button className={`${isGoogleSignIn ? 'google-signin' : '' } crown-button`} {...remainProps}>
        {children}
    </button>
)

export default CrownButton
