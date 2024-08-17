import TextButton from "@/src/components/buttons/TextButton";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultView, {
  DefaultViewProps,
} from "@/src/components/viewComponents/DefaultView";
import React from "react";
import { StyleSheet } from "react-native";

type AlreadyHaveAccountType = DefaultViewProps & {
  textBtnText: string;
  href: any;
};

const AlreadyHaveAccount = (props: AlreadyHaveAccountType) => {
  const { style, href = "#", textBtnText = "Sign In" } = props;
  return (
    <DefaultView style={[styles.singInText, style]}>
      <TypoGraphy headingType="caption">Already have a account?</TypoGraphy>
      <TypoGraphy headingType="caption"> </TypoGraphy>
      <TextButton label={textBtnText} isLink={true} href={href} />
    </DefaultView>
  );
};
const styles = StyleSheet.create({
  singInText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default AlreadyHaveAccount;
