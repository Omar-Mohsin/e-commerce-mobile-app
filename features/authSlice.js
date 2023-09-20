import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users:
 [
    {    
        name : 'Omar',
        email  : 'Omar@gmail.com', 
        password : '12@33%3!', 
        cart : [],

    } , 
    {
        name : 'Ahmad',
        email : 'Demo448@gmail.com', 
        password : '12@34%123!4',
        cart : [],
    },
    {
        name : 'Sammer',
        email : 'MockDummy@gmail,com', 
        password : '11@122!23%33',
        cart : [],
    },
] , 

        loggedInUser: null, 



}


    
  const Hashing = (password)=>{
   
      let userPassword= password; 
      userPassword = userPassword.replace('@', '');
      userPassword = userPassword.replace('!', '');
      userPassword = userPassword.replace('%', '');

    
    return userPassword
  }

export const authSlice = createSlice({
name : "auth" , 
initialState , 
reducers :{

    login: {
    reducer (state, action){
     
        const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && Hashing(user.password) === password
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