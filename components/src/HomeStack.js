// HomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';
import Detile from './Detile';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
      
      options={{ headerShown: false }}

      
      />
      <Stack.Screen name="Detail" component={Detile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
