import React, { useEffect } from 'react';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Ignores all logs
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded,error]=useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'comfortaa': require('./../assets/fonts/Comfortaa-Medium.ttf'),
    'comfortaa-light': require('./../assets/fonts/Comfortaa-Light.ttf'),
    'comfortaa-bold': require('./../assets/fonts/Comfortaa-Bold.ttf'),

  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown:false,
      }}/> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
