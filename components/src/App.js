import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import SignInPage from './ValidationPage/SignInPage';
import ProfilePage from './ValidationPage/ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SelectUser } from '../../features/authSlice';
import Orders from './OrdersPage/OrderList';
import HomeStack from './HomePage/HomeStack';
import Cart from './CartPage/Cart';
export default function App() {
  const user = useSelector(SelectUser);

  enableScreens();

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'Store',
            tabBarLabel: 'store',
            headerShown: false,

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
            component={SignInPage}
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
              component={ProfilePage}
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


