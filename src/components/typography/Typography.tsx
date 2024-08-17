import { useBrandTheme } from "@/src/theme/hooks";
import React from "react";
import { Text } from "react-native";

type TextProps = Text["props"] & {
  headingType:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "paragraph"
    | "body"
    | "bodyGray"
    | "caption";
};

const TypoGraphy = (props: TextProps) => {
  const { theme } = useBrandTheme();
  const { headingType = "paragraph", style, ...otherProps } = props;
  return (
    <Text style={[theme.typography[headingType], style]} {...otherProps} />
  );
};

export default TypoGraphy;
