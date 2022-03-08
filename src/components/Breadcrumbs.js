import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Breadcrumbs.module.css';

const Breadcrumbs = () => (
    <ol className={classes.breadcrumbs}>
        <li>
            <Link to="/fruits">Fruits</Link>
        </li>
        <li>
            <Link to="/green-fruits">Green Fruits</Link>
        </li>
        <li>Fresh Fruits</li>
    </ol>
);

export default Breadcrumbs;
