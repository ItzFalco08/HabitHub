import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";

const customDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    primary: "rgba(176, 198, 255, 1)",
    onPrimary: "rgba(21, 46, 96, 1)",
    primaryContainer: "rgba(46, 69, 120, 1)",
    onPrimaryContainer: "rgba(217, 226, 255, 1)",

    secondary: "rgba(192, 198, 220, 1)",
    onSecondary: "rgba(41, 48, 66, 1)",
    secondaryContainer: "rgba(64, 70, 89, 1)",
    onSecondaryContainer: "rgba(220, 226, 249, 1)",

    tertiary: "rgba(224, 187, 221, 1)",
    onTertiary: "rgba(65, 39, 66, 1)",
    tertiaryContainer: "rgba(89, 61, 90, 1)",
    onTertiaryContainer: "rgba(253, 215, 250, 1)",

    error: "rgba(242, 184, 181, 1)",
    onError: "rgba(96, 20, 16, 1)",
    errorContainer: "rgba(140, 29, 24, 1)",
    onErrorContainer: "rgba(249, 222, 220, 1)",

    surface: "rgba(18, 19, 24, 1)",
    onSurface: "rgba(226, 226, 233, 1)",

    background: "rgba(20, 18, 24, 1)",
    onBackground: "rgba(230, 224, 233, 1)", 

    outline: "rgba(143, 144, 154, 1)",
    outlineVariant: "rgba(68, 70, 79, 1)",

    surfaceVariant: "rgba(51, 52, 58, 1)", 
    onSurfaceVariant: "rgba(197, 198, 208, 1)",

    surfaceDisabled: "rgba(226, 226, 233, 0.12)",
    onSurfaceDisabled: "rgba(226, 226, 233, 0.38)",

    backdrop: "rgba(24, 25, 31, 0.4)",
    shadow: "#000",
    scrim: "#000",
    inverseSurface: "rgba(226, 226, 233, 1)",
    inverseOnSurface: "rgba(47, 48, 56, 1)",
    inversePrimary: "rgba(46, 69, 120, 1)",

    elevation: {
      level0: "transparent",
      level1: "rgba(23, 25, 31, 1)",
      level2: "rgba(26, 28, 36, 1)",
      level3: "rgba(31, 34, 43, 1)",
      level4: "rgba(33, 36, 45, 1)",
      level5: "rgba(36, 40, 51, 1)",
    },
  },
}

const customLightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    primary: "rgba(46, 69, 120, 1)",
    onPrimary: "rgba(255, 255, 255, 1)",
    primaryContainer: "rgba(217, 226, 255, 1)",
    onPrimaryContainer: "rgba(21, 46, 96, 1)",

    secondary: "rgba(64, 70, 89, 1)",
    onSecondary: "rgba(255, 255, 255, 1)",
    secondaryContainer: "rgba(220, 226, 249, 1)",
    onSecondaryContainer: "rgba(41, 48, 66, 1)",

    tertiary: "rgba(89, 61, 90, 1)",
    onTertiary: "rgba(255, 255, 255, 1)",
    tertiaryContainer: "rgba(253, 215, 250, 1)",
    onTertiaryContainer: "rgba(65, 39, 66, 1)",

    error: "rgba(140, 29, 24, 1)",
    onError: "rgba(255, 255, 255, 1)",
    errorContainer: "rgba(249, 222, 220, 1)",
    onErrorContainer: "rgba(96, 20, 16, 1)",

    surface: "rgba(251, 248, 255, 1)",
    onSurface: "rgba(26, 28, 35, 1)",

    background: "rgba(251, 248, 255, 1)",
    onBackground: "rgba(26, 28, 35, 1)",

    outline: "rgba(112, 115, 126, 1)",
    outlineVariant: "rgba(196, 198, 209, 1)",

    surfaceVariant: "rgba(224, 226, 236, 1)",
    onSurfaceVariant: "rgba(68, 70, 79, 1)",

    surfaceDisabled: "rgba(26, 28, 35, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 35, 0.38)",

    backdrop: "rgba(45, 48, 56, 0.4)",
    shadow: "#000",
    scrim: "#000",
    inverseSurface: "rgba(47, 49, 56, 1)",
    inverseOnSurface: "rgba(241, 240, 248, 1)",
    inversePrimary: "rgba(176, 198, 255, 1)",

    elevation: {
      level0: "transparent",
      level1: "rgba(239, 244, 255, 1)",
      level2: "rgba(233, 240, 255, 1)",
      level3: "rgba(222, 235, 255, 1)",
      level4: "rgba(218, 232, 255, 1)",
      level5: "rgba(210, 227, 255, 1)",
    },
  },
}

export { customDarkTheme, customLightTheme };

