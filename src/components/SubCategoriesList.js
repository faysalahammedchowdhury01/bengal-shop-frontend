/* eslint-disable import/no-cycle */
import React from 'react';
import classes from '../styles/SubCategoriesList.module.css';
import CategoryItem from './CategoryItem';

const SubCategoriesList = ({ subCategories, showSubCat }) => (
    <div className={`${showSubCat ? 'block' : 'hidden'} ${classes.subCategoriesList}`}>
        {subCategories.map((subCat) => (
            <CategoryItem key={Math.random()} category={subCat} />
        ))}
    </div>
);

export default SubCategoriesList;
