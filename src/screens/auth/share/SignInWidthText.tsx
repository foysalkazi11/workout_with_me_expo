import TypoGraphy from "@/src/components/typography/Typography";
import DefaultView, {
  DefaultViewProps,
} from "@/src/components/viewComponents/DefaultView";
import { useBrandTheme } from "@/src/theme/hooks";
import React from "react";
import { StyleSheet } from "react-native";

type SignInWidthTextType = DefaultViewProps;

const SignInWidthText = (props: SignInWidthTextType) => {
  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    signInWidthTextContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    onlyBorderText: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.backgroundLight,
      width: 73,
      height: 1,
    },
  });
  return (
    <DefaultView {...props} style={styles.signInWidthTextContainer}>
      <TypoGraphy headingType="caption" style={styles.onlyBorderText}>
        {" "}
      </TypoGraphy>
      <TypoGraphy headingType="caption"> or Sign in with </TypoGraphy>
      <TypoGraphy headingType="caption" style={styles.onlyBorderText}>
        {" "}
      </TypoGraphy>
    </DefaultView>
  );
};

export default SignInWidthText;
