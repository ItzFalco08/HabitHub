import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

// Extended theme type with additional Material Design 3 colors
type ExtendedMD3Theme = MD3Theme & {
  colors: MD3Theme['colors'] & {
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    surfaceBright: string;
    surfaceDim: string;
  };
};

// Complete Material Design 3 Light Theme (overrides Paper's outdated colors)
const customLightTheme: ExtendedMD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // Updated to proper Material Design 3 colors (Paper's are outdated)
    surface: '#fef7ff',           // Paper uses palette.neutral99 (different)
    background: '#fef7ff',        // Paper uses palette.neutral99 (different)
    // Complete Material Design 3 surface container system (Paper lacks these)
    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: '#f7f2fa',
    surfaceContainer: '#f1ecf4',
    surfaceContainerHigh: '#ebe6ee',
    surfaceContainerHighest: '#e6e0e9',
    // Additional semantic colors (Paper lacks these)
    surfaceBright: '#fef8fd',
    surfaceDim: '#ded8e1',
  },
};

// Complete Material Design 3 Dark Theme (overrides Paper's outdated colors)
const customDarkTheme: ExtendedMD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // Updated to proper Material Design 3 colors (Paper's are outdated)
    surface: '#141218',           // Paper uses palette.neutral10 (different)
    background: '#141218',        // Paper uses palette.neutral10 (different)
    // Complete Material Design 3 surface container system (Paper lacks these)
    surfaceContainerLowest: '#0f0d13',
    surfaceContainerLow: '#1d1b20',
    surfaceContainer: '#211f26',
    surfaceContainerHigh: '#2b2930',
    surfaceContainerHighest: '#36343b',
    // Additional semantic colors (Paper lacks these)
    surfaceBright: '#3b383e',
    surfaceDim: '#141218',
  },
};

export { customDarkTheme, customLightTheme };

// Export the extended theme type for use in components
  export type { ExtendedMD3Theme };

