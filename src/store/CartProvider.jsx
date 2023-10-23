import { useReducer } from "react"
import CartContext from "./CartContext"

const defaultCartState={totalCartItems:[],totalCartCost:0}

const cartReducerFunction=(state,action)=>{


}


const CartProvider=({children})=>{
const [cartState,dispatchCartAction]=useReducer(cartReducerFunction,defaultCartState)

const addItemToCart=(item)=>{

}

const removeItemFromCart=(id)=>{
    
}

const cartValues={
    cartItems:cartState.totalCartItems,
    totalCartItemsCost:cartState.totalCartCost,
    addItemToCart:addItemToCart,
    removeItemFromCart:removeItemFromCart
}

return <CartContext.Provider value={cartValues}>
    {children}
    </CartContext.Provider>
}

export default CartProvider