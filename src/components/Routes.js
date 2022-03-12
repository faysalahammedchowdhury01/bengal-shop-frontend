import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../pages/Category';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Wishlists from '../pages/Wishlists';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Category />} />
        <Route path="wishlists" element={<Wishlists />} />
        <Route path="/*" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/*" element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
        </Route>
        <Route path="/*" element={<PublicRoute />}>
            <Route path="signup" element={<Signup />} />
        </Route>
    </Routes>
);

export default AllRoutes;
