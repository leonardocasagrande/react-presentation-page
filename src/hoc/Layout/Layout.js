import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './Layout.scss';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Footer from '../../components/Navigation/Footer/Footer'


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        const navItems = [
            {
                link: '/sobre',
                exact: true,
                text: 'A Fortseg'
            },
            {
                link: '/servicos',
                text: 'Serviços'
            },
            {
                link: '/trabalho',
                text: 'Trabalhe conosco'
            },
            {
                link: '/fale',
                text: 'Fale conosco'
            },
            {
                link: '/orcamento',
                text: 'Orçamento'
            }
        ]
        return (
            <Aux>
                <Toolbar 
                opened={this.sideDrawerToggleHandler} 
                navItems={navItems}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                    navItems={navItems}/>
                <main className='content'>
                    {this.props.children}
                </main>
                <Footer navItems={navItems}/>
            </Aux>
        );
    }
};

export default Layout;