import { createSlice } from "@reduxjs/toolkit";
import base64 from 'react-native-base64'

const initialState = {
  users:
 [
    {    
        name : 'Omar',
        email  : 'Omar@gmail.com', 
        password : "b21hcm9tYXI=", 
        cart : [],

    } , 
    {
        name : 'Ahmad',
        email : 'Demo448@gmail.com', 
        password : "YWhtYWQxMjM=",
        cart : [],
    },
    {
        name : 'Samer',
        email : 'MockDummy@gmail,com', 
        password : "c2FtZXIxMjM=",
        cart : [],
    },
] , 

        loggedInUser: null, 



}


    
  const decode = (password)=>{
    console.log('the pass : ', password);

    const pass  =  base64.decode(password);
    
    console.log(pass)
    return pass
  
  }

export const authSlice = createSlice({
name : "auth" , 
initialState , 
reducers :{

    login: {
    reducer (state, action){
     
        const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && decode(user.password) === password
      );

      if (user) {
        state.loggedInUser = user; 
      }  
    }},
    logout: {
        reducer (state , action){
            state.loggedInUser = action.payload; 

        }},

        addToCart : {
          reducer(state , action){
            const item = action.payload;
            
            state.loggedInUser.cart.push(item)
        }
      },
}, 
})


export const SelectUser =(state)=>{
    return state.auth.loggedInUser;

}
export const authReducer = authSlice.reducer;

export const {login , logout ,addToCart } = authSlice.actions;