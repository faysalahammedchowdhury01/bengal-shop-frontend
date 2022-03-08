import React from 'react';
import Banner from '../components/Banner';
import CategoriesSection from '../components/CategoriesSection';
import DealOfTheWeek from '../components/DealOfTheWeek';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import PopularBrandsSection from '../components/PopularBrandsSection';
import PromoSection from '../components/PromoSection';

const Home = () => (
    <>
        <Banner />
        <CategoriesSection />
        <PromoSection />
        <FeaturedProductsSection />
        <PopularBrandsSection />
        <DealOfTheWeek />
    </>
);

export default Home;
