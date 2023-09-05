import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],


}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addItem :{
            reducer(state , action){
                const newItem = action.payload;
                state.cartItems.push(newItem);   
        }   
        }, removeItem:{
            reducer (state, action){
                const itemIdToRemove = action.payload; 
                const itemIndexToRemove = state.cartItems.findIndex(item => item.id === itemIdToRemove);
                
                if (itemIndexToRemove !== -1) {
                  state.cartItems.splice(itemIndexToRemove, 1);
                };
            
            }
        }, 
       
    },
})

export const {addItem,removeItem, decrement, increment } = cartSlice.actions;


export const SelectAllCart =(state)=>{
    return state.cart.cartItems;


}




export default cartSlice.reducer;
