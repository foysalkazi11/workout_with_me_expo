import { useBrandTheme } from "@/src/theme/hooks";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
type IconButtonProps = PressableProps & {
  icon: React.ReactNode;
  size?: "lg" | "md" | "sm";
  variant?: "border" | "contain" | "disable";
  style?: any;
};
const IconButton = (props: IconButtonProps) => {
  const { icon, size = "lg", variant = "contain", style, ...rest } = props;
  const { theme } = useBrandTheme();
  const styles = StyleSheet.create({
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
    contain: {
      backgroundColor: theme.colors.primary,
    },
    border: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    disable: {
      borderWidth: 1,
      borderColor: theme.colors.accent2,
    },
    lg: {
      width: 42,
      height: 42,
    },
    md: {
      width: 38,
      height: 38,
    },
    sm: {
      width: 34,
      height: 34,
    },
  });
  return (
    <Pressable
      style={[styles.baseStyle, styles[size], styles[variant], style]}
      {...rest}
    >
      {icon}
    </Pressable>
  );
};

export default IconButton;
