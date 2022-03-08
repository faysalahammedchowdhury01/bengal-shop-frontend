import React, { useContext, useState } from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Rating from 'react-rating';
import CartContext from '../contexts/cart/CartContext';
import classes from '../styles/ProductCard.module.css';
import Button from './Button';
import ProductDetailsModal from './ProductDetailsModal';

const ProductCard = ({ product }) => {
    const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
    const { cart, addToCart, addOneQuantity, subOneQuantity, removeItemFromCart } =
        useContext(CartContext);
    const { productId, name, img, price, haveDiscount, priceAfterDiscount, rating, ratingGiven } =
        product;

    // check this product is avaiable in cart related work
    const [thisProductInCart] = cart.filter((cartItem) => cartItem.productId === productId);
    const isProductInCart = thisProductInCart !== undefined;
    const quantityOfThisProductInCart = thisProductInCart?.quantity;

    // decrease quantity and when quantity is 1 then remove the item from cart
    const decreaseQuantity = (id) => {
        if (quantityOfThisProductInCart === 1) {
            removeItemFromCart(id);
        } else {
            subOneQuantity(id);
        }
    };

    return (
        <div>
            <div className="group">
                <div className={classes.thumbnailBox}>
                    <img src={img} alt="" />
                    <div
                        className={`group-hover:opacity-100 group-hover:visible ${classes.productThumbnailOverlay}`}
                    >
                        {isProductInCart ? (
                            <div className={classes.quantityBox}>
                                <button type="button" onClick={() => decreaseQuantity(productId)}>
                                    <AiOutlineMinus />
                                </button>
                                <span className={classes.quantity}>
                                    {quantityOfThisProductInCart}
                                </span>
                                <button type="button" onClick={() => addOneQuantity(productId)}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => addToCart(product)}
                                className={classes.addToShoppingBagOverlay}
                            >
                                Add to Shopping Bag
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={() => setShowProductDetailsModal(true)}
                            className={classes.productDetailsBtn}
                        >
                            <span>Details</span>
                            <HiOutlineArrowNarrowRight fontSize="20px" />
                        </button>
                    </div>
                </div>
                <div className={classes.productInfo}>
                    <div className={classes.rating}>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<AiOutlineStar className="text-[#fabe50]" />}
                            fullSymbol={<AiFillStar className="text-[#fabe50]" />}
                            readonly
                        />
                        <p>({ratingGiven})</p>
                    </div>
                    <h3 className={classes.productName}>{name}</h3>
                    <div className={classes.productPrice}>
                        {haveDiscount && <h3>{priceAfterDiscount} BTD</h3>}
                        <h3 className={haveDiscount && classes.oldPrice}>{price} BTD</h3>
                    </div>
                    <div className={classes.productBtnBox}>
                        {isProductInCart ? (
                            <Button
                                onClick={() => addOneQuantity(productId)}
                                fullWidth
                                roundedFull
                                theme="light"
                                font="semibold"
                            >
                                {quantityOfThisProductInCart} in Cart
                            </Button>
                        ) : (
                            <Button
                                onClick={() => addToCart(product)}
                                fullWidth
                                roundedFull
                                theme="primaryOutline"
                                font="semibold"
                            >
                                Add to Cart
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <ProductDetailsModal
                product={product}
                isProductInCart={isProductInCart}
                quantityOfThisProductInCart={quantityOfThisProductInCart}
                showProductDetailsModal={showProductDetailsModal}
                setShowProductDetailsModal={setShowProductDetailsModal}
            />
        </div>
    );
};

export default ProductCard;
