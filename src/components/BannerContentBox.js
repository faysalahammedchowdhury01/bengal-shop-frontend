import React from 'react';
import classes from '../styles/BannerContentBox.module.css';

const BannerContentBox = ({ img, imgFirst, background, children }) => (
    <div className={`${classes.bannerContentBox} ${background}`}>
        <div className={`${classes.bannerContent} ${imgFirst && classes.imgFirst}`}>
            {/* left side */}
            <div className={classes.textBox}>{children}</div>
            {/* right side */}
            <div className={classes.imgBox}>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
);

export default BannerContentBox;
