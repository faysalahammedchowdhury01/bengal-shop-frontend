import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../pages/Category';
import Home from '../pages/Home';
import Wishlists from '../pages/Wishlists';

const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Category />} />
        <Route path="wishlists" element={<Wishlists />} />
    </Routes>
);

export default AllRoutes;
