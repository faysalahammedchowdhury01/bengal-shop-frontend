import React from 'react';
import classes from '../styles/ShowCounter.module.css';

const ShowCounter = ({ days, hours, minutes, seconds }) => (
    <div className={classes.showCounter}>
        <div className={classes.time}>
            <h3>{days >= 10 ? days : `0${days}`}</h3>
            <p>Days</p>
        </div>
        <span className={classes.divider}>:</span>
        <div className={classes.time}>
            <h3>{hours >= 10 ? hours : `0${hours}`}</h3>
            <p>Hours</p>
        </div>
        <span className={classes.divider}>:</span>
        <div className={classes.time}>
            <h3>{minutes >= 10 ? minutes : `0${minutes}`}</h3>
            <p>Minutes</p>
        </div>
        <span className={classes.divider}>:</span>
        <div className={classes.time}>
            <h3>{seconds >= 10 ? seconds : `0${seconds}`}</h3>
            <p>Seconds</p>
        </div>
    </div>
);

export default ShowCounter;
