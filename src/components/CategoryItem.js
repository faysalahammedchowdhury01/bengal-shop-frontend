/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import classes from '../styles/CategoryItem.module.css';
import SubCategoriesList from './SubCategoriesList';

const CategoryItem = ({ category }) => {
    const [showSubCat, setShowSubCat] = useState(false);
    const hasSubCategories = category.subCategories;

    // handle show sub category
    const handleShowSubCat = (e) => {
        e.stopPropagation();
        if (!hasSubCategories) return;
        setShowSubCat((prevState) => !prevState);
    };

    const { img, name, subCategories } = category;

    return (
        <div className={classes.categoryItemBox}>
            <div onClick={(e) => handleShowSubCat(e)} className={classes.categoryItem}>
                {img && <img src={img} alt={name} />}
                <p className={`${showSubCat && '!font-bold'}`}>{name}</p>
                {/* show arrow when el has sub categories */}
                {hasSubCategories && (
                    <button type="button" className={classes.arrow}>
                        {showSubCat ? <FiChevronDown /> : <FiChevronRight />}
                    </button>
                )}
            </div>
            {hasSubCategories && (
                <SubCategoriesList subCategories={subCategories} showSubCat={showSubCat} />
            )}
        </div>
    );
};

export default CategoryItem;
