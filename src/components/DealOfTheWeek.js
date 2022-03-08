import React from 'react';
import foodMan from '../assets/images/banner-img.png';
import foodBag from '../assets/images/food-bag.png';
import classes from '../styles/DealOfTheWeek.module.css';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

const DealOfTheWeek = () => {
    const offerTimesInDay = 7;
    const hasOffer = offerTimesInDay > 0;
    const offerTimesInMS = offerTimesInDay * 24 * 60 * 60 * 1000;
    const offerStartsTimeInMS = new Date().getTime();
    const daysUntilOfferLeftInMS = offerStartsTimeInMS + offerTimesInMS;

    return (
        hasOffer && (
            <section className={classes.dealOfTheWeek}>
                <div className="container">
                    <div className={classes.offerBox}>
                        <div className={classes.imgBox}>
                            <img src={foodBag} alt="Food Bag" />
                        </div>
                        <div className={classes.textBox}>
                            <h2 className={classes.heading}>Deal of the Week</h2>
                            <div className={classes.countdownTimerBox}>
                                <CountdownTimer targetDate={daysUntilOfferLeftInMS} />
                            </div>
                            <Button link="shop" roundedFull theme="primary">
                                Shop Now
                            </Button>
                        </div>
                        <div className={classes.imgBox}>
                            <img src={foodMan} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    );
};

export default DealOfTheWeek;
