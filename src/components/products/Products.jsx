import React, { useEffect, useState } from 'react'
import FilterBar from '../filters/FilterBar'
import styles from './Products.module.css'
import ProductList from './ProductList'
import productItems from "../../api/api";
import { useDispatch, useSelector } from 'react-redux';
import {appActions} from "../../store/appSlice"

const Products = () => {
  // const allItems=useSelector(state=>state.appItems.allItems)
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(appActions.addItems(productItems))
  // },[])
  const [allItems,setAllItems]=useState(productItems)
  
  return (
    <main className={styles.container}>
       <FilterBar/> 
       <ProductList productItems={allItems}/>
       
    </main>
  )
}

export default Products
