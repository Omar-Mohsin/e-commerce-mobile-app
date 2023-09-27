import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {SelectAllCart} from '../../../features/cart/cartSlice';
import {useSelector, useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Product} from '../Types/Types';
import {addToCart} from '../../../features/auth/authSlice';
import {removeItem, addItem} from '../../../features/cart/cartSlice';

const ProductSection = () => {
  const cart = useSelector(SelectAllCart);

  const filteredCarts = cart.filter(
    (item: Product, index: number) => cart.indexOf(item) === index,
  );

  const dispatch = useDispatch();

  const removeItemFromCart = (product: Product) => {
    dispatch(removeItem(product.id));
  };

  const addItemToCart = (product: Product) => {
    dispatch(addItem(product));
  };

  const totalPrice = (product: Product) => {
    const newArray = cart.filter((item: Product) => item.id === product.id);
    const ArrayLength = newArray.length;
    const totalPrice = ArrayLength * product.price;
    return totalPrice;
  };

  return (
    <View style={styles.container}>
      {filteredCarts.length > 0 ? (
        <SwipeListView
          data={filteredCarts}
          renderItem={({item: product}: {item: Product}) => (
            <View key={product.id} style={styles.cardContainer}>
              <Image source={{uri: product.image}} style={styles.cardImage} />
              <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>{product.title}</Text>
                <Text style={styles.cardDescription}>
                  {product.description}
                </Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => removeItemFromCart(product)}>
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>
                    {
                      cart.filter((item: Product) => item.id === product.id)
                        .length
                    }
                  </Text>
                  <TouchableOpacity onPress={() => addItemToCart(product)}>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardPrice}>Price: ${product.price}</Text>
                <Text style={styles.totalPrice}>
                  Total: ${totalPrice(product)}
                </Text>
              </View>
            </View>
          )}
          renderHiddenItem={data => (
            <View>
              <Pressable
                style={styles.removeButton}
                onPress={() => removeItemFromCart(data.item)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </Pressable>
            </View>
          )}
          rightOpenValue={-100}
        />
      ) : (
        <Text style={styles.emptyCartText}>Empty Cart</Text>
      )}
    </View>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#EEEEEE',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  cardImage: {
    objectFit: 'contain',
    width: 130,
    height: 170,
    marginTop: 10,
  },
  cardDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#176B87',
  },
  cardDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 7,
    marginBottom: 7,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 5,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'black',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#64CCC5',
  },
  cardPrice: {
    fontSize: 15,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 5,
    color: '#FF5722',
  },

  removeButton: {
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: 'red',
    height: '98%',
    width: 100,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  removeButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});
