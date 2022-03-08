/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from '../styles/Modal.module.css';

const Modal = ({
    width,
    height,
    maxHeight,
    showModal,
    setShowModal,
    children,
    background,
    showCloseBtn = true,
}) => {
    // overflow is hidden and shown based on modal open and close
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        showModal
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [showModal]);

    return (
        <div
            onClick={() => setShowModal(false)}
            className={`${classes.modal} ${showModal && classes.modalOpen}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={classes.modalBody}
                style={{
                    background,
                }}
            >
                {showCloseBtn && (
                    <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className={classes.closeModalBtn}
                    >
                        <FaTimes />
                    </button>
                )}
                <div
                    className={classes.modalContent}
                    style={{
                        width,
                        height,
                        maxHeight,
                        overflowY: 'auto',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
