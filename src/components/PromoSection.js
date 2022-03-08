import React from 'react';
import promoBg1 from '../assets/images/promo-bg-1.png';
import promoBg2 from '../assets/images/promo-bg-2.png';
import classes from '../styles/PromoSection.module.css';
import PromoCard from './PromoCard';

const PromoSection = () => (
    <section className={classes.promoSection}>
        <div className="container">
            <div className={classes.promoCardsParent}>
                <PromoCard
                    title="Fresh Fruits Collection"
                    offer="Buy 1 Get 1"
                    btnLink="shop"
                    bgImg={promoBg1}
                />
                <PromoCard
                    title="Fruits Collection"
                    offer="Buy 1 Get 2"
                    btnLink="shop"
                    bgImg={promoBg2}
                />
            </div>
        </div>
    </section>
);

export default PromoSection;
