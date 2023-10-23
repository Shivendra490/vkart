import React from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rupee } from "../../helper";

const Product = ({
  product,
  onAddToCart,
  onAddToWishList,
  onRemoveFromWishList,
}) => {
  const cartItems = useSelector((state) => state.cart.cartItemList);
  const navigate = useNavigate();
  const wishListItems = useSelector(
    (state) => state.wishListItems.totalWishListItems
  );
  const isAddedToCart = cartItems.find((element) => element.id === product.id);
  const isAddedToWishList = wishListItems.find(
    (element) => element.id === product.id
  );
  console.log(isAddedToWishList?.id, "jerhere i prod");

  const addToCartClickHandler = () => {
    onAddToCart(product);
  };
  const addToWishListClickHandler = () => {
    onAddToWishList(product);
  };

  const removeFromWishListClickHandler = () => {
    onRemoveFromWishList(product.id);
  };

  return (
    <div className={styles.productCard} key={product.id}>
      <div className={styles.productImageWrapper}>
        <img src={product.image} className={styles.productImage} />
      </div>

      <div className={styles.productContentWrapper}>
        <div className={styles.favWrapper}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: `${isAddedToWishList?.id ? "red" : "grey"}`,
              fontSize: "1.5rem",
            }}
            onClick={
              isAddedToWishList?.id
                ? removeFromWishListClickHandler
                : addToWishListClickHandler
            }
          />
        </div>
        <div className={styles.nameWrapper}>
          <p className={styles.ellipsis} title={product.name}>
            {product.name}
          </p>
        </div>
        <div className={styles.priceWrapper}>
          <div>{rupee.format(product?.price)}</div>
        </div>
        <div className={styles.ratingWrapper}>
          {product.rating}
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ecbe41", fontSize: "1.5rem" }}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.buttonElement} ${
              isAddedToCart?.id ? styles.buttonGoToCart : ""
            }`}
            onClick={
              isAddedToCart?.id
                ? () => navigate("/cart")
                : addToCartClickHandler
            }
          >
            {isAddedToCart?.id ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
