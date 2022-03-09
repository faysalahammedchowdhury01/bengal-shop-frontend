import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WishlistsProducts from '../components/WishlistsProducts';
import classes from '../styles/Wishlists.module.css';

const Wishlists = () => (
    <section className={classes.wishlistsSection}>
        <div className="container">
            <SectionHeading>
                <h2 className="heading">Wishlists</h2>
            </SectionHeading>
            <WishlistsProducts />
        </div>
    </section>
);

export default Wishlists;
