import Login from "@/components/Login";
// import { auth } from "./../configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { LogBox } from 'react-native';
import React from "react";

// store signed In user details if there is any
const user = 'auth.currentUser'

export default function Index() {
  // Suppress specific warnings
  // LogBox.ignoreLogs(['Warning: ...', 'Error: ...']);
  // LogBox.ignoreAllLogs(true);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {
        user ? <Redirect href={"/mytrip"} /> : <Login />
      }
    </View>
  );
}




