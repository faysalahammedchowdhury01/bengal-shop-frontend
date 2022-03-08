import { ADD_ONE_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_ONE_QUANTITY } from './Types';

const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newCart = [...state.cart];
            const newItem = { ...action.payload };
            const isExist =
                newCart.findIndex((item) => item.productId === newItem.productId) !== -1;
            if (isExist) return state;
            newItem.quantity = 1;
            return {
                ...state,
                cart: [...state.cart, newItem],
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.productId !== action.payload),
            };
        }

        case ADD_ONE_QUANTITY: {
            const newCart = [...state.cart];
            const cartItemIndex = newCart.findIndex((item) => item.productId === action.payload);
            const newItem = { ...newCart[cartItemIndex] };
            newItem.quantity += 1;
            newCart[cartItemIndex] = newItem;
            return {
                ...state,
                cart: [...newCart],
            };
        }

        case SUB_ONE_QUANTITY: {
            const newCart = [...state.cart];
            const cartItemIndex = newCart.findIndex((item) => item.productId === action.payload);
            const newItem = { ...newCart[cartItemIndex] };
            if (newItem.quantity > 1) {
                newItem.quantity -= 1;
            } else {
                return state;
            }
            newCart[cartItemIndex] = newItem;
            return {
                ...state,
                cart: [...newCart],
            };
        }

        default:
            return state;
    }
};

export default CartReducer;
