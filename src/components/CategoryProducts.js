import React from 'react';
import useLoadMoreProducts from '../hooks/useLoadMoreProducts';
import classes from '../styles/CategoryProducts.module.css';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ProductCard from './ProductCard';

const CategoryProducts = ({ products }) => {
    const { displayProducts, setDisplayProductQuantity, isAvailableProducts } = useLoadMoreProducts(
        products,
        9
    );

    // load more products
    const loadMoreProducts = (quantity = 3) => {
        console.log(isAvailableProducts);
        if (!isAvailableProducts) return;
        setDisplayProductQuantity((prevState) => prevState + quantity);
    };

    return (
        <div className={classes.categoryProducts}>
            <h2 className={classes.categoryProductsHeading}>Fruits Collection</h2>
            <div className={classes.info}>
                <Breadcrumbs />
                <p>
                    <span className={classes.highlight}>{products.length} </span>
                    Products Found
                </p>
            </div>
            <div className={classes.products}>
                {displayProducts.map((product) => (
                    <ProductCard key={product.productId} product={product} />
                ))}
            </div>
            {isAvailableProducts && (
                <div className={classes.loadMoreBtnBox}>
                    <Button onClick={() => loadMoreProducts(3)} roundedFull theme="primary">
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CategoryProducts;
