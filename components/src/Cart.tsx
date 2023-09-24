import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem, clearCart} from '../../features/cartSlice';
import {SelectAllCart} from '../../features/cartSlice';
import {SwipeListView} from 'react-native-swipe-list-view';
import {addToCart} from '../../features/authSlice';
import {useNavigation} from '@react-navigation/native';
import {SelectUser} from '../../features/authSlice';

export const Cart = (): JSX.Element => {
  const navigation = useNavigation(); // Add this line to access the navigation prop
  const carts = useSelector(SelectAllCart);
  const user = useSelector(SelectUser);
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

  const filteredCarts = carts.filter(
    (item: Product, index: number) => carts.indexOf(item) === index,
  );

  const dispatch = useDispatch();

  const CheckoutHandler = () => {
    dispatch(addToCart(carts));
    navigation.navigate('Orders'); // Navigate to the "Orders" screen
    dispatch(clearCart(carts));
  };

  const SignInHandler = () => {
    navigation.navigate('SignIn'); // Navigate to the "Orders" screen
  };

  const onRemoveClick = (card: Product) => {
    dispatch(removeItem(card.id));
  };

  const minOnClick = (card: Product) => {
    dispatch(removeItem(card.id));
  };

  const plusOnClick = (card: Product) => {
    dispatch(addItem(card));
  };

  const totalPrice = (card: Product) => {
    const newArray = carts.filter((item: Product) => item.id === card.id);
    const ArrayLength = newArray.length;
    const totalPrice = ArrayLength * card.price;
    return totalPrice;
  };
  const subtotal = filteredCarts
    .reduce((acc: number, product: Product) => acc + totalPrice(product), 0)
    .toFixed(2);

  const calculateTotalPrice = (): number => {
    const subPrice = carts
      .reduce((acc: number, card: Product) => {
        const cardCount = carts.filter(
          (item: Product) => item.id === card.id,
        ).length;
        return acc + card.price * cardCount;
      }, 0)
      .toFixed(2);
    return subPrice;
  };

  const calculateTax = (): number => {
    const taxRate: number = 0.05;
    const subtotal: number = calculateTotalPrice();
    const tax: number = Math.round(subtotal * taxRate);
    return tax;
  };

  const calculateGrandTotal = (): number => {
    const totalTax: number = calculateTax();
    const totalSubtotal: number = calculateTotalPrice();
    const grandTotal: number = totalSubtotal + totalTax;
    return grandTotal;
  };

  return (
    <View style={styles.container}>
      {filteredCarts.length > 0 ? (
        <SwipeListView
          data={filteredCarts}
          renderItem={({item: card}: {item: Product}) => (
            <View key={card.id} style={styles.cardContainer}>
              <Image source={{uri: card.image}} style={styles.cardImage} />
              <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDescription}>{card.description}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => minOnClick(card)}>
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>
                    {
                      carts.filter((item: Product) => item.id === card.id)
                        .length
                    }
                  </Text>
                  <TouchableOpacity onPress={() => plusOnClick(card)}>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardPrice}>Price: ${card.price}</Text>
                <Text style={styles.totalPrice}>
                  Total: ${totalPrice(card)}
                </Text>
              </View>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View>
              <Pressable
                style={styles.removeButton}
                onPress={() => onRemoveClick(data.item)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </Pressable>
            </View>
          )}
          rightOpenValue={-100}
        />
      ) : (
        <Text style={styles.emptyCartText}>Empty Cart</Text>
      )}

      {filteredCarts.length > 0 && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Subtotal: ${subtotal}</Text>
          <Text style={styles.summaryText}>
            Tax (5%): ${calculateTax().toFixed(2)}
          </Text>
          <Text style={styles.grandTotal}>
            Grand Total: ${calculateGrandTotal()}
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

export default Cart;

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
  emptyCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
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
