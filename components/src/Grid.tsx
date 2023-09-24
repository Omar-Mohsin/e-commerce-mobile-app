import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image, 
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/cartSlice';
import { useEffect } from 'react';
import { fetchProducts } from '../../features/productSlice';
import { SelectAllProducts } from '../../features/productSlice';
import { SelectAllCart } from '../../features/cartSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';

export const Grid = (): JSX.Element => {
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch(); // Correct type for dispatch
  const cards = useSelector(SelectAllProducts);
  const cart = useSelector(SelectAllCart);

  const addOnCart = (card: Product) => {
    dispatch(addItem(card));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderGridItem = ({ item }: { item: Product }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          addOnCart(item);
        }}
      >
        <View style={styles.gridImageContainer}>
          <Image source={{ uri: item.image }} style={styles.gridImage} />
          {cart.filter((c: Product) => item.id === c.id).length > 0 && (
            <View style={styles.gridItemCount}>
              <Text style={styles.gridItemCountText}>
                {cart.filter((c: Product) => item.id === c.id).length}
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.gridTitle} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.gridPrice}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderGridItem}
        numColumns={2} // Set the number of columns for the grid
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  gridItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },
  gridImageContainer: {
    position: 'relative',
  },
  gridImage: {
    objectFit: 'contain',
    width: 130,
    height: 170,
  },
  gridItemCount: {
    backgroundColor: '#64ccc5',
    position: 'absolute',
    top: 6,
    right: 7,
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItemCountText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#053B50',
    textAlign: 'center',
  },
  gridPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5722',
    textAlign: 'center',
  },
});

export default Grid;
