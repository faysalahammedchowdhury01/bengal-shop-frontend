import React from 'react';
import classes from '../styles/NavBtn.module.css';

const NavBtn = ({ text, icon }) => (
    <button type="button" className={classes.navBtn} title={text}>
        {icon}
        <span className={classes.text}>{text}</span>
    </button>
);

export default NavBtn;
