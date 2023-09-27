import React from 'react';
import {StyleSheet, View} from 'react-native';
import Item from './Item';

export const HomePage = (): JSX.Element => {
  


  return (
    <View style={styles.container}>
      <Item />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
});

export default HomePage;
