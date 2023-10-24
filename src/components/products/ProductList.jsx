import React from "react";
import styles from "./ProductList.module.css";

import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { wishListActions } from "../../store/wishListSlice";

const ProductList = ({ productItems }) => {
  const dispatch = useDispatch();
  const { sort, category, rating, searchTerm,min,max } = useSelector(
    (state) => state.filter
  );
  console.log('listprod',rating,sort,category,searchTerm,min,max)

  const addToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };
  const addToWishList = (item) => {
    dispatch(wishListActions.addItemToWishList(item));
  };

  const removeFromWishList = (id) => {
    console.log(id, "here in xxxx");
    dispatch(wishListActions.removeItemFromWishList(id));
  };
  return (
    <div className={styles.productListWrapper}>
      {productItems
        ?.filter((item) => {
          if (!searchTerm) {
            return item;
          } else if (searchTerm) {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
          }
          return item;
        })
        .filter((item) => {
          if (category === "AllCategory") {
            return item;
          } else if (category === item.category) {
            return category === item.category;
          }
        })
        .filter((item) => {
          if (rating === "All") {
            return item;
          } else {
            return item.rating >= rating;
          }
        })
        .filter((item) => {
          // let tempMax=0
          // if(max===4000){
          //   tempMax=70000
          // }else{
          //   tempMax=max
          // }
          return item.price >= min && item.price <=max
        })
        .sort((a, b) => {
          if (sort === "ascending") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        })
        .map((item) => {
          return (
            <Product
              onAddToWishList={addToWishList}
              onRemoveFromWishList={removeFromWishList}
              onAddToCart={addToCart}
              product={item}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default ProductList;

// {productItems.map((product) => {
//   return (
//     <Product onAddToWishList={addToWishList} onRemoveFromWishList={removeFromWishList} onAddToCart={addToCart} product={product} key={product.id}/>
//   );
// })}
