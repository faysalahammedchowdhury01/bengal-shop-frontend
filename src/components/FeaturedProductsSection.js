import React from 'react';
import products from '../data/products.json';
import useLoadMoreProducts from '../hooks/useLoadMoreProducts';
import classes from '../styles/FeaturedProducts.module.css';
import Button from './Button';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';

const FeaturedProductsSection = () => {
    const { displayProducts, setDisplayProductQuantity, isAvailableProducts } = useLoadMoreProducts(
        products,
        4
    );

    // load more products
    const loadMoreProducts = (quantity = 4) => {
        console.log(isAvailableProducts);
        if (!isAvailableProducts) return;
        setDisplayProductQuantity((prevState) => prevState + quantity);
    };

    return (
        <section className={classes.featuredProductsSection}>
            <div className="container">
                <SectionHeading>
                    <h2 className="heading">Fresh Fruits</h2>
                </SectionHeading>
                <div className={classes.products}>
                    {displayProducts.map((product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))}
                </div>
                {isAvailableProducts && (
                    <div className={classes.loadMoreBtnBox}>
                        <Button onClick={() => loadMoreProducts(4)} theme="primary" roundedFull>
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedProductsSection;
