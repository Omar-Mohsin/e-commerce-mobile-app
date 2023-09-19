import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users:
 [
    {    
        name : 'Omar',
        email  : 'Omar@gmail.com', 
        password : '122333', 
        cart : [],

    } , 
    {
        name : 'Ahmad',
        email : 'Demo448@gmail.com', 
        password : '12341234',
        cart : [],
    },
    {
        name : 'Sammer',
        email : 'MockDummy@gmail,com', 
        password : '111222333',
        cart : [],
    },
] , 

        loggedInUser: null, 



}


    


export const authSlice = createSlice({
name : "auth" , 
initialState , 
reducers :{

    login: {
    reducer (state, action){
     
        const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        state.loggedInUser = user.name; 
      }  
    }},
    logout: {
        reducer (state , action){
            state.loggedInUser = action.payload; 

        }},
}, 
})


export const SelectUser =(state)=>{
    return state.auth.loggedInUser;

}
export const authReducer = authSlice.reducer;

export const {login , logout } = authSlice.actions;