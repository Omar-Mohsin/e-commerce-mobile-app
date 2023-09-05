import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { useEffect } from 'react';
import { fetchCards } from '../features/cardSlice';
import { SelectAllCard } from '../features/cardSlice';
import { SelectAllCart } from '../features/cartSlice';

export const Card = () => {
  const dispatch = useDispatch();
  const cards = useSelector(SelectAllCard);
  const cart = useSelector(SelectAllCart);

  const addOnCart = (card) => {
    dispatch(addItem(card));
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
              />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardPrice}>${item.price}</Text>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => {
                    addOnCart(item);
                  }}
                >
                  <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
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
    elevation: 5,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
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
    fontSize: 18,
  },
});

export default Card;
