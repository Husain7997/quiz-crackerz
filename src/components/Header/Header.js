import React from 'react';
import Navbar from '../Navbar/Navbar';
import img from '../../images/logo.jpeg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='header'>

                <div>
                    <h2>LEARN DEV</h2>
                    <h6>React is a JavaScript library used to develop interactive user interfaces. It is managed by Facebook and a community of individual developers and companies. react mainly focus on developing single-page web or mobile applications. here, we will create a quiz app to understand the basics of reactjs.</h6>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;