import { StyleSheet, Text, View , Button } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Home } from './Home';
import { Cart } from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

export default function App(): JSX.Element {
  enableScreens(); // Enable screens before creating the navigator

  const Tab = createBottomTabNavigator();

  return (
    
    <Provider store={store}>


 <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title : 'Home' }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{ title : 'cart' }}
          />
        </Tab.Navigator>
      </NavigationContainer> 
    </Provider>
  );
}

const styles = StyleSheet.create({});
