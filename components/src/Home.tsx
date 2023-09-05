import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'
import {Card} from '../Card'
import { Cart } from './Cart'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


  const Tab =createStackNavigator();
export const Home = () => {


  
  return (
    <View>
     <Card/>

    </View>
  )
}



const styles = StyleSheet.create({

  buttonClick  : {
    width : 20, 
    height : 10
  }
})