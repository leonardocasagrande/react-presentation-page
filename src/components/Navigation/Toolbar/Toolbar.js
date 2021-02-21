import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuButton from '../SideDrawer/MenuButton/MenuButton'

const toolbar = (props) => (
    <header className="toolbar">
        <div className="innerBar">
            <MenuButton clicked={props.opened} />
            <div className="logoToolbar">
                <Logo />
            </div>
            <nav className="desktopOnly">
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default toolbar;
