import React, { useReducer } from 'react';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './Types';
import WishlistContext from './WishlistContext';
import WishlistReducer from './WishlistReducer';

const WishlistState = ({ children }) => {
    const initialState = {
        wishlists: [],
    };

    const [state, dispatch] = useReducer(WishlistReducer, initialState);

    const addToWishlist = (item) => {
        dispatch({ type: ADD_TO_WISHLIST, payload: item });
    };

    const removeFromWishlist = (id) => {
        dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
    };

    const isThisProductInWishlist = (id) =>
        state.wishlists.filter((item) => item.productId === id).length !== 0;

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
