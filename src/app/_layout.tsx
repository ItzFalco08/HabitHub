import { Stack } from 'expo-router';
import "../../global.css";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
}