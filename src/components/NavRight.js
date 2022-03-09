import React, { useRef, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { FiLogOut } from 'react-icons/fi';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import classes from '../styles/NavRight.module.css';
import Account from './Account';
import Cart from './Cart';
import NavBtn from './NavBtn';
import WishlistIcon from './WishlistIcon';

const NavRight = () => {
    const [showNavRight, setShowNavRight] = useState(false);

    // close nav categories when clicked on outside
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => {
        setShowNavRight(false);
    });

    return (
        <div ref={wrapperRef} className={classes.navRightMainBox}>
            <HamburgerMenu
                className={classes.menuBars}
                isOpen={showNavRight}
                menuClicked={() => setShowNavRight((prevState) => !prevState)}
                width={25}
                height={15}
                strokeWidth={2}
                rotate={0}
                color="#333333"
                borderRadius={0}
                animationDuration={0.3}
            />
            <div
                className={`${
                    showNavRight ? classes.showNavRightElements : classes.hideNavRightElements
                } ${classes.navRightElements}`}
            >
                <WishlistIcon />
                <Cart />
                {/* show based in auth */}
                <Account />
                <NavBtn text="Logout" icon={<FiLogOut fontSize="20px" />} />
            </div>
        </div>
    );
};

export default NavRight;
