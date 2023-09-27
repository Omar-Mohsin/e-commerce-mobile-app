import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {SelectUser} from '../../../features/auth/authSlice';
import Order from './Order';
import { Product } from '../Types/Types';


const OrderList = (): JSX.Element => {
  const {cart} = useSelector(SelectUser);
  const renderPackage = (packageItems: Product, index: number) => (
    <Order packege={packageItems} index={index} />
  );

  return (
    <ScrollView style={styles.container}>
      {cart.length > 0 ? (
        <>
          <Text style={styles.headerText}>Your Orders</Text>
          {cart.map((packageItems: Product, index: number) =>
            renderPackage(packageItems, index),
          )}
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
