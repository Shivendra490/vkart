import React, { useEffect, useState } from 'react'
import FilterBar from '../filters/FilterBar'
import styles from './Products.module.css'
import ProductList from './ProductList'
import productItems from "../../api/api";
import { useDispatch, useSelector } from 'react-redux';
import {filterActions} from "../../store/filterSlice"

const Products = () => {
  // const allItems=useSelector(state=>state.appItems.allItems)
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(appActions.addItems(productItems))
  // },[])
  const [allItems,setAllItems]=useState(productItems)
  const categoryList=allItems?.map((item)=>{
    return item.category
  })
  const uniqueCategoryList=['AllCategory',...new Set(categoryList)]
  
  const maxPrice=Math.max(...allItems?.map(item=>item.price))
  console.log('uq',maxPrice,uniqueCategoryList)
  
  return (
    <main className={styles.container}>
       <FilterBar categoryList={uniqueCategoryList} maxPrice={maxPrice}/> 
       <ProductList productItems={allItems}/>
       
    </main>
  )
}

export default Products
