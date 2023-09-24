import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const Order = ({packege , index}) => {
  const handleDate = ()=>{

    const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString(); // Format the date and time

  return formattedDate;
  }
  return (
    

    <View key={index} style={styles.packageContainer}>
      <Text style={styles.packageTitle}>Order {index + 1}</Text>
      <Text style = {styles.DateText}>{handleDate()}</Text>
      {packege.filter((item,  index) => packege.indexOf(item) === index).map((item) => (
        <View key={item.id} style={styles.orderItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.productInfo}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
            <Text style= {styles.quantityText}>quantity {packege.filter((product) => item.id === product.id).length}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text>---------------------------------------------</Text>
          </View>
        
        </View>
      ))}
        <Text style = {styles.PriceText}> Total Price  {packege.reduce((acc, item) => acc + item.price, 0)}</Text>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({

  packageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  packageTitle: {
    fontSize: 24, 
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
    height: 170,
    width: 100, 
    borderRadius: 10,
    marginRight: 30,
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
  price : {
    marginTop : 10,
    fontSize : 20,
    color : 'green',
  } ,
  DateText: {
    marginBottom: 10,
    color: 'blue',
  },
  PriceText: {
    fontSize: 22,
    color: 'lime',
    fontWeight: 'bold', 
  },
  quantityText: {
     fontSize :17 ,
    fontFamily :'bold',
    marginBottom: 10,
    color: 'green',
  },


})