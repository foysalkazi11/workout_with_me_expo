import { useColorScheme } from "react-native";
import { brandTheme } from ".";

export const useBrandTheme = () => {
  const currentTheme = useColorScheme();
  const selectedTheme = currentTheme
    ? brandTheme[currentTheme]
    : brandTheme.light;

  const typography = {
    // Define font family, sizes, weights, etc.
    fontFamily: "system", // Use system font by default
    fontSize: 10, // Base font size
    fontWeightRegular: "normal",
    fontWeightBold: "bold",
    h1: {
      fontSize: 30,
      fontWeight: "bold" as const,
      color: selectedTheme.colors.black,
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold" as const,
      color: selectedTheme.colors.black,
    },

    h3: {
      fontSize: 21,
      fontWeight: "normal" as const,
      color: selectedTheme.colors.black,
    },
    h4: {
      fontSize: 20,
      fontWeight: "bold" as const,
      color: selectedTheme.colors.inactive,
    },
    paragraph: {
      fontSize: 16,
      fontWeight: "normal" as const,
      color: selectedTheme.colors.neutral,
    },

    body: {
      fontSize: 14,
      fontWeight: "normal" as const,
      color: selectedTheme.colors.black,
    },
    bodyGray: {
      fontSize: 14,
      fontWeight: "normal" as const,
      color: selectedTheme.colors.neutral,
    },

    caption: {
      fontSize: 12,
      fontWeight: "normal" as const,
      color: selectedTheme.colors.neutral,
    },
    // ... define other heading and text styles
  };
  return {
    theme: {
      ...selectedTheme,
      typography,
    },
    currentTheme,
  };
};
