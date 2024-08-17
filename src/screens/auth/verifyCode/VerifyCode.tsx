import DefaultButton from "@/src/components/buttons/DefaultButton";
import TextButton from "@/src/components/buttons/TextButton";
import DefaultTextInput from "@/src/components/input/DefaultTextInput";
import LogoWithRedirectLink from "@/src/components/logo/LogoWithRedirectLink";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const VerifyCodeComponent = () => {
  const submitVerificationCode = () => {
    router.push("/onboarding/");
  };
  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.verifyCodeContainer}>
          <LogoWithRedirectLink />
          <DefaultView style={styles.verifyCodeText}>
            <TypoGraphy headingType="h1">Verify Code</TypoGraphy>
          </DefaultView>
          <TypoGraphy headingType="bodyGray">
            Please enter the code we just sent to email
          </TypoGraphy>
          <TypoGraphy headingType="body">braun.gabriel@gmail.com</TypoGraphy>

          <DefaultView style={styles.verifyCodeInputContainer}>
            <DefaultTextInput
              variant="contain"
              style={{ width: 60, height: 38 }}
            />
            <DefaultTextInput
              variant="contain"
              style={{ width: 60, height: 38 }}
            />
            <DefaultTextInput
              variant="contain"
              style={{ width: 60, height: 38 }}
            />
            <DefaultTextInput
              variant="contain"
              style={{ width: 60, height: 38 }}
            />
          </DefaultView>

          <TypoGraphy headingType="bodyGray">Didn't receive OPT ?</TypoGraphy>
          <TextButton label="Resend code" />

          <DefaultButton
            label="Verify"
            size="md"
            style={styles.verifyBtn}
            onPress={submitVerificationCode}
          />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

const styles = StyleSheet.create({
  verifyCodeContainer: {
    width: "100%",
    height: "auto",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 96,
  },
  verifyCodeText: {
    paddingTop: 80,
    paddingBottom: 10,
  },
  verifyCodeInputContainer: {
    paddingTop: 47,
    paddingBottom: 21,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
  },
  emailInput: {
    marginBottom: 40,
  },
  verifyBtn: {
    marginTop: 75,
    marginBottom: 63,
  },
});

export default VerifyCodeComponent;
