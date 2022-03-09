import React, { useReducer } from 'react';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './Types';
import WishlistContext from './WishlistContext';
import WishlistReducer from './WishlistReducer';

const WishlistState = ({ children }) => {
    const initialState = {
        wishlists: [
            {
                productId: '1',
                img: 'https://raw.githubusercontent.com/faysalahammedchowdhury01/bengal-shop-frontend/main/src/assets/images/pomegranate.png',
                name: 'Product Name - 1',
                price: 750,
                haveDiscount: true,
                priceAfterDiscount: 550,
                rating: 5,
                ratingGiven: 220,
            },
            {
                productId: '2',
                img: 'https://raw.githubusercontent.com/faysalahammedchowdhury01/bengal-shop-frontend/main/src/assets/images/pomegranate.png',
                name: 'Product Name - 2',
                price: 700,
                haveDiscount: true,
                priceAfterDiscount: 600,
                rating: 4.5,
                ratingGiven: 150,
            },
            {
                productId: '3',
                img: 'https://raw.githubusercontent.com/faysalahammedchowdhury01/bengal-shop-frontend/main/src/assets/images/pomegranate.png',
                name: 'Product Name - 3',
                price: 450,
                haveDiscount: true,
                priceAfterDiscount: 400,
                rating: 5,
                ratingGiven: 262,
            },
        ],
    };

    const [state, dispatch] = useReducer(WishlistReducer, initialState);

    const addToWishlist = (item) => {
        dispatch({ type: ADD_TO_WISHLIST, payload: item });
    };

    const removeFromWishlist = (id) => {
        dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
    };

    const isThisProductInWishlist = (productId) =>
        state.wishlists.filter((item) => item.productId === productId).length !== 0;

    return (
        <WishlistContext.Provider
            value={{
                wishlists: state.wishlists,
                addToWishlist,
                removeFromWishlist,
                isThisProductInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistState;
