import React from 'react';
import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={"navigationItem"}>
        <NavLink to={props.link}  
        exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
);


export default navigationItem;