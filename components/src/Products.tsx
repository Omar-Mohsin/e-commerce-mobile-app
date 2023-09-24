import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../../features/cartSlice';
import {useEffect} from 'react';
import {fetchProducts} from '../../features/productSlice';
import {SelectAllProducts} from '../../features/productSlice';
import {SelectAllCart} from '../../features/cartSlice';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {AnyAction} from '@reduxjs/toolkit';
import {useNavigation} from '@react-navigation/native';


export const Products = (): JSX.Element => {
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }


  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const products = useSelector(SelectAllProducts);
  const cart = useSelector(SelectAllCart);

  const navigation = useNavigation();

  const onProductPress = (item: Product) => {
    navigation.navigate('Detile', { product: item });
  };

  const addOnCart = (product: Product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => onProductPress(item)}>
              <View key={item.id} style={styles.cardContainer}>
                <Image source={{uri: item.image}} style={styles.cardImage} />
                {cart.filter((product: Product) => item.id === product.id)
                  .length > 0 && (
                  <View style={styles.CartItemCount}>
                    <Text style={styles.CartItemCountText}>
                      {
                        cart.filter(
                          (product: Product) => item.id === product.id,
                        ).length
                      }
                    </Text>
                  </View>
                )}
                <View style={styles.cardInfo}>
                  <Text
                    style={styles.cardTitle}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.title}
                  </Text>
                  <Text style={styles.cardPrice}>${item.price}</Text>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => {
                      addOnCart(item);
                    }}>
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardImage: {
    objectFit: 'contain',
    width: 130,
    height: 170,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#053B50',
  },
  cardPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5722',
    marginBottom: 15,
  },
  addToCartButton: {
    backgroundColor: '#176B87',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  CartItemCount: {
    marginTop: 5,
    backgroundColor: '#64ccc5',
    position: 'absolute',
    top: 6,
    right: 7,
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  CartItemCountText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    marginRight: 5,
  },
});

export default Products;
