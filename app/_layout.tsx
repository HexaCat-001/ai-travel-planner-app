import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'comfortaa': require('./../assets/fonts/Comfortaa-Medium.ttf'),
    'comfortaa-light': require('./../assets/fonts/Comfortaa-Light.ttf'),
    'comfortaa-bold': require('./../assets/fonts/Comfortaa-Bold.ttf'),

  })
  return (
    <Stack screenOptions={{
      headerShown: true,
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown:false,
      }}/> */}
      <Stack.Screen name="tabs" />
    </Stack>
  );
}
