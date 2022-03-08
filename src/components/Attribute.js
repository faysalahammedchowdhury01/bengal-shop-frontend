import React from 'react';
import classes from '../styles/Attribute.module.css';

const Attribute = ({ img, title, subTitle }) => (
    <div className={classes.attributeBox}>
        <img className={classes.attributeImg} src={img} alt={title} />
        <div>
            <h5 className={classes.attributeHeading}>{title}</h5>
            <p className={classes.attributeSubHeading}>{subTitle}</p>
        </div>
    </div>
);

export default Attribute;
