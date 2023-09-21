import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Home } from './Home';
import { Cart } from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import SignIn from './SignIn';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SelectUser } from '../../features/authSlice';
import Orders from './Orders';
import { createStackNavigator } from '@react-navigation/stack';
import Detile from './Detile';
export default function App(): JSX.Element {
  const user = useSelector(SelectUser);
  const Stack = createStackNavigator();

  enableScreens();

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Store',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />

        {!user ? (
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: 'Sign In',
              tabBarLabel: 'Sign In',
              tabBarIcon: ({ color, size }) => (
                <Icon name="sign-in" color={color} size={size} />
              ),
            }}
          />
        ) : (
          <>
            <Tab.Screen
              name="Orders"
              component={Orders}
              options={{
                title: 'Orders',
                tabBarLabel: 'Orders',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="truck" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={SignIn}
              options={{
                title: 'Profile',
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="user" color={color} size={size} />
                ),
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
