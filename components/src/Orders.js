import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { SelectUser } from '../../features/authSlice';

const Orders = () => {
  const { cart } = useSelector(SelectUser);

  const renderPackage = (packageItems, index) => (
    <View key={index} style={styles.packageContainer}>
      <Text style={styles.packageTitle}>Order {index + 1}</Text>
      {packageItems.map((item) => (
        <View key={item.id} style={styles.orderItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.productInfo}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {cart.length > 0 ? (
        <>
          <Text style={styles.headerText}>Your Orders</Text>
          {cart.map((packageItems, index) => renderPackage(packageItems, index))}
        </>
      ) : (
        <View style={styles.noOrdersContainer}>
          <Text style={styles.noOrdersText}>No Orders</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  noOrdersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noOrdersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  packageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    elevation: 2, // Add shadow on Android
    shadowColor: '#000', // Add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  packageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Orders;
