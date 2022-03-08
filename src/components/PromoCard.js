import React from 'react';
import classes from '../styles/PromoCard.module.css';
import Button from './Button';

const PromoCard = ({ title, offer, btnLink, bgImg }) => (
    <div style={{ backgroundImage: `url('${bgImg}')` }} className={classes.promoCard}>
        <h5 className={classes.subHeading}>{offer}</h5>
        <h2 className={classes.heading}>{title}</h2>
        <Button link={btnLink} roundedFull theme="white">
            Order Now
        </Button>
    </div>
);

export default PromoCard;
