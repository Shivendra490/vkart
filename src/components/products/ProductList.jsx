import React from "react";
import styles from "./ProductList.module.css";
import productItems from "../../api/api";

const ProductList = () => {
  return (
    <div className={styles.productListWrapper}>
      {productItems?.map((product) => {
        return (
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <img src={product.image} className={styles.productImage} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
