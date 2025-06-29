import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

// Extend the default theme interface if you want to add custom properties
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      // Add any custom colors here if needed
      // customColor: string;
    }
    
    interface Theme {
      // Add any custom theme properties here if needed
      // customProperty: string;
    }
  }
}

// Export your custom themes based on your app's theme context
export const paperLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // Customize colors to match your theme
    primary: '#007bff',
    // Add more custom colors as needed
  },
};

export const paperDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // Customize colors to match your theme
    primary: '#007bff',
    // Add more custom colors as needed
  },
};

export type PaperTheme = typeof paperLightTheme;
