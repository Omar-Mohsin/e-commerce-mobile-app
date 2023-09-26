import React from 'react';
import {StyleSheet, Text, View, Button, Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../../features/auth/authSlice';
import {useNavigation , NavigationProp} from '@react-navigation/native';


interface ProfileProps {
  user: string;
}
const Profile = ({user}: ProfileProps): JSX.Element => {
  const navigation = useNavigation <NavigationProp<any>>();
  const dispatch = useDispatch();
  console.log(user);
  const handleSignOut = () => {
    dispatch(logout(null));
  };

  const GoOrders = () => {
    navigation.navigate('Orders');
  };
  const GoCart = () => {
    navigation.navigate('Cart');
  };
  const GoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://robohash.org/1?set=set2',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome, {user}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={GoOrders}>
          <Text style={styles.ButtonText}>Orders</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={GoCart}>
          <Text style={styles.ButtonText}>Cart</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={GoHome}>
          <Text style={styles.ButtonText}>Home</Text>
        </Pressable>
      </View>
      <Pressable style={styles.LogoutButton} onPress={handleSignOut}>
        <Text style={styles.ButtonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    marginTop: 10,
    marginButton: 10,
    backgroundColor: '#0077b6',
    borderRadius: 15,
    height: 40,
    width: 200,
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 20,
    marginTop: 5,
    color: 'white',
  },

  LogoutButton: {
    marginTop: 10,
    marginButton: 10,
    backgroundColor: 'red',
    borderRadius: 15,
    height: 40,
    width: 200,
    alignItems: 'center',
  },
});
