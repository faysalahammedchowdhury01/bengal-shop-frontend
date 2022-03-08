import React from 'react';
import { AiOutlineSkype } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import classes from '../styles/SocialLinks.module.css';

const SocialLinks = () => {
    // social links
    const socialLinks = [
        {
            name: 'Facebook',
            link: 'https://facebook.com/faysalahammedchowdhury',
            icon: <FaFacebookF />,
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/faysalahammedchowdhury',
            icon: <FaInstagram />,
        },
        {
            name: 'Twitter',
            link: 'https://instagram.com/faysalahammedchowdhury',
            icon: <FaTwitter />,
        },
        {
            name: 'Skype',
            link: 'https://instagram.com/faysalahammedchowdhury',
            icon: <AiOutlineSkype />,
        },
    ];

    return (
        <div className={classes.socialLinks}>
            {socialLinks.map((socialLink) => (
                <a
                    className={classes.socialLink}
                    key={socialLink.name}
                    href={socialLink.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {socialLink.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
