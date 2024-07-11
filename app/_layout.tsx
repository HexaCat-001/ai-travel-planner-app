import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'comfortaa': require('./../assets/fonts/Comfortaa-Medium.ttf'),
    'comfortaa-Light': require('./../assets/fonts/Comfortaa-Light.ttf'),
    'comfortaa-Bold': require('./../assets/fonts/Comfortaa-Bold.ttf'),

  })
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
