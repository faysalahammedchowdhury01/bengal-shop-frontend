import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import classes from '../styles/NavCategories.module.css';
import CategoriesList from './CategoriesList';
import Sidebar from './Sidebar';

const NavCategories = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <div className={classes.navCategoriesBox}>
            <button
                type="button"
                onClick={() => setShowCategories((prevState) => !prevState)}
                className={classes.navCategoriesBtn}
            >
                <FiBarChart2 fontSize="22px" className="rotate-90" />
                <span>All Categories</span>
                <BsChevronDown fontSize="22px" />
            </button>
            <Sidebar
                width="320px"
                isSidebarOpen={showCategories}
                setIsSidebarOpen={setShowCategories}
                position="left"
            >
                <div className={classes.navCategoriesHeader}>
                    <Link onClick={() => setShowCategories(false)} to="/">
                        <img src={logo} alt="Bengal Shop" />
                    </Link>
                    <button type="button" onClick={() => setShowCategories(false)}>
                        <FaTimes className="text-[#4f4f4f]" fontSize="18px" />
                    </button>
                </div>
                <div className={classes.navCategories}>
                    <CategoriesList />
                </div>
            </Sidebar>
        </div>
    );
};

export default NavCategories;
