import { StyleSheet, Text, View , Button } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { Home } from './Home';
import { Cart } from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import SignIn from './SignIn';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SelectUser } from '../../features/authSlice';



export default function App(): JSX.Element {
  const user  = useSelector(SelectUser)

  enableScreens(); 

  const Tab = createBottomTabNavigator();

  return (
    


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


{
  !user ? (
    <Tab.Screen
      name="signIn"
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
    <Tab.Screen
      name="Profile"
      component={SignIn} 
      options={{
        title: 'Profile',
        tabBarLabel: 'profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
    />
  )
}

        

        </Tab.Navigator>
      </NavigationContainer> 
  );
}

const styles = StyleSheet.create({});
