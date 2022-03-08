import React from 'react';
import categoryCoverImg from '../assets/images/category-cover.png';
import products from '../data/products.json';
import classes from '../styles/CategoryProductsSection.module.css';
import CategoryProducts from './CategoryProducts';
import CategoryProductsSidebar from './CategoryProductsSidebar';

const CategoryProductsSection = () => (
    <section className={classes.categoryProductsSection}>
        <div className="container">
            <div className={classes.categoryProductsLayout}>
                <div>
                    <CategoryProductsSidebar />
                </div>
                <div className={classes.categoryProductsBoxMain}>
                    <img
                        className={classes.categoryCoverImg}
                        src={categoryCoverImg}
                        alt="Category Cover"
                    />
                    <div className={classes.categoryProductsBox}>
                        <CategoryProducts products={products} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CategoryProductsSection;
