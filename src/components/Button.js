import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Button.module.css';

const Button = ({ link, onClick, fullWidth, roundedFull, theme, font, children }) => {
    const className = `${classes.btn} ${fullWidth && classes.btnFullWidth} ${
        roundedFull && classes.btnRoundedFull
    } ${theme && classes[`${theme}Btn`]} ${font && classes[`${font}Btn`]}`;

    return link ? (
        <Link onClick={onClick} to={link} className={className}>
            {children}
        </Link>
    ) : (
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
