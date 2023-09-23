// HomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';
import Detile from './Detile';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home}
      
      options={{ headerShown: false }}

      
      />
      <Stack.Screen name="Detile" component={Detile}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
