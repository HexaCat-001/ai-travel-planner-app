import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  // router
  const router = useRouter();
  

  return (
    <SafeAreaView>
      <View style={styles.container}>
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

          <TouchableOpacity
            onPress={() => router.push('auth/sign-in')}
            style={styles.buttonBox}
          >
            <Text style={styles.buttonTxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  loginImage: {
    width: "100%",
    height: 480,
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
