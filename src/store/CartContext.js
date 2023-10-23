import { createContext } from "react";

const CartContext=createContext({
    cartItems:[],
    totalCartItemsCost:0,
    addItemToCart:(item)=>{},
    removeItemFromCart:(id)=>{},
    clearCart:()=>{}

    
})

export default CartContext;