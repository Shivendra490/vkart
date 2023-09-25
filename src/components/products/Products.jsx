import React from 'react'
import FilterBar from '../filters/FilterBar'
import styles from './Products.module.css'
import ProductList from './ProductList'

const Products = () => {
  return (
    <main className={styles.container}>
       <FilterBar/>
       <ProductList/>
       
    </main>
  )
}

export default Products
