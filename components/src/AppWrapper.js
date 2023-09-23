import { StyleSheet, Text, View } from 'react-native'
import App from './App'
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux'
import { store } from '../../store/store'
import React from 'react'

const AppWrapper = () => {
  return (

    <Provider store ={store}> 

     <App/>
    </Provider>

 
  )
}

export default AppWrapper

const styles = StyleSheet.create({})