import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'
import {Card} from './Card'
import { createStackNavigator } from '@react-navigation/stack'


  const Tab =createStackNavigator();
export const Home  = () :JSX.Element  => {


  
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