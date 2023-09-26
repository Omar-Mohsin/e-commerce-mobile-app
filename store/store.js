import { combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from  '../features/cart/cartSlice'
import productReducer from '../features/product/productSlice';
import { authReducer } from "../features/auth/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistStore, persistReducer } from 'redux-persist';

const rootReducers  = combineReducers({
    cart: cartReducer,
    product: productReducer,
    auth : authReducer,
  
  })
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  
  };
  const persistedReducer = persistReducer(persistConfig, rootReducers);
  
  
  export const store = configureStore({
    reducer:persistedReducer,
  
  });
  
  
  export const persistor = persistStore(store);
  