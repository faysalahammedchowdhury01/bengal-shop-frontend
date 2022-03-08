import React, { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import classes from '../styles/CategoryProductsSidebarItem.module.css';

const CategoryProductsSidebarItem = ({ btnName, children }) => {
    const [showItemContent, setShowItemContent] = useState(true);

    return (
        <div
            className={`${classes.categoryProductsSidebarItem} ${showItemContent && classes.show}`}
        >
            <button type="button" onClick={() => setShowItemContent((prevState) => !prevState)}>
                <span>{btnName}</span>
                <FiChevronUp fontSize="22px" />
            </button>
            <div className={classes.categoryProductsSidebarItemContent}>{children}</div>
        </div>
    );
};

export default CategoryProductsSidebarItem;
