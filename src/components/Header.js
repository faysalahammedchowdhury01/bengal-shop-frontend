import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import classes from '../styles/Header.module.css';
import NavCategories from './NavCategories';
import NavLinks from './NavLinks';
import NavRight from './NavRight';
import Search from './Search';

const Header = () => (
    <header>
        <nav className="container py-5">
            {/* first column */}
            <div className={classes.firstColumn}>
                <Link className={classes.logoBoxMain} to="/">
                    <img className={classes.logo} src={logo} alt="Bengal Shop Logo" />
                </Link>
                <Search />
                <NavRight />
            </div>
            {/* second column */}
            <div className={classes.secondColumn}>
                <NavCategories />
                <div className={classes.navLinksBox}>
                    <NavLinks />
                </div>
                <div className={classes.specialOfferBox}>
                    <Link to="/special-offers">% Special Offers!</Link>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
