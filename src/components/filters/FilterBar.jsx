import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark
    
  } from "@fortawesome/free-solid-svg-icons";

const FilterBar = () => {
    const [isShowFilter,setIsShowFilter]=useState(true)
    const removeFilter=()=>{
        setIsShowFilter(false)
    }
  return (
    <div className={`${styles.filterWrapper} ${isShowFilter ? styles.showFilter :styles.removeFilter}`}>
        <div className={styles.cross}>
            <div>Filters</div>
            <div onClick={removeFilter}><FontAwesomeIcon icon={faXmark} /></div>
        </div>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search Item"
          name='search'
        />
      </div>
      <div className={styles.categoryWrapper}>
        <select name='category' className={styles.category}>
          <option value="clothes">category</option>
          <option value="furnitures">hk</option>
        </select>
      </div>
      <div className={styles.ratingWrapper}>
        <select name='rating' className={styles.category}>
          <option value="clothes">rating</option>
          <option value="furnitures">hk</option>
        </select>
      </div>
      <div className={styles.minMaxWrapper}>
        <select name='min' className={styles.category}>
          <option value="clothes">min</option>
          <option value="furnitures">hk</option>
        </select>
        <select name='max' className={styles.category}>
          <option value="clothes">max</option>
          <option value="furnitures">hk</option>
        </select>
      </div>
      <div className={styles.sortWrapper}>
        <div>Sort Price : </div>
        <hr/>
        <label id='lth' className={styles.label}>
         
          <span>Low to high</span>
          <input type="radio" name="sort" id='lth'/>
        </label>
        
        <label htmlFor='htl' className={styles.label}>
          <span>High to Low</span>
          <input type="radio" name="sort" id='htl' />
        </label>
      </div>
      <div className={styles.resetWrapper}>
        <button className={styles.reset}>Reset Filters</button>
      </div>
    </div>
  );
};

export default FilterBar;
