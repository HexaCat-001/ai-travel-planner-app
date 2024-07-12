import { StyleSheet, Text, TextInput, TouchableOpacity, ScrollView , View, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'

const SignUp = () => {
  // states
  const [fullName, setFullName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState()
  // naigation
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[])
  // router
  router = useRouter()
  // function using firebase for sign up
  const onCreateAccount = () => {
    if(!email || !password || !fullName || !phone){
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  } 


  return (
    <SafeAreaView>
      {/* main container */}
      <ScrollView style={styles.container}>
        {/* headings */}
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-circle" size={52} color={Colors.DARK} />
        </TouchableOpacity>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>Create Your New Account</Text>
        </View>
        {/* input - Full name */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Full Name</Text>
          <TextInput
            placeholder='Enter your full name'
            placeholderTextColor={Colors.MEDIUM_DARK}
            selectionColor={Colors.MEDIUM_DARK}
            keyboardType="name-phone-pad"
            scrollEnabled={true}
            style={styles.input}
            onChangeText={(text) =>{setFullName(text)}}
          />
        </View>
        {/* input - email */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput
            placeholder='Enter a valid email'
            placeholderTextColor={Colors.MEDIUM_DARK}
            selectionColor={Colors.MEDIUM_DARK}
            keyboardType="email-address"
            scrollEnabled={true}
            style={styles.input}
            onChangeText={(text) =>{setEmail(text)}}
          />
        </View>
        {/* input - Phone Number */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Phone No.</Text>
          <TextInput
            placeholder='Enter 10 digit number'
            placeholderTextColor={Colors.MEDIUM_DARK}
            selectionColor={Colors.MEDIUM_DARK}
            keyboardType="number-pad"
            scrollEnabled={true}
            style={styles.input}
            onChangeText={(text) =>{setPhone(text)}}
          />
        </View>
        {/* input - password */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Password</Text>
          <TextInput
            placeholder='Enter a strong password (ex.&-w3@&4A)'
            placeholderTextColor={Colors.MEDIUM_DARK}
            selectionColor={Colors.MEDIUM_DARK}
            keyboardType="password"
            secureTextEntry={true}
            scrollEnabled={true}
            multiline={false}
            style={styles.input}
            onChangeText={(text) =>{setPassword(text)}}
          />
        </View>
        {/* Sign In button */}
        <TouchableOpacity
          onPress={onCreateAccount}
          style={styles.btnBox}
        >
          <Text style={styles.btnTxt}>Sign UP</Text>
        </TouchableOpacity>
        {/* Create Account button */}
        <TouchableOpacity
          onPress={() => router.replace('auth/sign-in')}
          style={[styles.btnBox, { marginTop: 25, }]}
        >
          <Text style={styles.createBtnTxt}>Already have an account? Sign In..</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT,
    paddingHorizontal: 10,
    height: '100%',
  },
  headingBox: {
    marginBottom: 25,
    marginTop: 10,
  },
  heading: {
    color: Colors.DARK,
    fontSize: 30,
    marginBottom: 15,
    fontFamily: 'comfortaa-bold'
  },
  subHeading: {
    color: Colors.MEDIUM_LIGHT,
    fontSize: 24,
    marginBottom: 8,
    fontFamily: 'outfit-light'
  },
  inputBox: {
    margin: 5,
  },
  inputHeading: {
    color: Colors.MEDIUM_DARK,
    fontSize: 18,
    marginBottom: 3,
    fontFamily: 'outfit-bold'
  },
  input: {
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 50,
    color: Colors.MEDIUM_DARK,
    fontWeight: 'bold',
    fontFamily: 'outfit-bold',
    borderWidth: 1,
    borderColor: Colors.MEDIUM_DARK,
  },
  btnBox: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  btnTxt: {
    width: 170,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    color: Colors.LIGHT,
    fontWeight: 'bold',
    borderWidth: 1,
    fontFamily: 'outfit-bold',
    backgroundColor: Colors.DARK,
  },
  createBtnTxt: {
    fontSize: 16,
    paddingBottom: 5,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: Colors.MEDIUM_DARK,
    borderBottomWidth: 1,
    borderBottomColor: Colors.MEDIUM_DARK,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
})