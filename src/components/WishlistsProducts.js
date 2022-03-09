import { useContext } from 'react';
import WishlistContext from '../contexts/wishlist/WishlistContext';
import classes from '../styles/WishlistsProducts.module.css';
import ProductCard from './ProductCard';

const WishlistsProducts = () => {
    const { wishlists } = useContext(WishlistContext);

    return (
        <div className={classes.wishlistsProducts}>
            {wishlists.map((product) => (
                <ProductCard key={product.productId} product={product} />
            ))}
        </div>
    );
};

export default WishlistsProducts;
