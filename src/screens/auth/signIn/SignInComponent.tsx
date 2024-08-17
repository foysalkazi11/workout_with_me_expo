import DefaultButton from "@/src/components/buttons/DefaultButton";
import DefaultTextInput from "@/src/components/input/DefaultTextInput";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import React from "react";
import { StyleSheet } from "react-native";
import SignInWidthText from "../share/SignInWidthText";
import SingInWithSocialMedia from "../share/SingInWithSocialMedia";
import AlreadyHaveAccount from "../share/AlreadyHaveAccount";
import TextButton from "@/src/components/buttons/TextButton";
import LogoWithRedirectLink from "@/src/components/logo/LogoWithRedirectLink";

const SignInComponent = () => {
  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.signUpContainer}>
          <LogoWithRedirectLink />
          <DefaultView style={styles.singUpText}>
            <TypoGraphy headingType="h1">Hello,</TypoGraphy>
            <TypoGraphy headingType="h1">Welcome Back !</TypoGraphy>
          </DefaultView>
          <DefaultTextInput
            placeholder="Phone Number or Email"
            style={styles.emailInput}
          />
          <DefaultTextInput placeholder="Password" />
          <DefaultView style={styles.newPasswordText}>
            <TextButton
              label="Forgot password ?"
              isLink={true}
              href={"/auth/newPassword"}
            />
          </DefaultView>
          <DefaultButton label="Sign Up" size="md" style={styles.singUpBtn} />
          <SignInWidthText />
          <SingInWithSocialMedia style={styles.socialMediaContainer} />
          <AlreadyHaveAccount href={"/auth/signUp"} textBtnText="Sign Up" />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
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
  singUpText: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  emailInput: {
    marginBottom: 40,
  },
  newPasswordText: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    paddingTop: 5,
  },
  singUpBtn: {
    marginTop: 66,
    marginBottom: 63,
  },
  socialMediaContainer: {
    paddingTop: 30,
    paddingBottom: 75,
  },
});

export default SignInComponent;
