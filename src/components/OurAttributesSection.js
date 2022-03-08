import React from 'react';
import authenticProductsImg from '../assets/images/authentic-products.svg';
import bestPricesAndOffersImg from '../assets/images/best-prices-and-offers.svg';
import customerSupportImg from '../assets/images/customer-support.svg';
import securePaymentsImg from '../assets/images/secure-payments.svg';
import classes from '../styles/OurAttributesSection.module.css';
import Attribute from './Attribute';

const OurAttributesSection = () => (
    <section className={classes.ourAttributesSection}>
        <div className="container">
            <div className={classes.attributes}>
                <Attribute
                    img={customerSupportImg}
                    title="24 Customer Support"
                    subTitle="Contact us 24 hours"
                />
                <Attribute
                    img={authenticProductsImg}
                    title="Authentic Products"
                    subTitle="Contact us 24 hours"
                />
                <Attribute
                    img={securePaymentsImg}
                    title="Secure Payment"
                    subTitle="Contact us 24 hours"
                />
                <Attribute
                    img={bestPricesAndOffersImg}
                    title="Best Prices & Offers"
                    subTitle="Contact us 24 hours"
                />
            </div>
        </div>
    </section>
);

export default OurAttributesSection;
