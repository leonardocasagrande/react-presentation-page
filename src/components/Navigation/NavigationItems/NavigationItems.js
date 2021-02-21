import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = () => (
    <ul className={"navigationItems"}>
        <NavigationItem exact link="/sobre">
            A Fortseg
        </NavigationItem>
        <NavigationItem link="/servicos">
            Serviços
        </NavigationItem>
        <NavigationItem link="/trabalho">
            Trabalhe conosco
        </NavigationItem>
        <NavigationItem link="/contato">
            Fale conosco
        </NavigationItem>
        <NavigationItem link="/orcamento">
            Orçamento
        </NavigationItem>
    </ul>
);

export default navigationItems;
