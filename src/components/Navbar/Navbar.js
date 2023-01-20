import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import img from '../../images/logo.jpeg';
import './Navbar.css';

const Navbar = () => {
    let activeStyle = {
        textDecoration: "none",
        color: "red",
    };
    let activeClassName = {
        color: "red",
    };

    return (
        <Nav className="justify-content-between" >
            <img className='nav-img' src={img} alt="" />

            <Nav variant="pills" defaultActiveKey="/home">

                <NavLink
                    to="/home"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Blogs
                </NavLink>

                <NavLink to="/statistik">
                    {({ isActive }) => (
                        <span
                            className={
                                isActive ? activeClassName : undefined
                            }
                        >
                            Statistik
                        </span>
                    )}
                </NavLink>

            </Nav >
        </Nav >
    );
};
export default Navbar;