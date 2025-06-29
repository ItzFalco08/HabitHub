import { customDarkTheme, customLightTheme } from '@/constants/paperThemes';
import { ThemeProvider, useTheme } from '@/context/useTheme';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../../global.css";

// made it component so it can re-render when theme changes
// PaperProvider needs to update its theme when the app theme changes
function PaperThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const currentThemeStyles = isDark ? customDarkTheme : customLightTheme;
    
  return (
    <PaperProvider theme={currentThemeStyles}>
      {/* StatusBar adapts to the current theme */}
      <StatusBar style={isDark ? 'light' : 'dark'}/>
      {children}
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <PaperThemeProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </PaperThemeProvider>
    </ThemeProvider>
  );
}