import React, { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import CartContext from '../contexts/cart/CartContext';
import classes from '../styles/Cart.module.css';
import Button from './Button';
import CartItem from './CartItem';
import Sidebar from './Sidebar';

const Cart = () => {
    const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
    const { cart } = useContext(CartContext);

    // total amount
    const total = cart.reduce((prev, current) => prev + current.price * current.quantity, 0);

    return (
        <div className={classes.cart}>
            {/* button */}
            <button
                type="button"
                onClick={() => setIsCartSidebarOpen(true)}
                className={classes.cartBtn}
            >
                <BiShoppingBag fontSize="22px" />
                <span className={classes.text}>Cart</span>
                <span className={classes.cartQuantity}>{cart.length}</span>
            </button>
            {/* sidebar */}
            <Sidebar
                isSidebarOpen={isCartSidebarOpen}
                setIsSidebarOpen={setIsCartSidebarOpen}
                position="right"
            >
                <div
                    className={`${classes.cartSidebarMain}  ${
                        cart.length === 0 && classes.emptyCart
                    }`}
                >
                    {/* cart header */}
                    <div className={classes.cartSidebarHeader}>
                        <div>
                            <h4>
                                <AiOutlineShoppingCart fontSize="22px" />
                                <span>
                                    {cart.length} Item{cart.length > 1 && 's'}
                                </span>
                            </h4>
                        </div>
                        <button type="button" onClick={() => setIsCartSidebarOpen(false)}>
                            <FaTimes fontSize="18px" />
                        </button>
                    </div>
                    {/* cart items */}
                    <div className={`${classes.cartItems}`}>
                        {cart.length > 0 ? (
                            cart.map((cartItem) => (
                                <CartItem key={cartItem.productId} cartItem={cartItem} />
                            ))
                        ) : (
                            <h4>Your shopping bag is empty. Start shopping</h4>
                        )}
                    </div>
                    {/* cart footer or checkout */}
                    {cart.length > 0 && (
                        <div className={classes.cartSidebarFooter}>
                            <Button
                                onClick={() => setIsCartSidebarOpen(false)}
                                link="checkout"
                                fullWidth
                                theme="primary"
                            >
                                Checkout <span>({total}Tk)</span>
                            </Button>
                        </div>
                    )}
                </div>
            </Sidebar>
        </div>
    );
};

export default Cart;
