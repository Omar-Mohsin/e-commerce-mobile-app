import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, SelectUser} from '../../../features/authSlice';

import Profile from './ProfilePage';
import SignInPage from './SignInPage';
export default function Validation(): JSX.Element {
  const user = useSelector(SelectUser);

  console.log(user);

  return <>{!user ? <SignInPage /> : <Profile user={user}></Profile>}</>;
}

const styles = StyleSheet.create({});
