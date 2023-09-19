import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import { login  , SelectUser ,logout } from '../../features/authSlice';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(SelectUser)


  console.log(user)

  const handleSignIn = () => {
    dispatch(login({email , password}))
    };

    const handleSignOut = () => {
      dispatch(logout(null))
      };

    return (
      
      <>
      {!user ? (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome Back!</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable style={styles.button} onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign in</Text>
          </Pressable>
        </View>
      ) : (
        <View>        
        <Text>Welcome</Text>
        <Button title = 'logout' onPress={handleSignOut}></Button>
        </View>

      )}
    </>

    );
    
}

const styles = StyleSheet.create({

  formContainer: {
    flex:1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    justifyContent : 'center',
    height : 100,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  button: {
    marginTop : 70,
    borderRadius: 15,
    backgroundColor: 'cyan',
    width : 150,
    height : 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', 
  },
  signInText : {
    color :  'black',
  }
});
