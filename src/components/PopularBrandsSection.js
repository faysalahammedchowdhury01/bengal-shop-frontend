/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import popularBrands from '../data/brands.json';
import classes from '../styles/PopularBrandsSection.module.css';
import SlidesPerViewSlider from './SlidesPerViewSlider';

const PopularBrandsSection = () => (
    <section className={classes.popularBrandsSection}>
        <div className="container">
            <SlidesPerViewSlider
                id="popular-brand"
                heading="Popular Brands"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
            >
                {popularBrands.map((brand) => (
                    <SwiperSlide key={brand.name}>
                        <Link
                            className={classes.popularBrand}
                            to={`brand/${brand.name.split(' ').join('-').toLowerCase()}`}
                        >
                            <img src={brand.img} alt={brand.name} />
                        </Link>
                    </SwiperSlide>
                ))}
            </SlidesPerViewSlider>
        </div>
    </section>
);

export default PopularBrandsSection;
