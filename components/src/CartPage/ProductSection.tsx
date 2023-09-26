import { StyleSheet, Text, View,Image ,TouchableOpacity,Pressable} from 'react-native'
import React from 'react'
import { SelectAllCart } from '../../../features/cart/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';

import { addToCart } from '../../../features/auth/authSlice';
import { removeItem , addItem } from '../../../features/cart/cartSlice';


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }


const ProductSection = () => {

    const carts = useSelector(SelectAllCart)
   
    
      const filteredCarts = carts.filter(
        (item: Product, index: number) => carts.indexOf(item) === index,
      );
    
      const dispatch = useDispatch();
    
    
    
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

    </View>





  )
}

export default ProductSection

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





})