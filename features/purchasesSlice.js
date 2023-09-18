import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart : [],
}


const purchasesSlice = createSlice({
    name : "purchases", 
    initialState, 
    reducers : {
        addToCart : {
            reducer(state, action){

            }
        } , 
        removeFromCart : {
            reducer(state, action){
                
            }
        } , 
    }
})


export const purchasesReducer = purchasesSlice.reducer;

export const {addToCart , removeFromCart} = purchasesSlice.actions;