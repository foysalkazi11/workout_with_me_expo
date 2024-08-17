import { useBrandTheme } from "@/src/theme/hooks";
import { Link } from "expo-router";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type DefaultButtonProps = PressableProps & {
  label: string;
  isLink?: boolean;
  size?: "lg" | "md";
  variant?: "primary";
} & {
  isLink?: true;
  href?: any;
};

const DefaultButton = (props: DefaultButtonProps) => {
  const { label, isLink, href, ...rest } = props;

  if (isLink) {
    // If it's a link, use a different handling
    // You can handle the link behavior here
    return (
      <Link href={href} asChild>
        <Button label={label} {...rest} />
      </Link>
    );
  }
  return <Button label={label} {...rest} />;
};

const Button = (
  props: Omit<DefaultButtonProps, "isLink" | "href"> & { style?: any }
) => {
  const {
    label,
    style = {},
    size = "sm",
    variant = "primary",
    ...rest
  } = props;
  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    btnBox: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      height: 45,
    },
    lg: { maxWidth: 300 },
    md: { maxWidth: 250 },
    sm: { maxWidth: 200 },
    primary: { backgroundColor: theme.colors.primary },
    label: { fontSize: 18, color: theme.colors.background },
  });

  return (
    <Pressable
      {...rest}
      style={[styles.btnBox, styles[size], styles[variant], style]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default DefaultButton;
