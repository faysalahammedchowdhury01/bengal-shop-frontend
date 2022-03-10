import React, { useContext, useState } from 'react';
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineHeart,
    AiOutlineMinus,
    AiOutlinePlus,
    // eslint-disable-next-line prettier/prettier
    AiOutlineStar
} from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Rating from 'react-rating';
import CartContext from '../contexts/cart/CartContext';
import WishlistContext from '../contexts/wishlist/WishlistContext';
import classes from '../styles/ProductCard.module.css';
import Button from './Button';
import ProductDetailsModal from './ProductDetailsModal';

const ProductCard = ({ product }) => {
    const { productId, name, img, price, haveDiscount, priceAfterDiscount, rating, ratingGiven } =
        product;

    const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);

    const {
        addToCart,
        addOneQuantity,
        subOneQuantity,
        removeItemFromCart,
        isThisProductInCart,
        quantityOfThisProductInCart,
    } = useContext(CartContext);

    const { addToWishlist, removeFromWishlist, isThisProductInWishlist } =
        useContext(WishlistContext);

    // decrease quantity and when quantity is 1 then remove the item from cart
    const decreaseQuantity = (id) => {
        if (quantityOfThisProductInCart(productId) === 1) {
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
                        <div className={classes.wishlistIconBox}>
                            {isThisProductInWishlist(productId) ? (
                                <button
                                    type="button"
                                    onClick={() => removeFromWishlist(productId)}
                                    title="In Wishlist"
                                >
                                    <AiFillHeart color="red" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => addToWishlist(product)}
                                    title="Add to Wishlist"
                                >
                                    <AiOutlineHeart />
                                </button>
                            )}
                        </div>
                        {isThisProductInCart(productId) ? (
                            <div className={classes.quantityBox}>
                                <button type="button" onClick={() => decreaseQuantity(productId)}>
                                    <AiOutlineMinus />
                                </button>
                                <span className={classes.quantity}>
                                    {quantityOfThisProductInCart(productId)}
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
                        {isThisProductInCart(productId) ? (
                            <Button
                                onClick={() => addOneQuantity(productId)}
                                fullWidth
                                roundedFull
                                theme="light"
                                font="semibold"
                            >
                                {quantityOfThisProductInCart(productId)} in Cart
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
                showProductDetailsModal={showProductDetailsModal}
                setShowProductDetailsModal={setShowProductDetailsModal}
            />
        </div>
    );
};

export default ProductCard;
