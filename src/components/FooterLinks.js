import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/FooterLinks.module.css';

const FooterLinks = ({ header, links }) => (
    <div>
        <h3 className={classes.footerLinksHeader}>{header}</h3>
        <ul className={classes.footerLinks}>
            {links.map((link) => (
                <li className={classes.footerLink} key={link.name}>
                    <Link to={link.path} target={link.external ? '_blank' : null}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterLinks;
