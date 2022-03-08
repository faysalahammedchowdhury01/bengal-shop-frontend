import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../styles/NavLinks.module.css';

const NavLinks = () => {
    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Shop', to: 'shop' },
        { name: 'Blogs', to: 'blogs' },
        { name: 'Contact', to: 'contact' },
        { name: 'Track Order', to: 'track-order' },
    ];

    return (
        <ul className={classes.navLinks}>
            {navLinks.map((link) => (
                <li key={link.name}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => (isActive ? classes.activeLink : null)}
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
