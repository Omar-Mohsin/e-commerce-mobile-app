import React from 'react';
import {StyleSheet, View, FlatList, Pressable} from 'react-native';
import Product from './Product';
export const HomePage = (): JSX.Element => {
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }

  return (
    <View style={styles.container}>
      <Product />
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
