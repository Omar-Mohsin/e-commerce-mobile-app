import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../../features/auth/authSlice';
import {clearCart} from '../../../features/cart/cartSlice';
import {SelectAllCart} from '../../../features/cart/cartSlice';
import {SelectUser} from '../../../features/auth/authSlice';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
const DetailSection = () => {
  const carts = useSelector(SelectAllCart);
  const user = useSelector(SelectUser);
  const navigation = useNavigation<NavigationProp<any>>();

  const dispatch = useDispatch();

  const SignInHandler = () => {
    navigation.navigate('SignIn'); // Navigate to the "Orders" screen
  };
  const CheckoutHandler = () => {
    dispatch(addToCart(carts));
    navigation.navigate('Orders'); // Navigate to the "Orders" screen
    dispatch(clearCart(carts));
  };
  const filteredCarts = carts.filter(
    (item: Product, index: number) => carts.indexOf(item) === index,
  );

  const calculateSubtotal = () => {
    // Calculate the subtotal by summing the prices of items in the cart
    return carts.reduce(
      (subtotal : number, item  :Product) => subtotal + item.price,
      0
    );
  };
  
  const calculateTax = () => {
    // Calculate the tax as 5% of the subtotal
    return calculateSubtotal() * 0.05;
  };
  
  const calculateGrandTotal = () => {
    // Calculate the grand total by adding the subtotal and tax
    return calculateSubtotal() + calculateTax();
  };


  return (
    <View>
      {filteredCarts.length > 0 && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Subtotal: ${calculateSubtotal().toFixed(2)} </Text>
          <Text style={styles.summaryText}>
            Tax (5%): ${calculateTax().toFixed(2)}
          </Text>
          <Text style={styles.grandTotal}>
            Grand Total: ${calculateGrandTotal().toFixed(2)}
          </Text>

          {user ? (
            <Pressable style={styles.button} onPress={CheckoutHandler}>
              <Text style={styles.CheckoutText}>Checkout</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.SignButton} onPress={SignInHandler}>
              <Text style={styles.CheckoutText}>Sign In</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    marginLeft: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 6,
    color: '#176B87',
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green',
  },

  button: {
    marginLeft: -2,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#34ba20',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  SignButton: {
    marginLeft: -2,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'red',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  CheckoutText: {
    fontSize: 20,
    color: 'white',
  },
});
