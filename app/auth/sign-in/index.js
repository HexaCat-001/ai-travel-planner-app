import { StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, View, ToastAndroid } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'

const SignIn = () => {
  // states
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // route
  router = useRouter()
  // set navigation / header
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  // sign function using firebase
  const signIn = () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
        if (errorCode === 'auth/invalid-credential'){
          ToastAndroid.show("Wrong email or password is given!", ToastAndroid.BOTTOM);
        }
      });
  }
  return (
    <SafeAreaView>
      {/* main container */}
      <ScrollView style={styles.container}>
        {/* headings */}
        <View style={styles.headingBox}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-circle" size={52} color={Colors.DARK} />
          </TouchableOpacity>
          <Text style={styles.heading}>Let's Sign You In</Text>
          <Text style={styles.subHeading}>Welcome Back</Text>
          <Text style={styles.subHeading}>You've been missed!</Text>
        </View>
        {/* input - email */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput
            placeholder='Enter your email'
            placeholderTextColor={Colors.MEDIUM_DARK}
            selectionColor={Colors.MEDIUM_DARK}
            keyboardType="email-address"
            scrollEnabled={true}
            style={styles.input}
            onChangeText={(text)=>{setEmail(text)}}
          />
        </View>
        {/* input - password */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Password</Text>
          <TextInput
            placeholder='Enter your password'
            placeholderTextColor={Colors.MEDIUM_DARK}
            selectionColor={Colors.MEDIUM_DARK}
            keyboardType="password"
            secureTextEntry={true}
            scrollEnabled={true}
            style={styles.input}
            onChangeText={(text)=>{setPassword(text)}}
          />
        </View>
        {/* Sign In button */}
        <TouchableOpacity
          onPress={signIn}
          style={styles.btnBox}
        >
          <Text style={styles.btnTxt}>Sign In</Text>
        </TouchableOpacity>
        {/* Create Account button */}
        <TouchableOpacity
          onPress={() => router.replace('auth/sign-up')}
          style={[styles.btnBox, { marginTop: 55, }]}
        >
          <Text style={styles.createBtnTxt}>Don't have any account? Create..</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT,
    paddingHorizontal: 10,
    height: '100%',
  },
  headingBox: {
    marginBottom: 35,
    marginTop: 25,
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
    margin: 10,
  },
  inputHeading: {
    color: Colors.MEDIUM_DARK,
    fontSize: 18,
    marginBottom: 3,
    fontFamily: 'outfit-bold'
  },
  input: {
    padding: 10,
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