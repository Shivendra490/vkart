import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../products/Product'

const WishList = () => {
    const wishListItems=useSelector(state=>state.wishListItems.totalWishListItems)
  return (
    <div>
      {wishListItems?.map(product=><Product product={product}/>)}
    </div>
  )
}

export default WishList
