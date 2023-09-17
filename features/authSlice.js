import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : null,
    id : null,
}
export const authSlice = createSlice({
name : "auth" , 
initialState , 
reducers :{

    setUser: {
    reducer (state, action){
        state.user = action.payload.displayName;
        state.id = action.payload.uid;

    }},
    signOut: {
        reducer (state , action){
            state.user = action.payload;
            state.id = action.payload

        }},

}, 


})




export const SelectUser =(state)=>{
    return state.auth.user;

}
export const SelectId =(state)=>{
    return state.auth.id;

}

export const authReducer = authSlice.reducer;

export const {setUser , signOut} = authSlice.actions;