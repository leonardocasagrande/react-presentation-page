import React from 'react';
import './MenuButton.scss'

const menuButton = (props) => (
    <div className={'menuButton'} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menuButton;
