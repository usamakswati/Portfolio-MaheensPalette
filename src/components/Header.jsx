import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);

    const links = [
        { to: '/about', label: 'ABOUT' },
        { to: '/experience', label: 'EXPERIENCE' },
        { to: '/graphic', label: 'GRAPHIC' },
        { to: '/fashion', label: 'FASHION' },
        { to: '/skills', label: 'SKILLS' },
        { to: '/contact', label: 'GET AHOLD OF US' },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="logo" style={{ textDecoration: 'none' }} onClick={close}>
                    MAHEEN'S PALETTE
                </NavLink>

                {/* Desktop nav */}
                <nav className="nav desktop-nav">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Hamburger button */}
                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile drawer */}
            <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
                <nav className="mobile-nav">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => 'mobile-nav-link' + (isActive ? ' active' : '')}
                            onClick={close}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
