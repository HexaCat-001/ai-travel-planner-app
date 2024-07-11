import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Set text color
        backgroundColor="#F8F4E1" // Set background color
        hidden={false}
        translucent={true} // Make it translucent
      />
      <Image
        source={require("./../assets/images/login.jpeg")}
        style={styles.loginImage}
      />
      <View style={styles.loginTxtBox}>
        <Text style={styles.loginHeadingTxt}>Smart (AI) Travel Planner</Text>
        <Text style={styles.loginTxt}>
          Unlock your dream destinations with ease. Experience smarter travel
          with AI assistance just for you
        </Text>
        <View style={styles.buttonBox}>
          <Text style={styles.buttonTxt}>Sign In With Google</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  loginImage: {
    width: "100%",
    height: 460,
  },
  loginTxtBox: {
    marginTop: -35,
    backgroundColor: Colors.LIGHT,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: "100%",
    padding: 24,
  },
  loginHeadingTxt: {
    fontSize: 26,
    fontFamily: "comfortaa-bold",
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.DARK,
    marginBottom: 18,
  },
  loginTxt: {
    fontSize: 17,
    color: Colors.MEDIUM_LIGHT,
    fontFamily: "outfit-light",
    textAlign: "center",
  },
  buttonBox: {
    marginTop: '18%',
    padding: 12,
    borderRadius: 95,
    backgroundColor: Colors.DARK,
  },
  buttonTxt: {
    fontSize: 17,
    color: Colors.LIGHT,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
});
