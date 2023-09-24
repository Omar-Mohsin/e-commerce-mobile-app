import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { login } from '../../../features/authSlice';
import { useDispatch } from 'react-redux';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer} behavior="position">
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
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    justifyContent : 'center',
    height : 100,
    width: '100%',
    alignItems: 'center',
  },
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
    backgroundColor: '#34ba20',
    width : 150,
    height : 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  signInText: {
    fontSize: 20,
    color: 'white',
  },
});
