import classes from '../styles/WishlistsProducts.module.css';
import ProductCard from './ProductCard';

const WishlistsProducts = () => {
    const wishlistsProducts = [
        {
            productId: '1',
            img: 'https://raw.githubusercontent.com/faysalahammedchowdhury01/bengal-shop-frontend/main/src/assets/images/pomegranate.png',
            name: 'Product Name - 1',
            price: 750,
            haveDiscount: true,
            priceAfterDiscount: 550,
            rating: 5,
            ratingGiven: 220,
        },
        {
            productId: '2',
            img: 'https://raw.githubusercontent.com/faysalahammedchowdhury01/bengal-shop-frontend/main/src/assets/images/pomegranate.png',
            name: 'Product Name - 2',
            price: 700,
            haveDiscount: true,
            priceAfterDiscount: 600,
            rating: 4.5,
            ratingGiven: 150,
        },
        {
            productId: '3',
            img: 'https://raw.githubusercontent.com/faysalahammedchowdhury01/bengal-shop-frontend/main/src/assets/images/pomegranate.png',
            name: 'Product Name - 3',
            price: 450,
            haveDiscount: true,
            priceAfterDiscount: 400,
            rating: 5,
            ratingGiven: 262,
        },
    ];

    return (
        <div className={classes.wishlistsProducts}>
            {wishlistsProducts.map((product) => (
                <ProductCard key={product.productId} product={product} />
            ))}
        </div>
    );
};

export default WishlistsProducts;
