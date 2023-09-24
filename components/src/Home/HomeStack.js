import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';
import Detail from './Detail';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomePage" component={Home}
      
      options={{ headerShown: false }}

      
      />
      <Stack.Screen name="Detail" component={Detail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
