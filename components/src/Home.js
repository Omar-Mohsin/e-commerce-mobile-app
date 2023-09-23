import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'
import {Card} from './Card'
import { createStackNavigator } from '@react-navigation/stack'
import Grid from './Grid'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export const Home  = ()   => {


  const Stack = createStackNavigator();


    const [toggle , isToggle] = useState(false);

    const buttonHandler =()=>{
        isToggle(!toggle);
    }
  return (
    <View>
     
    

      <View style = {styles.IconContainer}>
        <Icon name={!toggle ? "th-large" : "th-list"} size = {35} onPress={buttonHandler}></Icon>
      </View>

      {
        !toggle ? (
          <Card/>
        ) : <Grid/>
      }

    </View>
  )
}



const styles = StyleSheet.create({

  IconContainer : {
    backgroundColor : '#EEEEEE',
    marginRight : 10,
    marginTop : 10,
  alignSelf : 'flex-end',
  width : 35,
  },
})