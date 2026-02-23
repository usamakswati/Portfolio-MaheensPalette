import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <NavLink to="/" className="logo" style={{ textDecoration: 'none' }}>
                    MAHEEN'S PALETTE
                </NavLink>
                <nav className="nav">
                    <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>ABOUT</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>EXPERIENCE</NavLink>
                    <NavLink to="/graphic" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>GRAPHIC</NavLink>
                    <NavLink to="/fashion" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>FASHION</NavLink>
                    <NavLink to="/skills" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>SKILLS</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>CONTACT</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
