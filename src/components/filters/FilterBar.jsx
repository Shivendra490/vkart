import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filterSlice";

const minMaxPrice=[100,1000,2000,3000,4000]

const FilterBar = ({ categoryList, maxPrice }) => {
  const dispatch=useDispatch()
  const { sort, category, rating, searchTerm,min,max } = useSelector(
    (state) => state.filter
  );
  const [isShowFilter, setIsShowFilter] = useState(true);
  // const [minimum,setMinimum]=useState(100)
  const removeFilter = () => {
    console.log("hhhhhhhh");
    setIsShowFilter(false);
  };
  const minHandler=(e)=>{
    // setMinimum(e.target.value)
    console.log('min',e.target.value)
    dispatch(filterActions.setMin(e.target.value))

  }
  
  const maxHandler=(e)=>{
    console.log('max',e.target.value)
    dispatch(filterActions.setMax(e.target.value))
  }
  
  const sortHandler=(e)=>{
    console.log('sort',e.target.value)
    dispatch(filterActions.setSort(e.target.value))
  }

  const ratingChangeHandler=(e)=>{
    console.log('rating',e.target.value)
    dispatch(filterActions.setRating(e.target.value))
  }

  const searchTermHandler=(e)=>{
    console.log('search',e.target.value)
    dispatch(filterActions.setSearchTerm(e.target.value))
  }

  const maxPriceIndex=minMaxPrice?.findIndex(el=>el>min)

  const categoryChangeHandler = (e) => {
    console.log('category',e.target.value)
    dispatch(filterActions.setCategory(e.target.value))
  };

  const resetClickHandler=(e)=>{
    console.log('reset',e)
    dispatch(filterActions.resetFilter())
  }

  return (
    <div
      className={`${styles.filterWrapper} ${
        isShowFilter ? styles.showFilter : styles.removeFilter
      }`}
    >
      <div className={styles.cross}>
        <div>Filters</div>
        <div className={styles.x} onClick={removeFilter}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search Item"
          name="search"
          onChange={searchTermHandler}
          value={searchTerm}
          
        />
      </div>
      <div className={styles.categoryWrapper} >
        <select name="category" className={styles.category} value={category} onChange={categoryChangeHandler}>
          {categoryList?.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className={styles.ratingWrapper} >
        <select name="rating" className={styles.category} value={rating} onChange={ratingChangeHandler}>
        <option value="All">All stars</option>
          <option value={2}>2 stars and above</option>
          <option value={3}>3 stars and above</option>
          <option value={4}>4 star and above</option>
        </select>
      </div>
      <div className={styles.minMaxWrapper}>
        <select name="min" className={styles.category} value={min} onChange={minHandler}>
          {minMaxPrice?.map((price,index)=><option value={price}>{price===100 ? 'Min' :price}</option>)}
          
          
        </select>
        <select name="max" className={styles.category} value={max} onChange={maxHandler}>
        <option value={maxPrice}>Max</option>
          {minMaxPrice?.slice(maxPriceIndex).map((price,index)=><option value={price}>{price===4000? `${price}+` : price}</option>)}
          
        </select>
      </div>
      <div className={styles.sortWrapper}>
        <div>Sort Price : </div>
        <hr />
        <label id="lth" className={styles.label}>
          <span>Low to high</span>
          <input type="radio" name="sort" id="lth" value={'ascending'} onChange={sortHandler}/>
        </label>

        <label htmlFor="htl" className={styles.label}>
          <span>High to Low</span>
          <input type="radio" name="sort" id="htl" value={'descending'} onChange={sortHandler}/>
        </label>
      </div>
      <div className={styles.resetWrapper}>
        <button className={styles.reset} onClick={resetClickHandler}>Reset Filters</button>
      </div>
    </div>
  );
};

export default FilterBar;
