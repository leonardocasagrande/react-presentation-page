import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses = ['sideDrawer', 'close'];
    if(props.open) {
        attachedClasses = ['sideDrawer', 'open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={'logoSidedrawer'}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems items={props.navItems}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer
