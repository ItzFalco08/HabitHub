import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";
import { useColorScheme, View } from "react-native";
import { colors } from "@/constants/colors";

type theme = 'light' | 'dark' | null;

interface toggleThemeProps {
    theme: theme;
    setTheme: (theme: theme) => void;
}

const themeContext = createContext<{
    theme: theme;
    setTheme: (theme: theme) => void;
    isThemeLoaded: boolean ;
    setIsThemeLoaded: (value: boolean) => void;
    toggleTheme: () => void;
}>({
    theme: null,
    setTheme: () => {},
    isThemeLoaded: false,
    setIsThemeLoaded: () => {},
    toggleTheme: () => {}
});

const useTheme = () => useContext(themeContext) 


async function getCurrentTheme(systemTheme: theme) {
  const userPreference = await AsyncStorage.getItem('theme');

  if (userPreference) {
    return userPreference === "dark" ? 'dark' : 'light';
  } else {
    let theme: theme = systemTheme === 'dark' ? 'dark' : 'light';
    return theme;
  }
}

async function toggleTheme({theme, setTheme}: toggleThemeProps) {
    let isDark = theme === 'dark';

    if(isDark) {
        setTheme('light');
        await AsyncStorage.setItem('theme', 'light'); 
    } else {
        setTheme('dark');
        await AsyncStorage.setItem('theme', 'dark');
    }
}

function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<theme>(null);
    const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false);
    const systemTheme = useColorScheme() as theme;

    getCurrentTheme(systemTheme).then(currentTheme => {
        setTheme(currentTheme);
        setIsThemeLoaded(true);
    })

    // Apply CSS variables for NativeWind
    const themeColors = theme ? colors[theme] : null;

    return (
        <themeContext.Provider value={{
            theme: theme,
            setTheme: setTheme,
            isThemeLoaded: isThemeLoaded,
            setIsThemeLoaded: setIsThemeLoaded,
            toggleTheme: () => toggleTheme({theme, setTheme})
        }}>
            <View style={themeColors as any} className="flex-1">
                {children}
            </View>
        </themeContext.Provider>
    )
}

export {useTheme, ThemeProvider} // hii are you here?