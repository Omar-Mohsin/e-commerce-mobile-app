import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import {SelectAllCart, addItem} from '../../../features/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {AnyAction} from '@reduxjs/toolkit';
import {useEffect} from 'react';
import {useNavigation,NavigationProp} from '@react-navigation/native';
import {fetchProducts} from '../../../features/productSlice';
import {SelectAllProducts} from '../../../features/productSlice';
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Product = (): JSX.Element => {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const products = useSelector(SelectAllProducts);

  const navigation = useNavigation <NavigationProp<any>>();

  const onProductPress = (item: Product) => {
    navigation.navigate('Detail', {product: item});
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const cart = useSelector(SelectAllCart);

  const addOnCart = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <FlatList
      data={products}
      renderItem={({item}) => {
        return (
          <Pressable key={item.id} onPress={() => onProductPress(item)}>
            <View style={styles.cardContainer}>
              <Image source={{uri: item.image}} style={styles.cardImage} />
              {cart.filter((product: Product) => item.id === product.id)
                .length > 0 && (
                <View style={styles.CartItemCount}>
                  <Text style={styles.CartItemCountText}>
                    {cart.filter((c: Product) => item.id === c.id).length}
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
    />
  );
};

export default Product;

const styles = StyleSheet.create({
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
    backgroundColor: '#64ccc5',
    position: 'absolute',
    top: 10,
    right: 7,
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CartItemCountText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
