/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import categories from '../data/categoriesList.json';
import classes from '../styles/CategoriesSection.module.css';
import SlidesPerViewSlider from './SlidesPerViewSlider';

const CategoriesSection = () => (
    <section className={classes.categoriesSection}>
        <div className="container">
            <SlidesPerViewSlider
                id="categories"
                heading="Search by Category"
                breakpoints={{
                    0: {
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
                {categories.map((category) => (
                    <SwiperSlide key={category.name}>
                        <Link
                            to={`${category.name.split(' ').join('-').toLowerCase()}`}
                            className={classes.categoryBox}
                        >
                            <img src={category.img} alt={category.name} />
                            <h5>{category.name}</h5>
                        </Link>
                    </SwiperSlide>
                ))}
            </SlidesPerViewSlider>
        </div>
    </section>
);

export default CategoriesSection;
