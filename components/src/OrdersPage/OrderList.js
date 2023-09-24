import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { SelectUser } from '../../../features/authSlice';
import Order from './Order';
const OrderList = () => {
  const { cart } = useSelector(SelectUser);



 

  const renderPackage = (packageItems, index) => (

    <Order packege={packageItems} index = {index}/>

    
  );

  return (
    <ScrollView style={styles.container}>
      {cart.length > 0 ? (
        <>
          <Text style={styles.headerText}>Your Orders</Text>
          {cart.map((packageItems, index) => 
         
       
          renderPackage(packageItems, index))
          }
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

});

export default OrderList;
