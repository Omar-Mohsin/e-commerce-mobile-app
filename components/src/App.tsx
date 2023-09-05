import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Home } from './Home';
import { Cart } from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Store',
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              title: 'Cart',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
