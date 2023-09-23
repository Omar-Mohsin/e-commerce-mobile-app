import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Card } from './Card';
import { createStackNavigator } from '@react-navigation/stack';
import Grid from './Grid';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Home = () => {
  const [toggle, isToggle] = useState(false);

  const buttonHandler = () => {
    isToggle(!toggle);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Store</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name={!toggle ? 'th-large' : 'th-list'}
            size={25}
            onPress={buttonHandler}
            color="#333" // Customize the icon color
          />
        </View>
      </View>

      {toggle ? <Grid /> : <Card />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight : 'bold',
  },
  iconContainer: {
    marginRight: 5,
    padding: 5, 
  },
});
