import React, { useContext } from 'react';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import CartContext from '../contexts/cart/CartContext';
import classes from '../styles/CartItem.module.css';

const CartItem = ({ cartItem }) => {
    const { productId, img, name, price, quantity } = cartItem;
    const { removeItemFromCart, addOneQuantity, subOneQuantity } = useContext(CartContext);

    return (
        <div className={classes.cartItem}>
            <div className={classes.itemQuantity}>
                <button
                    type="button"
                    onClick={() => addOneQuantity(productId)}
                    className={classes.quantityAction}
                >
                    <AiOutlinePlus />
                </button>
                <span className={classes.quantity}>{quantity}</span>
                <button
                    type="button"
                    onClick={() => subOneQuantity(productId)}
                    disabled={quantity === 1 && true}
                    className={classes.quantityAction}
                >
                    <AiOutlineMinus />
                </button>
            </div>
            <div className={classes.itemDetails}>
                <img src={img} alt={name} />
                <div className={classes.itemNameAndPrice}>
                    <h6>{name}</h6>
                    <h5>
                        <span>{price}Tk</span>
                        <FaTimes />
                        <span>{quantity}</span>
                    </h5>
                </div>
            </div>
            <button
                type="button"
                onClick={() => removeItemFromCart(productId)}
                className={classes.itemRemove}
            >
                <AiOutlineDelete />
            </button>
        </div>
    );
};

export default CartItem;
