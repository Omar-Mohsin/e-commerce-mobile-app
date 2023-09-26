import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const Detail = ({route}: any): JSX.Element => {
  const {product} = route.params;

  const images = [
    product.image,
    'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=0 ',
    'https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
          <ScrollView horizontal pagingEnabled>
          {images.map((image: any, index: number) => (
            <Image key={index} source={{ uri: image }} style={styles.productImage} />
          ))}
          </ScrollView>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: windowWidth * 1,
    height: windowWidth * 0.7,
    resizeMode: 'contain',
  },
  productInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5722',
  },
});

export default Detail;
