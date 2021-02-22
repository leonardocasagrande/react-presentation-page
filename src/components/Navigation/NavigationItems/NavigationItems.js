import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = (props) => {

    return (
        <ul className={"navigationItems"} >
            {
                props.items.map(el => {
                    return <NavigationItem
                    key={el.link} 
                    link={el.link}
                    target={el.target} 
                    exact={el.exact}>
                        {el.text}
                    </NavigationItem>
                })
            }
        </ul >
    );
};

export default navigationItems;
