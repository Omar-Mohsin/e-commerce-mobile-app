import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const CARDS_URL = 'https://fakestoreapi.com/products';

const initialState = {
    card : [],
    loading: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    const response = await axios.get(CARDS_URL)
    return response.data
})

const cardSlice = createSlice({
name : "cards", 
initialState, 
reducers : {}, 
extraReducers(builder) {
    builder
        .addCase(fetchCards.pending, (state, action) => {
            state.loading = 'loading'
        }).addCase(fetchCards.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.card = action.payload;
          }).addCase(fetchCards.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
          });
    }
})


export const SelectAllCard = (state)=> {
    return state.card.card
}
export default cardSlice.reducer;

