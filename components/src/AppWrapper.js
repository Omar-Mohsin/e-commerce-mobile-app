import { StyleSheet, Text, View } from 'react-native'
import App from './App'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import React from 'react'

const AppWrapper = () => {
  return (

    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper

const styles = StyleSheet.create({})