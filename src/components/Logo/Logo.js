import React from 'react';
import './Logo.scss';
import {NavLink} from 'react-router-dom';
import companyLogo from '../../assets/images/logo-fortseg-servicos.png';


const logo = (props) => (
    <NavLink to="/">
        <div className="logo" style={{ height: props.height }}>
            <img src={companyLogo} alt="Fortseg Serviços" />
        </div>
    </NavLink>
);

export default logo;
