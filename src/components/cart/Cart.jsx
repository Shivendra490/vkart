import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../products/Product";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {rupee} from "../../helper/index"
{
  /* <FontAwesomeIcon icon="fa-solid fa-trash" /> */
}

import { faTrash,faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../../store/cartSlice";

// const Cart = () => {
//     const cartItems=useSelector(state=>state.cart.totalCartItems)
//   return (
//     <div>
//       {cartItems.map(product=><Product product={product}/>)}
//     </div>
//   )
// }

// export default Cart

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItemList);
  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  
  console.log('cartItems',cartItems)
  const dispatch=useDispatch()
  const addToCartClickHandler=(item)=>{
    dispatch(cartActions.addItemToCart(item))
  }
  const removeFromCartClickHandler=(id)=>{
    console.log('itme',id)
    dispatch(cartActions.removeItemFromCart(id))
  }
  
  const removeCartUnitItem=(item)=>{
    
    dispatch(cartActions.removeCartUnitItem(item))
  }
  const clearCartHandler=()=>{
    
    dispatch(cartActions.clearCart())
  }
  return (
    <>
      {cartItems.length===0 && <div className={styles.cartHeading}>Cart Is Empty</div>}
      <div className={styles.cartContainer}>
        <div className={styles.cartItemsContainer}>
          {cartItems?.map((product) => (
            <div className={styles.cartProduct} key={product?.id}>
              <div className={styles.imageWrapper}>
                <img
                  src={product?.image}
                  className={styles.cartImage}
                  alt="img"
                />
              </div>
              <div className={styles.productName}>{product?.name}</div>
              <div className={styles.productPrice}>{rupee.format(product?.price)}</div>
              <div className={styles.quantityWrapper}>
                <div className={styles.add}>
                  <button className={styles.addRemoveBtn} onClick={()=>addToCartClickHandler(product)}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <span className={styles.qty}>{product?.totalQuantity}</span>
                <div className={styles.remove}>
                  <button className={styles.addRemoveBtn} onClick={()=>removeFromCartClickHandler(product?.id)}><FontAwesomeIcon icon={faMinus} /></button>
                </div>
                
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={styles.trash}
                    onClick={()=>removeCartUnitItem(product)}
                  />
               
              </div>
              <div className={styles.totalItemPrice}>{rupee.format(product?.totalPrice)}</div>
            </div>
          ))}
        </div>
    
      </div>
      <div className={styles.cartSummaryCard}>
        <div className={styles.totalCartQuantity}>
          <span>
            CartItems : <b>{totalCartQuantity || 0}</b>
          </span>
        </div>
        <div className={styles.totalCartCost}>
          <span>
            Amount :<b>{rupee.format(totalCartPrice) || 0}</b>
          </span>
        </div>

        <button className={styles.cartClearBtn} onClick={clearCartHandler} disabled={!totalCartQuantity}>
          Clear Cart
        </button>

        <button
          className={styles.cartContinueBtn} disabled={!totalCartQuantity}>
        
        
          Continue
        </button>
      </div>
    </>
  );
};

export default Cart;
