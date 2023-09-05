import { configureStore} from "@reduxjs/toolkit";
import cartReducer from  '../features/cartSlice'
import cardReducer from '../features/cardSlice';

export const  store = configureStore({
    reducer:{
        cart: cartReducer, 
        card: cardReducer
        
    },

})