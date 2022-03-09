import React, { useContext } from 'react';
import {
    AiFillEye,
    AiFillHeart,
    AiFillStar,
    AiOutlineHeart,
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineShareAlt,
    // eslint-disable-next-line prettier/prettier
    AiOutlineStar
} from 'react-icons/ai';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/cart/CartContext';
import WishlistContext from '../contexts/wishlist/WishlistContext';
import classes from '../styles/ProductDetailsModal.module.css';
import Button from './Button';
import Modal from './Modal';

const ProductDetailsModal = ({
    product,
    isProductInCart,
    quantityOfThisProductInCart,
    showProductDetailsModal,
    setShowProductDetailsModal,
}) => {
    const { addToCart, addOneQuantity, subOneQuantity } = useContext(CartContext);
    const { addToWishlist, isThisProductInWishlist } = useContext(WishlistContext);
    const { productId, img, name, rating, ratingGiven, price, priceAfterDiscount } = product;

    return (
        <Modal
            width="900px"
            height="auto"
            maxHeight="95vh"
            showModal={showProductDetailsModal}
            setShowModal={setShowProductDetailsModal}
        >
            <div className={classes.productDetailsModal}>
                <div className={classes.productImgBox}>
                    <img src={img} alt={name} />
                </div>
                <div className={classes.productDetailsSide}>
                    <div className={classes.statusBox}>
                        <p className={classes.status}>STATUS</p>
                        <p className={`${classes.status} ${classes.statusGreen}`}>In Stock</p>
                    </div>
                    <div>
                        <h3 className={classes.productName}>{name}</h3>
                    </div>
                    <div className={classes.ratingBox}>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<AiOutlineStar className="text-[#fabe50]" />}
                            fullSymbol={<AiFillStar className="text-[#fabe50]" />}
                            readonly
                        />
                        <p>{ratingGiven} reviews</p>
                    </div>
                    <div className={classes.priceBox}>
                        <h2 className={classes.price}>{priceAfterDiscount} BTD</h2>
                        <h2 className={classes.oldPrice}>{price} BTD</h2>
                    </div>
                    <div>
                        <p className={classes.smallGreyText}>20 Products sold in last 12 hours</p>
                    </div>
                    {isProductInCart && (
                        <div className={classes.quantityBoxMain}>
                            <div>
                                <h4 className={classes.quantityText}>QUANTITY</h4>
                            </div>
                            <div className={classes.quantityBox}>
                                <button
                                    type="button"
                                    disabled={quantityOfThisProductInCart === 1}
                                    onClick={() => subOneQuantity(productId)}
                                >
                                    <AiOutlineMinus />
                                </button>
                                <span className={classes.quantity}>
                                    {quantityOfThisProductInCart}
                                </span>
                                <button type="button" onClick={() => addOneQuantity(productId)}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <h4>
                                <p className={classes.smallMuteText}>Only 10 item left</p>
                            </h4>
                        </div>
                    )}
                    <div className={classes.btnBox}>
                        {isProductInCart || (
                            <Button
                                onClick={() => addToCart(product)}
                                roundedFull
                                fullWidth
                                theme="primary"
                            >
                                Add to Cart
                            </Button>
                        )}
                        <Button roundedFull fullWidth theme="light">
                            Buy Now
                        </Button>
                    </div>
                    <div className={classes.wishlistAndShareBox}>
                        {isThisProductInWishlist(productId) ? (
                            <button type="button" className={classes.item}>
                                <AiFillHeart color="red" fontSize="18px" />
                                <span>In Wishlist</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => addToWishlist(product)}
                                type="button"
                                className={classes.item}
                            >
                                <AiOutlineHeart fontSize="18px" />
                                <span>Add to Wishlist</span>
                            </button>
                        )}

                        <button type="button" className={classes.item}>
                            <AiOutlineShareAlt fontSize="18px" />
                            <span>Share</span>
                        </button>
                    </div>
                    <div className={classes.viewMoreDetailsBox}>
                        <Link to="/" className={classes.btn}>
                            <AiFillEye fontSize="20px" />
                            <p className={classes.text}>View more details</p>
                        </Link>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProductDetailsModal;
