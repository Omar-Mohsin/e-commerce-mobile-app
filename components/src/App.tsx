import { StyleSheet, Text, View , Button } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Home } from './Home';
import { Cart } from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import SignIn from '../SignIn';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App(): JSX.Element {
  enableScreens(); 

  const Tab = createBottomTabNavigator();

  return (
    
    <Provider store={store}>


 <NavigationContainer>
        <Tab.Navigator>
        
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title : 'Store',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          
          }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{ title : 'cart',
            tabBarLabel: 'shopping-cart',
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ), 
          }}
          />

          <Tab.Screen
            name="signIn"
            component={SignIn}
            options={{ title : 'sign-in',
            tabBarLabel: 'sign-in',
            tabBarIcon: ({ color, size }) => (
              <Icon name="sign-in" color={color} size={size} />
            ), 
          }}
          />

        </Tab.Navigator>
      </NavigationContainer> 
    </Provider>
  );
}

const styles = StyleSheet.create({});
