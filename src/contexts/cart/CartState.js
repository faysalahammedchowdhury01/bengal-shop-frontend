import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_ONE_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_ONE_QUANTITY } from './Types';

const CartState = ({ children }) => {
    const initalState = {
        cart: [],
    };

    const [state, dispatch] = useReducer(CartReducer, initalState);

    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item });
    };

    const removeItemFromCart = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id });
    };

    const addOneQuantity = (id) => {
        dispatch({ type: ADD_ONE_QUANTITY, payload: id });
    };

    const subOneQuantity = (id) => {
        dispatch({ type: SUB_ONE_QUANTITY, payload: id });
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removeItemFromCart,
                addOneQuantity,
                subOneQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartState;
