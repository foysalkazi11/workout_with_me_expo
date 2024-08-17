import { useBrandTheme } from "@/src/theme/hooks";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

type DefaultTextInputType = TextInput["props"] & {
  variant?: "borderBottom" | "contain";
  password?: boolean;
};

const DefaultTextInput = (props: DefaultTextInputType) => {
  const { style, variant = "borderBottom", password, ...rest } = props;

  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    baseInputStyle: {
      width: "100%",
      height: 34,
      color: theme.colors.neutral,
      fontSize: 16,
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
    <TextInput
      style={[styles.baseInputStyle, styles[variant], style]}
      placeholderTextColor={theme.colors.neutral}
      {...rest}
    />
  );
};

export default DefaultTextInput;
