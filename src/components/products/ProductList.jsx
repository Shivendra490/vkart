import React from "react";
import styles from "./ProductList.module.css";


import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { wishListActions } from "../../store/wishListSlice";


const ProductList = ({productItems}) => {
 
  const dispatch=useDispatch()

  const addToCart=(item)=>{
    dispatch(cartActions.addItemToCart(item))
  }
  const addToWishList=(item)=>{
    dispatch(wishListActions.addItemToWishList(item))
  }
  
  const removeFromWishList=(id)=>{
    console.log(id,'here in xxxx')
    dispatch(wishListActions.removeItemFromWishList(id))
  }
  return (
    <div className={styles.productListWrapper}>
      {productItems.map((product) => {
        return (
          <Product onAddToWishList={addToWishList} onRemoveFromWishList={removeFromWishList} onAddToCart={addToCart} product={product} key={product.id}/>
        );
      })}
    </div>
  );
};

export default ProductList;
