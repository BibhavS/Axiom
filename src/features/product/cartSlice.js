import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
           const newItem = {...action.payload, quantity: 1}

           const existingItemIndex = state.cartProducts.findIndex(item => item.id === newItem.id)

           if(existingItemIndex == -1){
            state.cartProducts.push(newItem);
           }
           else{
            alert("This item is already in your cart");
           }
        },

        removeProduct: (state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item.id != action.payload)
        },

        increaseQuantity: (state, action) => {
            state.cartProducts.forEach(item => {
                if(action.payload === item.id){
                    item.quantity += 1
                }
            })
        },

        decreaseQuantity: (state, action) => {
            state.cartProducts.forEach(item => {
                if(action.payload === item.id && item.quantity >1){
                    item.quantity -= 1
                }
            })

        }
    }
})

export const {addProduct, removeProduct, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer
