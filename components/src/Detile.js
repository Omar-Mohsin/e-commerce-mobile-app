import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageSlider } from 'react-native-image-slider';

const Detile = ({product}) => {
  // Sample product data with multiple images


  return (
    <View style={styles.container}>
      <ImageSlider images={product.images} autoPlayWithInterval={3000} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        {/* Add additional product details here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5722',
  },
});

export default Detile;
