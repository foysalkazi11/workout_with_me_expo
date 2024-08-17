import { useBrandTheme } from "@/src/theme/hooks";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type InputWithIconType = TextInput["props"] & {
  variant?: "borderBottom" | "contain";
  icon: React.ReactNode;
  placeMent?: "left" | "right";
};

const InputWithIcon = (props: InputWithIconType) => {
  const {
    style,
    variant = "borderBottom",
    placeMent = "right",
    icon,
    ...rest
  } = props;
  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    inputWithIconContainer: {
      width: "100%",
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      paddingRight: 15,
    },
    baseInputStyle: {
      width: "100%",
      height: 34,
      color: theme.colors.neutral,
      fontSize: 16,
      flex: 1,
      paddingRight: 10,
    },
    borderBottom: {
      borderBottomColor: theme.colors.neutral,
      borderBottomWidth: 1,
    },
    contain: {
      backgroundColor: theme.colors.backgroundLight,
      borderRadius: 10,
    },
  });

  return (
    <View style={[styles.inputWithIconContainer, styles[variant], style]}>
      {placeMent === "left" && icon}
      <TextInput
        {...rest}
        style={[styles.baseInputStyle]}
        placeholderTextColor={theme.colors.neutral}
      />
      {placeMent === "right" && icon}
    </View>
  );
};

export default InputWithIcon;
