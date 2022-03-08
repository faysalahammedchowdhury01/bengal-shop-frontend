/* eslint-disable import/no-unresolved */
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import classes from '../styles/SlidesPerViewSlider.module.css';
import SectionHeading from './SectionHeading';

const SlidesPerViewSlider = ({ id, heading, breakpoints, children }) => (
    <>
        <SectionHeading>
            <div className={classes.sliderSectionHeadingContent}>
                <h2 className="heading">{heading}</h2>
                <div className={classes.navigationBtn}>
                    <button type="button" className={`${id}-prev`}>
                        <FaChevronLeft />
                    </button>
                    <button type="button" className={`${id}-next`}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </SectionHeading>
        <Swiper
            breakpoints={breakpoints}
            spaceBetween={30}
            navigation={{
                prevEl: `.${id}-prev`,
                nextEl: `.${id}-next`,
            }}
            modules={[Navigation]}
        >
            {children}
        </Swiper>
    </>
);

export default SlidesPerViewSlider;
