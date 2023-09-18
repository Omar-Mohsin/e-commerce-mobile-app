import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users:
 [
    {    

        email  : 'Omar@gmail.com ', 
        password : '122333', 
        cart : [],

    } , 
    {
        email : 'DemoO448@gmail.com', 
        password : '12341234',
        cart : [],
    },
    {
        email : 'MockDummy@gmail,com', 
        password : '111222333',
        cart : [],
    },
] , 

        loggedInUser: null, // This will store the currently logged-in user



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
        state.loggedInUser = user; // Set the logged-in user
      }  
    }},
    logout: {
        reducer (state , action){
            state.loggedInUser = null; 

        }},
}, 
})


export const SelectUser =(state)=>{
    return state.auth.user;

}
export const authReducer = authSlice.reducer;

export const {login , logout } = authSlice.actions;