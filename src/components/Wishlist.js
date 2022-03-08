import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import classes from '../styles/Wishlist.module.css';

const Wishlist = () => (
    <>
        <Link to="wishlist" className={classes.wishListBtn}>
            <AiOutlineHeart fontSize="22px" />
            <span className={classes.text}>Wishlist</span>
            {/* <span className={classes.wishListQuantity}>5</span> */}
        </Link>
    </>
);

export default Wishlist;
