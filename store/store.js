import { combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from  '../features/cartSlice'
import productReducer from '../features/productSlice';
import { authReducer } from "../features/authSlice";
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
  