import React from 'react';
import classes from '../styles/CategoryProductsSidebar.module.css';
import CategoriesList from './CategoriesList';
import CategoryProductsSidebarItem from './CategoryProductsSidebarItem';

const CategoryProductsSidebar = () => (
    <div className={classes.categoryProductsSidebar}>
        <CategoryProductsSidebarItem btnName="Categories">
            <CategoriesList />
        </CategoryProductsSidebarItem>
    </div>
);

export default CategoryProductsSidebar;
