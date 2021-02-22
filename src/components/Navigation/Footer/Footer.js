import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Footer.scss'


const footer = (props) => {
    const followItems = [
        {
            link: { pathname: "https://facebook.com" },
            target: '_blank',
            text: 'Facebook'
        },
        {
            link: { pathname: "https://linkedin.com" },
            target: '_blank',
            text: 'LinkedIn'
        },
        {

            link: { pathname: "https://instagram.com" },
            target: '_blank',
            text: 'Instagram'
        }
    ]
    return (
        <footer className="footer">
            <Logo />
            <div className="navDiv">
                <h3>Explorar</h3>
                <nav>
                    <NavigationItems items={props.navItems} />
                </nav>
            </div>
            <div className="navDiv">
                <h3>Siga</h3>
                <nav>
                    <NavigationItems items={followItems} />
                </nav>
            </div>
            <div>
                <p>
                    &copy; Copyright 2021 Fortseg 
                    <br/>
                    Todos os direitos reservados
                </p>

            </div>
        </footer>
    );
}


export default footer;