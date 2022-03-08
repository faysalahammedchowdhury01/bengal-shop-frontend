/* eslint-disable import/no-unresolved */
import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg from '../assets/images/banner-img.png';
import classes from '../styles/Banner.module.css';
import BannerContentBox from './BannerContentBox';
import Button from './Button';

const Banner = () => (
    <section className={classes.bannerSection}>
        <div className="container">
            <Swiper
                className="banner-sliders"
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <BannerContentBox img={bannerImg}>
                        <h5>Save up 30% off</h5>
                        <h1>
                            Bengal Vegetable <br /> farm Organic 100%
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
                            faucibus massa est elit maecenas.
                        </p>
                        <Button link="shop" roundedFull theme="primary">
                            Shop Now
                        </Button>
                    </BannerContentBox>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerContentBox background="bg-green-100" img={bannerImg} imgFirst>
                        <h5>Save up 30% off</h5>
                        <h1>
                            Bengal Vegetable <br /> farm Organic 100%
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
                            faucibus massa est elit maecenas.
                        </p>
                        <Button link="shop" roundedFull theme="primary">
                            Shop Now
                        </Button>
                    </BannerContentBox>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerContentBox background="bg-green-100" img={bannerImg}>
                        <h5>Save up 30% off</h5>
                        <h1>
                            Bengal Vegetable <br /> farm Organic 100%
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
                            faucibus massa est elit maecenas.
                        </p>
                        <Button link="shop" roundedFull theme="primary">
                            Shop Now
                        </Button>
                    </BannerContentBox>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
);

export default Banner;
