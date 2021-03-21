import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...other }) => (
    <button className={`
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    ${inverted ? 'inverted' : ''}
    custom-button
    `} {...other}>

        {children}
    </button>
);

export default CustomButton;