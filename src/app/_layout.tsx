import { useTheme, ThemeProvider as CustomThemeProvider } from "@/context/useTheme"
import { Stack } from "expo-router"
import { Provider, MD3DarkTheme, MD3LightTheme } from "react-native-paper"
import "../../global.css"

const PaperProvider = ({children} : {children: React.ReactNode}) => {
  const { theme } = useTheme(); // cyrrent theme from context
  const paperTheme = theme === 'dark' ? MD3DarkTheme : MD3LightTheme

  return (
    <Provider theme={paperTheme}>
      {children}
    </Provider>
  )
}

const _layout = () => {
  return (
    <CustomThemeProvider>
      <PaperProvider> {/* can use useTheme */}

        {/* setup done for paper theme and provider */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
      
      
      </PaperProvider>
    </CustomThemeProvider>
  )
}

export default _layout