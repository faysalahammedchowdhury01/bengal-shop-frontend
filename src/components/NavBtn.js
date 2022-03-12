import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/NavBtn.module.css';

const NavBtn = ({ text, icon, onClick, link }) =>
    link ? (
        <Link to={link} className={classes.navBtn} title={text}>
            {icon}
            <span className={classes.text}>{text}</span>
        </Link>
    ) : (
        <button type="button" onClick={onClick} className={classes.navBtn} title={text}>
            {icon}
            <span className={classes.text}>{text}</span>
        </button>
    );

export default NavBtn;
