/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import classes from '../styles/Sidebar.module.css';

const Sidebar = ({ width, isSidebarOpen, setIsSidebarOpen, position, children }) => {
    // overflow is hidden and shown based on sidebar open and close
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        isSidebarOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [isSidebarOpen]);

    return (
        <div
            onClick={() => setIsSidebarOpen(false)}
            className={`${classes.sidebar} ${isSidebarOpen && classes.sidebarOpen}`}
        >
            <div
                style={{ width }}
                onClick={(e) => e.stopPropagation()}
                className={`${classes.sidebarBody} ${
                    position === 'left' && classes.sidebarPositionLeft
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
