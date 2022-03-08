import React from 'react';
import categories from '../data/categoriesList.json';
import CategoryItem from './CategoryItem';

const CategoriesList = () =>
    categories.map((category) => (
        <CategoryItem key={Math.random().toString()} category={category} />
    ));

export default CategoriesList;
