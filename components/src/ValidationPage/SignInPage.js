import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from "redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { login } from '../../../features/auth/authSlice';
import { connect } from 'react-redux';



class SignInPage extends Component {
  constructor(props ) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignIn = () => {
    const { email, password } = this.state;
  this.props.login({ email, password });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome Back!</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Pressable style={styles.button} onPress={this.handleSignIn}>
            <Text style={styles.signInText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    height: 100,
    width: '100%',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    height: 100,
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
    marginTop: 70,
    borderRadius: 15,
    backgroundColor: '#34ba20',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  signInText: {
    fontSize: 20,
    color: 'white',
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SignInPage);