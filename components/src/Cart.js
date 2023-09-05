import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity , Button , Pressable} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../features/cartSlice';
import { SelectAllCart } from '../../features/cartSlice';

export const Cart = () => {

 
  const carts = useSelector(SelectAllCart);
  const filteredCarts =  carts.filter((item, index) => carts.indexOf(item) === index);

  const dispatch = useDispatch();

  const onRemoveClick = (card) => {
    dispatch(removeItem(card.id));
  };

  const minOnClick = (card) => {
    dispatch(removeItem(card.id));
  };

  const plusOnClick = (card) => {
    dispatch(addItem(card));
  };

  const totalPrice= (card)=>{
    const newArray = carts.filter((item) => item.id === card.id);
    const ArrayLength = newArray.length;
    const totalPrice  =ArrayLength*card.price;
    return totalPrice;
  }

  const calculateTotalPrice = () => {
    const totalPrice = Math.round(carts.reduce((acc, card) => {
      const cardCount = carts.filter((item) => item.id === card.id).length;
      return acc + card.price * cardCount;
    }, 0));
    return totalPrice;
  };

  const calculateTax = () => {
    const taxRate = 0.05; 
    const subtotal = calculateTotalPrice();
    const tax = subtotal * taxRate;
    return tax.toFixed(2);
  };

  const calculateGrandTotal = () => {
    const subtotal = Math.round(calculateTotalPrice());
    const tax = parseFloat(calculateTax());
    const grandTotal = subtotal + tax;
    return grandTotal.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {filteredCarts.map((card) => (
       

          <View key={card.id} style={styles.cardContainer}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => minOnClick(card)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{carts.filter((item) => item.id === card.id).length}</Text>
                <TouchableOpacity onPress={() => plusOnClick(card)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.cardPrice}>Price: ${card.price}</Text>
              <Text style={styles.totalPrice}>Total: ${totalPrice(card)}</Text>
              <Pressable style={styles.Button} onPress={() => onRemoveClick(card)}>
              <Text style={styles.text}>Remove</Text>
              </Pressable>
              
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Subtotal: ${calculateTotalPrice()}</Text>
        <Text style={styles.summaryText}>Tax (5%): ${calculateTax()}</Text>
        <Text style={styles.grandTotal}>Grand Total: ${calculateGrandTotal()}</Text>
      </View>
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
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop : 10,
    
  },
  cardDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color : '#176B87'
  },
  cardDescription: {
    fontSize: 14,
    color : 'black',
    marginTop : 7,
    marginBottom : 7
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom : 5
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color : '#64CCC5'
  },
  cardPrice: {
    fontSize: 15,
    marginBottom : 5,
    color : 'black',
    fontWeight: 'bold',

  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom : 8,
    marginTop: 5,
    color : '#FF5722',

    fontWeight: 'bold',
  },
  Button: {
   marginBottom :  5,
   backgroundColor: '#BB2525',
   height : 40,
   flex :1 ,
   justifyContent : 'center',
    borderRadius : 20,
    alignItems : 'center',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
 
  summaryContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop : 6,
    marginBottom : 6,
    color : '#176B87'
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color : 'green'
  },
});

