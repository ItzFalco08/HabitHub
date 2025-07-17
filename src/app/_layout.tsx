import { useTheme, ThemeProvider as CustomThemeProvider } from "@/context/useTheme"
import { Stack } from "expo-router"
import { Provider } from "react-native-paper"
import { customDarkTheme, customLightTheme } from "@/constants/paperThemes"
import "../../global.css"
import { StatusBar } from "react-native"

const PaperProvider = ({children} : {children: React.ReactNode}) => {
  const { theme } = useTheme(); // cyrrent theme from context
  const paperTheme = theme === 'dark' ? customDarkTheme : customLightTheme;

  return (
    <Provider theme={paperTheme}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      {children}
    </Provider>
  )
}

const _layout = () => {
  return (
    <CustomThemeProvider>
      <PaperProvider> 
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
      
      
      </PaperProvider>
    </CustomThemeProvider>
  )
}

export default _layout