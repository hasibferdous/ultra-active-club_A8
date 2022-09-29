import React from 'react';
import './Header.css'
import logo from '../../images/fitness.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Fitness Active Club </h1>
            <div className='nav'>
                <a href='/home'><b>Home</b></a>
                <a href='/activities'><b>Activities</b></a>
                <a href='/goals'><b>Goals</b></a>
                <a href='/about'><b>About</b></a>
            </div>
        </div>
    );
};

export default Header;