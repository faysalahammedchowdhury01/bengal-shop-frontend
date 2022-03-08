import React from 'react';
import { Link } from 'react-router-dom';
import appStoreImg from '../assets/images/app-store.png';
import logo from '../assets/images/logo.svg';
import partnersImg from '../assets/images/partners.png';
import playStoreImg from '../assets/images/play-store.png';
import classes from '../styles/Footer.module.css';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
    // about us links
    const aboutUsLinks = [
        { name: 'About us', path: 'about-us' },
        { name: 'Contact', path: 'contact' },
        {
            name: 'Career',
            path: '//bengal-shop-faysal-01.netlify.app',
            external: true,
        },
        { name: 'Terms & Conditions', path: 'terms-of-service' },
        { name: 'Category', path: 'category' },
    ];

    // info links
    const infoLinks = [
        { name: 'Information', path: 'information' },
        { name: 'Shipping', path: 'shipping' },
        { name: 'Payment', path: 'payment' },
        { name: 'Refund Policy', path: 'refund-policy' },
        { name: 'Blogs', path: 'blogs' },
    ];

    return (
        <footer className={classes.footer}>
            <div className="container">
                {/* footer widget */}
                <div className={classes.footerWidget}>
                    <div className={classes.footerLogoAndText}>
                        <Link to="/">
                            <img className={classes.footerLogo} src={logo} alt="Bengal Shop Logo" />
                        </Link>
                        <p className={classes.footerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam
                            ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget
                            parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et
                            dictum lacus morbi nec accumsan a in.
                        </p>
                        <div className={classes.downloadMethods}>
                            <Link to="/">
                                <img src={appStoreImg} alt="App Store" />
                            </Link>
                            <Link to="/">
                                <img src={playStoreImg} alt="Play Store" />
                            </Link>
                        </div>
                    </div>
                    <FooterLinks header="about us" links={aboutUsLinks} />
                    <FooterLinks header="info" links={infoLinks} />
                </div>
                {/* footer copyright, icons and partners */}
                <div className={classes.footerCopyrightIconsAndPartners}>
                    <div className={classes.socialLinksBox}>
                        <SocialLinks />
                    </div>
                    <p className={classes.copyrightText}>
                        @2022 Copyright All Right Reserved by Bengal Shop
                    </p>
                    <div className={classes.partnersBox}>
                        <img className={classes.partnersImg} src={partnersImg} alt="partners" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
