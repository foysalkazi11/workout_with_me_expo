import DefaultButton from "@/src/components/buttons/DefaultButton";
import DefaultImage from "@/src/components/imageCoponents/DefaultImage";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import React from "react";
import { StyleSheet } from "react-native";
import AlreadyHaveAccount from "../auth/share/AlreadyHaveAccount";
const welcomeHeroImage = require("../../assets/images/welcome/welcome_hero.png");
const welcomeBrandLogo = require("../../assets/images/welcome/welcome_logo.png");

const Welcome = () => {
  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.welcomeScreenContainer}>
          <DefaultImage source={welcomeHeroImage} />
          <TypoGraphy style={styles.welcomeText} headingType="h3">
            Welcome to :{" "}
          </TypoGraphy>
          <DefaultImage source={welcomeBrandLogo} />
          <TypoGraphy style={styles.fitnessGoalText} headingType="body">
            Connect, cast, and crush your fitness goals with friends and family
            on your TV{" "}
          </TypoGraphy>
          <TypoGraphy headingType="body">Let’s get fit, together! </TypoGraphy>
          <DefaultButton
            style={styles.getStartedBtnContainer}
            size="lg"
            label="Get Started"
            isLink={true}
            href={"/auth/signUp"}
          />
          <AlreadyHaveAccount href={"/auth/signIn"} textBtnText="Sign In" />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeScreenContainer: {
    width: "100%",
    height: "auto",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 96,
  },
  welcomeText: {
    paddingTop: 60,
    paddingBottom: 12,
  },
  fitnessGoalText: {
    textAlign: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },
  getStartedBtnContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
});

export default Welcome;
