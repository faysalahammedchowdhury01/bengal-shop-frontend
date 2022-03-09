import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './Types';

const WishlistReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            const newWishlists = [...state.wishlists];
            const newItem = { ...action.payload };
            const isExist =
                newWishlists.findIndex((item) => item.productId === newItem.productId) !== -1;
            if (isExist) return state;
            return {
                ...state,
                wishlists: [...state.wishlists, newItem],
            };
        }
        case REMOVE_FROM_WISHLIST: {
            return {
                ...state,
                wishlists: state.wishlists.filter((item) => item.productId !== action.payload),
            };
        }

        default:
            return state;
    }
};

export default WishlistReducer;
