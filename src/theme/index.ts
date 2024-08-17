// Use react-native's Platform for OS-specific adjustments

import { Platform } from "react-native";

const lightTheme = {
  colors: {
    // Primary Colors
    primary: "#E79215", // Orange
    secondary: "#FFF5E5", // Light Yellow

    // Text and UI
    text: "#393939", // Dark Grey
    background: "#FFFFFF", // White
    black: "#000000",
    backgroundLight: "#E8E8E8",

    // Accent Colors
    accent1: "#928E8E", // Dusty Rose
    accent2: "#DCDBDB", // Light Beige

    // Other Colors
    neutral: "#9A9A9A", // Grey
    muted: "#535353", // Mid Grey
    border: "#707070", // Dark Grey
    inactive: "#464444", // Dark Text
  },
  fonts: {
    regular: Platform.select({
      ios: "System", // Use system font on iOS
      android: "sans-serif-thin", // Use a default font on Android
    }),
    bold: Platform.select({
      ios: "System", // Use system font on iOS
      android: "sans-serif-medium", // Use a bolder font on Android
    }),
  },

  sizes: {
    h1: 30,
    h2: 24,
    h3: 18,
    p: 16,
    body: 14,
    caption: 12,
    // Add more sizes as needed
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    // Add more spacing values as needed
  },
};

const darkTheme = {
  // Define colors, fonts, sizes, and spacing for dark theme
  // similar to the lightTheme structure
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: "#E79215", // Orange
    secondary: "#FFF5E5", // Light Yellow (can be adjusted for better contrast)

    // Text and UI
    text: "#FFFFFF", // White
    background: "#393939", // Dark Grey
    black: "#000000",
    backgroundLight: "#E8E8E8",

    // Accent Colors
    accent1: "#928E8E", // Dusty Rose (can be adjusted for better contrast)
    accent2: "#DCDBDB", // Light Beige

    // Other Colors
    neutral: "#707070", // Dark Grey
    muted: "#464444", // Dark Text
    border: "#535353", // Mid Grey
    inactive: "#9A9A9A", // Grey
  },
};

export const brandTheme = {
  light: lightTheme,
  dark: darkTheme,
};
