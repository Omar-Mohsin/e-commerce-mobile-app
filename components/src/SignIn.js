import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

export default function SignIn() {


  return (
    <View>
    <View styles={styles.SignInButton}>
        <Button  title='SIGN IN WITH GOOGLE'></Button>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

SignInButton : {
marginTop : 2100,

}
})