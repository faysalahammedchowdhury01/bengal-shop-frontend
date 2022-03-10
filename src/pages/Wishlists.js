import React, { useContext } from 'react';
import SectionHeading from '../components/SectionHeading';
import WishlistsProducts from '../components/WishlistsProducts';
import WishlistContext from '../contexts/wishlist/WishlistContext';
import classes from '../styles/Wishlists.module.css';

const Wishlists = () => {
    const { wishlists } = useContext(WishlistContext);

    return (
        <section className={classes.wishlistsSection}>
            <div className="container">
                <SectionHeading>
                    <h2 className="heading">Wishlists</h2>
                </SectionHeading>
                {wishlists.length === 0 ? (
                    <h3 className={classes.emptyMessage}>Wishlist is empty!</h3>
                ) : (
                    <WishlistsProducts />
                )}
            </div>
        </section>
    );
};

export default Wishlists;
