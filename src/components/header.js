import React from 'react';
import { NavLink} from 'react-router-dom';
import  './header.scss';
import logo from '../images/logo.jpg';


const Header = () => {

    return (
        <header>
            <img className="logo" src={logo} alt="logo" width="165px" heigth="50px"/>
            <nav className='nav'> 
                <NavLink exact to='/' className='nav-link' activeClassName='selected'>Home</NavLink>
                <NavLink  to='/about-us' className='nav-link' activeClassName='selected'>About Us</NavLink>
            </nav> 
        </header>       
    )
};

export default Header;